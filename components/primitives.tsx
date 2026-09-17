import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import path from "node:path";
import type { CSSProperties, ReactNode } from "react";
import { media, type MediaKey } from "@/data/media";
import { href, ui, type Locale } from "@/data/site";
import { SocialIcon } from "./social-icon";

export function Arrow({ diagonal = true }: { diagonal?: boolean }) {
  return (
    <span className="arrow" aria-hidden="true">
      {diagonal ? "↗" : "→"}
    </span>
  );
}
export function TextLink({
  children,
  to,
  className = "",
  external = false,
}: {
  children: ReactNode;
  to: string;
  className?: string;
  external?: boolean;
}) {
  return (
    <Link
      className={`text-link ${className}`}
      href={to}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <SocialIcon url={to} />
      {children}
      <Arrow />
    </Link>
  );
}
export function SectionLabel({
  children,
  number,
}: {
  children: ReactNode;
  number?: string;
}) {
  return (
    <p className="section-label">
      {number && <span>{number} / </span>}
      {children}
    </p>
  );
}
export function MediaFrame({
  name,
  lang,
  className = "",
  priority = false,
  caption = true,
}: {
  name: MediaKey;
  lang: Locale;
  className?: string;
  priority?: boolean;
  caption?: boolean;
}) {
  const item = media[name];
  const available = existsSync(path.join(process.cwd(), "public", item.path));
  return (
    <figure
      data-media={name}
      className={`media-frame ${className} ${available ? "has-image" : "is-placeholder"}`}
    >
      <div
        className="media-surface"
        style={{ "--media-ratio": item.ratio } as CSSProperties}
      >
        {available ? (
          <Image
            src={item.path}
            alt={item.alt[lang]}
            fill
            sizes={
              name === "hero"
                ? "(max-width: 700px) 100vw, 30vw"
                : "(max-width: 700px) 100vw, (max-width: 1200px) 70vw, 1200px"
            }
            priority={priority}
          />
        ) : (
          <>
            <span className="frame-index" aria-hidden="true">
              BJ —{" "}
              {String(Object.keys(media).indexOf(name) + 1).padStart(2, "0")}
            </span>
            <div className="placeholder-composition" aria-hidden="true">
              <span />
              <span />
              <i>+</i>
            </div>
            <div className="placeholder-label">
              <span className="placeholder-name">{item.label[lang]}</span>
              <span className="placeholder-status">
                {ui.imagePending[lang]}
              </span>
            </div>
            <span className="frame-ratio" aria-hidden="true">
              {item.ratio.replace(" / ", ":")}
            </span>
          </>
        )}
      </div>
      {caption && (
        <figcaption>
          {item.label[lang]}
          <span aria-hidden="true">↗</span>
        </figcaption>
      )}
    </figure>
  );
}
export function ChapterEnd({
  lang,
  page,
  title,
}: {
  lang: Locale;
  page: string;
  title: string;
}) {
  return (
    <div className="chapter-end container">
      <span className="section-label">{ui.next[lang]}</span>
      <Link href={href(lang, page)}>
        {title}
        <Arrow />
      </Link>
    </div>
  );
}
