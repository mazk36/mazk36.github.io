import type { Locale } from "@/data/site";

export function CVButton({ lang }: { lang: Locale }) {
  return (
    <a
      className="cv-button"
      href="/documents/Marcelo-Jauregui-CV.pdf"
      download="Marcelo-Jauregui-CV.pdf"
    >
      {lang === "es" ? "Descargar CV" : "Download CV"}
      <span aria-hidden="true">↓</span>
    </a>
  );
}
