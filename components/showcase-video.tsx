"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { showcaseCopy } from "@/data/showcase";
import type { Locale } from "@/data/site";

export function ShowcaseVideo({
  id,
  title,
  lang,
  className = "",
}: {
  id: string;
  title: string;
  lang: Locale;
  className?: string;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const shell = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const poster = `/work/tekapto/${id}-poster.webp`;

  useEffect(() => {
    const el = shell.current;
    if (!el) return;
    const pause = () => video.current?.pause();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.35) pause();
      },
      { threshold: [0, 0.35] },
    );
    observer.observe(el);
    const onVisibility = () => {
      if (document.hidden) pause();
    };
    const onOtherPlay = (event: Event) => {
      if (event.target !== video.current) pause();
    };
    document.addEventListener("visibilitychange", onVisibility);
    document.addEventListener("play", onOtherPlay, true);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("play", onOtherPlay, true);
    };
  }, []);

  async function toggle() {
    const el = video.current;
    if (!el) return;
    if (!el.paused) {
      el.pause();
      return;
    }
    setFailed(false);
    if (!loaded || failed) {
      el.src = `/work/tekapto/${id}-showcase.mp4`;
      el.load();
      setLoaded(true);
    }
    try {
      await el.play();
    } catch {
      setFailed(true);
    }
  }

  return (
    <div className={`showcase-video ${className}`} ref={shell} data-video={id}>
      <div className="video-surface">
        {!loaded && (
          <Image
            src={poster}
            alt={`${title} — ${lang === "en" ? "visual showcase poster" : "poster del showcase visual"}`}
            fill
            sizes="(max-width:700px) 100vw, 65vw"
          />
        )}
        <video
          ref={video}
          muted
          playsInline
          preload="none"
          poster={poster}
          aria-label={`${title} · ${showcaseCopy.videoDescription[lang]}`}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onError={() => setFailed(true)}
        />
        <button
          className="video-control"
          type="button"
          aria-label={`${playing ? showcaseCopy.pause[lang] : showcaseCopy.play[lang]}: ${title}`}
          aria-pressed={playing}
          onClick={toggle}
        >
          <span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span>
          <span>
            {playing ? showcaseCopy.pause[lang] : showcaseCopy.play[lang]}
          </span>
        </button>
        {failed && (
          <p className="video-error" role="status">
            {showcaseCopy.videoUnavailable[lang]}
          </p>
        )}
      </div>
    </div>
  );
}
