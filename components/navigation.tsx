"use client";

import Link from "next/link";
import { CVButton } from "./cv-button";
import { SocialIcon } from "./social-icon";
import { useEffect, useRef, useState } from "react";
import { href, social, ui, type Locale } from "@/data/site";

export function Navigation({ lang, page }: { lang: Locale; page: string }) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  const links = [
    {
      label: ui.motorsport[lang],
      url: href(lang, "motorsport"),
      active: page === "motorsport",
    },
    {
      label: ui.about[lang],
      url: href(lang, "about"),
      active: page === "about",
    },
  ];
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link
          href={href(lang)}
          className="wordmark"
          aria-label={`${ui.home[lang]} · Marcelo Jauregui`}
        >
          MARCELO JAUREGUI
        </Link>
        <nav
          className="desktop-nav"
          aria-label={
            lang === "en" ? "Main navigation" : "Navegación principal"
          }
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.url}
              aria-current={link.active ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <nav
            className="language-switch"
            aria-label={lang === "en" ? "Language" : "Idioma"}
          >
            <Link
              href={href("en", page)}
              hrefLang="en"
              lang="en"
              aria-label="English"
              aria-current={lang === "en" ? "page" : undefined}
            >
              EN
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={href("es", page)}
              hrefLang="es"
              lang="es"
              aria-label="Español"
              aria-current={lang === "es" ? "page" : undefined}
            >
              ES
            </Link>
          </nav>
          <a
            className="nav-contact"
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon url={social.linkedin} /> {ui.contact[lang]}{" "}
            <span aria-hidden="true">↗</span>
          </a>
          <CVButton lang={lang} />
          <button
            ref={button}
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? ui.close[lang] : ui.menu[lang]}
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        hidden={!open}
        aria-label={lang === "en" ? "Mobile navigation" : "Navegación móvil"}
      >
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.url}
            aria-current={link.active ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
        <a
          href={social.linkedin}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <SocialIcon url={social.linkedin} /> {ui.contact[lang]}
          <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
