"use client";

import {
  Children,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type PointerEvent,
  type KeyboardEvent,
} from "react";
import { carouselCopy, workCategories } from "@/data/work";
import type { Locale } from "@/data/site";

export function WorkCarousel({
  lang,
  children,
}: {
  lang: Locale;
  children: ReactNode;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const drag = useRef<{
    id: number;
    x: number;
    scroll: number;
    moved: boolean;
  } | null>(null);
  const suppressClick = useRef(false);
  const items = Children.toArray(children);
  const count = items.length;

  function select(index: number, animate = true) {
    const el = track.current;
    if (!el) return;
    const target = Math.max(0, Math.min(count - 1, index));
    const slides = el.querySelectorAll<HTMLElement>(".work-slide");
    const left = slides[target].offsetLeft - slides[0].offsetLeft;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollTo({ left, behavior: animate && !reduced ? "smooth" : "instant" });
  }

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let frame = 0;
    function update() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const slides = [...el!.querySelectorAll<HTMLElement>(".work-slide")];
        const offset = slides[0]?.offsetLeft || 0;
        const nearest = slides.reduce(
          (best, slide, index) =>
            Math.abs(slide.offsetLeft - offset - el!.scrollLeft) <
            Math.abs(slides[best].offsetLeft - offset - el!.scrollLeft)
              ? index
              : best,
          0,
        );
        setActive(nearest);
      });
    }
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      el.removeEventListener("scroll", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      event.button !== 0 ||
      (event.target as HTMLElement).closest("button,video")
    )
      return;
    suppressClick.current = false;
    drag.current = {
      id: event.pointerId,
      x: event.clientX,
      scroll: event.currentTarget.scrollLeft,
      moved: false,
    };
  }
  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const state = drag.current;
    if (!state) return;
    const delta = state.x - event.clientX;
    if (!state.moved && Math.abs(delta) > 6) {
      state.moved = true;
      event.currentTarget.setPointerCapture(state.id);
      event.currentTarget.classList.add("is-dragging");
    }
    if (state.moved) {
      event.preventDefault();
      event.currentTarget.scrollLeft = state.scroll + delta;
    }
  }
  function endDrag(event: PointerEvent<HTMLDivElement>) {
    const state = drag.current;
    if (!state) return;
    drag.current = null;
    if (!state.moved) return;
    suppressClick.current = true;
    event.currentTarget.classList.remove("is-dragging");
    if (event.currentTarget.hasPointerCapture(state.id))
      event.currentTarget.releasePointerCapture(state.id);
    const slides = [
      ...event.currentTarget.querySelectorAll<HTMLElement>(".work-slide"),
    ];
    const step = slides[1]
      ? slides[1].offsetLeft - slides[0].offsetLeft
      : slides[0].offsetWidth;
    select(Math.round(event.currentTarget.scrollLeft / step));
  }
  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("video,button")) return;
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    select(
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? count - 1
          : active + (event.key === "ArrowRight" ? 1 : -1),
    );
  }

  return (
    <div
      className="work-carousel"
      role="region"
      aria-roledescription={lang === "en" ? "carousel" : "carrusel"}
      aria-label={carouselCopy.label[lang]}
    >
      <p id="carousel-instructions" className="sr-only">
        {carouselCopy.instructions[lang]}
      </p>
      <div
        ref={track}
        className="work-track"
        tabIndex={0}
        aria-label={carouselCopy.label[lang]}
        aria-describedby="carousel-instructions"
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDragStart={(event) => event.preventDefault()}
        onClickCapture={(event) => {
          if (suppressClick.current) {
            event.preventDefault();
            event.stopPropagation();
            suppressClick.current = false;
          }
        }}
      >
        {items.map((item, index) => (
          <div
            className="work-slide"
            data-slide={index}
            key={workCategories[index].id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${count} · ${workCategories[index].title[lang].replaceAll("\n", " ")}`}
          >
            <div className="slide-content" inert={index !== active}>
              {item}
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-toolbar">
        <span
          className="carousel-counter"
          aria-live="polite"
          aria-atomic="true"
        >
          <span>{String(active + 1).padStart(2, "0")}</span> /{" "}
          {String(count).padStart(2, "0")}
        </span>
        <div className="carousel-arrows">
          <button
            type="button"
            aria-label={carouselCopy.previous[lang]}
            disabled={active === 0}
            onClick={() => select(active - 1)}
          >
            ←
          </button>
          <button
            type="button"
            aria-label={carouselCopy.next[lang]}
            disabled={active === count - 1}
            onClick={() => select(active + 1)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
