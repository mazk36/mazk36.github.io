import Image from "next/image";
import Link from "next/link";
import { home, href, ui, type Locale } from "@/data/site";
import { carouselCopy, workCategories } from "@/data/work";
import { showcaseCopy } from "@/data/showcase";
import { Arrow, MediaFrame, SectionLabel } from "./primitives";
import { WorkCarousel } from "./work-carousel";

function WorkVisual({ id, lang }: { id: string; lang: Locale }) {
  if (id === "tekapto")
    return (
      <div
        className="tekapto-scope tekapto-slide-art"
        data-brand-scope="tekapto"
      >
        <Image
          src="/work/tekapto/wordmark-bone.png"
          alt="Tekapto"
          width={2172}
          height={724}
          sizes="(max-width:700px) 70vw, (max-width:800px) 420px, 32vw"
          className="tekapto-slide-logo"
        />
        <p className="tekapto-slide-services">BUILD / AUTOMATE / WEB / SOLVE</p>
      </div>
    );
  if (id === "web-development")
    return (
      <div className="web-slide-art">
        <div className="web-slide-previews">
          <figure>
            <Image
              src="/work/web-development/victor-manuel.webp"
              alt="Lúmina Estudio — demo web"
              width={1440}
              height={1000}
              sizes="(max-width:800px) 85vw, 48vw"
            />
            <figcaption>
              Lúmina Estudio <span>{showcaseCopy.demo[lang]}</span>
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/work/web-development/automotriz-hurtado.webp"
              alt="Nexo Motor — demo web"
              width={1440}
              height={1000}
              sizes="(max-width:800px) 85vw, 48vw"
            />
            <figcaption>
              Nexo Motor <span>{showcaseCopy.demo[lang]}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  if (id === "brand-design")
    return (
      <div className="brand-slide-art">
        <MediaFrame name="logos" lang={lang} caption={false} />
        <div className="brand-slot-caption">
          <span>01 — {lang === "en" ? "LOGO" : "LOGO"}</span>
          <span>02 — {lang === "en" ? "IDENTITY" : "IDENTIDAD"}</span>
          <span>03 — {lang === "en" ? "SYSTEM" : "SISTEMA"}</span>
        </div>
      </div>
    );
  return (
    <div className="growth-slide-art">
      <figure className="media-frame has-image">
        <div className="media-surface growth-video-surface">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/work/hurtado/evo-poster.webp"
            aria-label={
              lang === "es"
                ? "Automotriz Hurtado: video en bucle sin sonido"
                : "Automotriz Hurtado: silent looping video"
            }
          >
            <source
              src="/work/hurtado/evo-hurtado-silent.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </figure>
      <div
        className="growth-flow"
        aria-label={lang === "en" ? "Case study focus" : "Enfoque del caso"}
      >
        {(lang === "en"
          ? ["Discover", "Connect", "Converse"]
          : ["Descubrir", "Conectar", "Conversar"]
        ).map((label, i) => (
          <span key={label}>
            {label}
            {i < 2 && <span aria-hidden="true">→</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SelectedWork({ lang }: { lang: Locale }) {
  return (
    <section
      id="work"
      className="selected-work container section-space"
      aria-labelledby="work-title"
    >
      <SectionLabel number="01">{ui.selected[lang]}</SectionLabel>
      <div className="section-heading">
        <h2 id="work-title">{home.workTitle[lang]}</h2>
        <p>{home.workIntro[lang]}</p>
      </div>
      <WorkCarousel lang={lang}>
        {workCategories.map((category) => (
          <article
            key={category.id}
            className={`work-panel work-panel-${category.id}`}
          >
            <div className="work-panel-copy">
              <p className="section-label">
                {category.number} / 04 — {category.subtitle[lang]}
              </p>
              <h3>{category.title[lang]}</h3>
              <p className="work-role">{category.role[lang]}</p>
              <p className="work-summary">{category.description[lang]}</p>
              <Link className="text-link" href={href(lang, category.href)}>
                {carouselCopy.view[lang]}
                <Arrow />
              </Link>
            </div>
            <WorkVisual id={category.id} lang={lang} />
          </article>
        ))}
      </WorkCarousel>
    </section>
  );
}
