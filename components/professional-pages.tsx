import Image from "next/image";
import { caseContent, projects } from "@/data/projects";
import { pageCopy } from "@/data/pages";
import { profile, social, type Locale } from "@/data/site";
import {
  companyOtherWork,
  companyProjects,
  showcaseCopy,
  tekaptoOrigin,
  webDemos,
} from "@/data/showcase";
import { SectionLabel, TextLink } from "./primitives";
import { PageIntro, EditorialRows } from "./editorial";
import { ShowcaseVideo } from "./showcase-video";

export function TekaptoPage({ lang }: { lang: Locale }) {
  const content = caseContent.tekapto;
  return (
    <>
      <PageIntro
        lang={lang}
        label="01 / TEKAPTO"
        title={content.statement[lang]}
        intro={content.intro[lang]}
      />
      <div className="container">
        <dl className="project-meta">
          <div>
            <dt>{pageCopy.role[lang]}</dt>
            <dd>{projects[0].role[lang]}</dd>
          </div>
          <div>
            <dt>{pageCopy.focus[lang]}</dt>
            <dd>{pageCopy.technologyCompany[lang]}</dd>
          </div>
          <div>
            <dt>{pageCopy.basedIn[lang]}</dt>
            <dd>{profile.location[lang]}</dd>
          </div>
          <div>
            <dt>{lang === "en" ? "Website" : "Sitio web"}</dt>
            <dd>
              <TextLink to={social.tekapto} external>
                {pageCopy.visitTekapto[lang]}
              </TextLink>
            </dd>
          </div>
        </dl>
        <section
          className="tekapto-case-brand tekapto-scope"
          data-brand-scope="tekapto"
          aria-label={lang === "en" ? "Tekapto identity" : "Identidad Tekapto"}
        >
          <div className="tekapto-brand-heading">
            <Image
              src="/work/tekapto/wordmark-bone.png"
              alt="Tekapto"
              width={296}
              height={98}
              className="tekapto-wordmark"
            />
            <span className="section-label">
              BUILD / AUTOMATE / WEB / SOLVE
            </span>
          </div>
          <div className="tekapto-brand-message">
            <p>
              {lang === "en"
                ? "Understand the problem.\nBuild what it needs."
                : "Entender el problema.\nConstruir lo que necesita."}
            </p>
            <span className="tekapto-signal" aria-hidden="true" />
          </div>
        </section>
        <EditorialRows lang={lang} rows={content.sections} />
        <section className="company-work">
          <SectionLabel>{showcaseCopy.workLabel[lang]}</SectionLabel>
          <div className="section-heading">
            <h2>{showcaseCopy.workTitle[lang]}</h2>
            <p>{showcaseCopy.workNote[lang]}</p>
          </div>
          <div className="company-project-grid">
            {companyProjects.map((project, i) => (
              <article
                key={project.id}
                className={i === 0 ? "company-project-lead" : ""}
              >
                <ShowcaseVideo
                  id={project.id}
                  title={project.title}
                  lang={lang}
                />
                <div className="company-project-info">
                  <div>
                    <p className="section-label">{project.type[lang]}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description[lang]}</p>
                  <TextLink
                    to={`${tekaptoOrigin}/es${project.source}`}
                    external
                  >
                    {showcaseCopy.caseLink[lang]}
                  </TextLink>
                </div>
              </article>
            ))}
          </div>
          <div className="other-company-work">
            {companyOtherWork.map((project) => (
              <article key={project.source}>
                <span className="section-label">{project.type[lang]}</span>
                <h3>{project.title[lang]}</h3>
                <p>{project.description[lang]}</p>
                <TextLink to={`${tekaptoOrigin}/es${project.source}`} external>
                  {showcaseCopy.caseLink[lang]}
                </TextLink>
              </article>
            ))}
          </div>
        </section>
        <section className="identity-story">
          <div className="section-heading">
            <div>
              <SectionLabel>{showcaseCopy.identityLabel[lang]}</SectionLabel>
              <h2>{showcaseCopy.identityTitle[lang]}</h2>
            </div>
            <p>{showcaseCopy.identityCopy[lang]}</p>
          </div>
          <figure className="tekapto-scope" data-brand-scope="tekapto">
            <Image
              src="/work/tekapto/identity-excerpt.webp"
              alt={
                lang === "en"
                  ? "Tekapto identity board excerpt: wordmarks, color palette and graphic system"
                  : "Extracto del tablero de identidad de Tekapto: wordmarks, paleta y sistema gráfico"
              }
              width={1411}
              height={729}
              sizes="(max-width:700px) 100vw, 85vw"
            />
            <figcaption>
              {lang === "en"
                ? "Source: identity master board supplied by Bruno."
                : "Fuente: tablero de identidad proporcionado por Bruno."}
            </figcaption>
          </figure>
        </section>
      </div>
    </>
  );
}

export function WebPage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageIntro
        lang={lang}
        label={lang === "en" ? "02 / WEB DEVELOPMENT" : "02 / DESARROLLO WEB"}
        title={pageCopy.madeForTheWeb[lang]}
        intro={showcaseCopy.webIntro[lang]}
      />
      <div className="container">
        <p className="collection-note">
          {showcaseCopy.webNote[lang]}{" "}
          <a href={`${tekaptoOrigin}/es/web`} target="_blank" rel="noreferrer">
            {showcaseCopy.source[lang]} ↗
          </a>
        </p>
        <div className="web-demo-gallery">
          {webDemos.map((demo, index) => (
            <article className={`web-demo demo-${index}`} key={demo.id}>
              <a
                className="demo-visual"
                href={demo.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${showcaseCopy.viewDemo[lang]}: ${demo.name}`}
              >
                <Image
                  src={demo.image}
                  alt={`${demo.name} — ${lang === "en" ? "screenshot from the published demo" : "captura de la demo publicada"}`}
                  width={1440}
                  height={1000}
                  sizes={
                    index === 0 || index === 5
                      ? "(max-width:700px) 100vw, 85vw"
                      : "(max-width:700px) 100vw, 45vw"
                  }
                  priority={index === 0}
                />
                <span className="demo-corner" aria-hidden="true">
                  ↗
                </span>
              </a>
              <div className="demo-info">
                <div>
                  <p className="section-label">
                    {String(index + 1).padStart(2, "0")} / {demo.category[lang]}{" "}
                    · {showcaseCopy.demo[lang]}
                  </p>
                  <h2>{demo.name}</h2>
                </div>
                <p>{demo.description[lang]}</p>
              </div>
              <div className="demo-meta">
                <span>{showcaseCopy.role[lang]}</span>
                <TextLink to={demo.liveUrl} external>
                  {showcaseCopy.viewDemo[lang]}
                </TextLink>
              </div>
            </article>
          ))}
        </div>
        <section className="web-product-story">
          <div>
            <SectionLabel>{showcaseCopy.productLabel[lang]}</SectionLabel>
            <h2>{showcaseCopy.productTitle[lang]}</h2>
            <p>{showcaseCopy.productNote[lang]}</p>
            <TextLink to={`${tekaptoOrigin}/es/work/clevun`} external>
              {showcaseCopy.caseLink[lang]}
            </TextLink>
          </div>
          <ShowcaseVideo id="clevun" title="Clevun" lang={lang} />
        </section>
      </div>
    </>
  );
}
