import { PageIntro, EditorialRows } from "./editorial";
import Image from "next/image";
export { TekaptoPage, WebPage } from "./professional-pages";
import { pageCopy } from "@/data/pages";
import { archiveNote, caseContent, projects } from "@/data/projects";
import { home, profile, type Locale } from "@/data/site";
import { AINativeSection, ContentStrip } from "./home";
import { MediaFrame, SectionLabel } from "./primitives";

export function HurtadoPage({ lang }: { lang: Locale }) {
  const content = caseContent.hurtado;
  return (
    <>
      <PageIntro
        lang={lang}
        label="04 / AUTOMOTRIZ HURTADO"
        title={content.statement[lang]}
        intro={content.intro[lang]}
      />
      <div className="container">
        <dl className="project-meta">
          <div>
            <dt>{pageCopy.discipline[lang]}</dt>
            <dd>{pageCopy.growthDigitalMarketing[lang]}</dd>
          </div>
          <div>
            <dt>{pageCopy.caseStudy[lang]}</dt>
            <dd>{pageCopy.documentationInProgress[lang]}</dd>
          </div>
        </dl>
        <MediaFrame name="hurtado" lang={lang} priority />
        <EditorialRows lang={lang} rows={content.sections} />
        <div className="gallery-pair campaign-gallery">
          <figure className="hurtado-campaign-video">
            <video
              controls
              playsInline
              preload="none"
              poster="/work/hurtado/evo-poster.webp"
              aria-label={
                lang === "es"
                  ? "Automotriz Hurtado: Mitsubishi Evo VIII"
                  : "Automotriz Hurtado: Mitsubishi Evo VIII (Spanish audio)"
              }
            >
              <source src="/work/hurtado/evo-hurtado.mp4" type="video/mp4" />
            </video>
            <figcaption>Automotriz Hurtado · Mitsubishi Evo VIII</figcaption>
          </figure>
          <div className="gallery-note">
            <SectionLabel>{pageCopy.aConnectedExperience[lang]}</SectionLabel>
            <h2>{pageCopy.fromDiscoveryToAConversation[lang]}</h2>
            <p>{pageCopy.aFrameworkForDocumentingTheCustomer[lang]}</p>
            <ol className="lead-flow">
              {pageCopy.contentDiscoveryDigitalPresenceWhatsappInquiry[
                lang
              ].map((item) => (
                <li key={item}>
                  {item}
                  <span aria-hidden="true">↓</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export function DesignPage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageIntro
        lang={lang}
        label={home.designLabel[lang]}
        title={home.designTitle[lang]}
        intro={home.designCopy[lang]}
      />
      <div className="container">
        <div className="design-disciplines">
          {pageCopy.graphicDesignLogoDesignVisualIdentities[lang].map(
            (item, i) => (
              <span key={item}>
                <span className="mono">0{i + 1}</span>
                {item}
              </span>
            ),
          )}
        </div>
        <MediaFrame name="design" lang={lang} priority />
        <div className="archive-caption">
          <SectionLabel>{pageCopy.theVisualArchive[lang]}</SectionLabel>
          <p>{archiveNote[lang]}</p>
        </div>
        <div className="design-gallery">
          <MediaFrame name="logos" lang={lang} />
          <MediaFrame name="applications" lang={lang} />
        </div>
        <EditorialRows
          lang={lang}
          rows={[
            {
              title: pageCopy.oneIdeaACompleteVisualLanguage,
              copy: pageCopy.aLogoIsOnlyTheBeginning,
            },
            {
              title: pageCopy.aBuilderSPerspective,
              copy: pageCopy.designIsAComplementaryPartOf,
            },
          ]}
        />
      </div>
    </>
  );
}

export function MotorsportPage({ lang }: { lang: Locale }) {
  const facts = [
    [pageCopy.current, pageCopy.karting],
    [pageCopy.team, pageCopy.uniMotorsportUms],
    [pageCopy.role2, pageCopy.mainDriver],
    [pageCopy.project, pageCopy.formulaSae],
    [pageCopy.target, pageCopy.brazil2027],
  ];
  return (
    <>
      <div className="dark-section motorsport-page">
        <PageIntro
          lang={lang}
          label={home.racingLabel[lang]}
          title={pageCopy.builtToLearnDrivenToRace[lang]}
          intro={home.racingCopy[lang]}
        />
        <div className="container">
          <div className="racing-image-pair">
            <MediaFrame name="racingPortrait" lang={lang} priority />
            <MediaFrame name="racing" lang={lang} />
          </div>
          <dl className="motorsport-specs">
            {facts.map(([label, value], i) => (
              <div key={i}>
                <dt>{label[lang]}</dt>
                <dd>{value[lang]}</dd>
              </div>
            ))}
          </dl>
          <div className="motorsport-story motorsport-story-with-photo">
            <div>
              <SectionLabel>UNI MOTORSPORT</SectionLabel>
              <h2>{pageCopy.theNextChapterIsBeingBuilt[lang]}</h2>
              <p className="motorsport-story-intro">
                {pageCopy.atUniversidadNacionalDeIngenierA[lang]}
              </p>
              <p className="muted">{pageCopy.brazil2027IsTheTeamS[lang]}</p>
              <Image
                className="ums-logo"
                src="/images/motorsport/ums-logo.webp"
                alt="UMS · UNI Motorsport"
                width={653}
                height={219}
                sizes="(max-width: 700px) 90vw, 45vw"
              />
            </div>
            <MediaFrame name="team" lang={lang} />
          </div>
        </div>
      </div>
    </>
  );
}

export function AboutPage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageIntro
        lang={lang}
        label={pageCopy.thePersonBehindTheWork[lang]}
        title={pageCopy.alwaysCuriousAlwaysBuilding[lang]}
        intro={home.aboutCopy[lang]}
      />
      <div className="container">
        <div className="about-page-grid">
          <MediaFrame name="about" lang={lang} priority />
          <div>
            <h2>{profile.name}</h2>
            <dl className="about-facts">
              <div>
                <dt>{pageCopy.basedIn2[lang]}</dt>
                <dd>{profile.location[lang]}</dd>
              </div>
              <div>
                <dt>{pageCopy.university[lang]}</dt>
                <dd>{profile.university}</dd>
              </div>
              <div>
                <dt>{pageCopy.studying[lang]}</dt>
                <dd>{profile.degree[lang]}</dd>
              </div>
              <div>
                <dt>TEKAPTO</dt>
                <dd>{projects[0].role[lang]}</dd>
              </div>
            </dl>
            <p>{pageCopy.softwareEntrepreneurshipDesignAndRacingAre[lang]}</p>
          </div>
        </div>
        <EditorialRows
          lang={lang}
          rows={[
            {
              title: pageCopy.programmingData,
              copy: pageCopy.cCJavaAndPythonAre,
            },
          ]}
        />
        <div className="hardware-section">
          <div>
            <SectionLabel>SOFTWARE ↔ HARDWARE</SectionLabel>
            <h2>{pageCopy.beyondTheScreen[lang]}</h2>
            <p>{pageCopy.electronicsTrainingHasGivenMePractical[lang]}</p>
            <p className="tool-list">
              {pageCopy.electronicsConnectionsPcbSoldering[lang]}
            </p>
          </div>
          <MediaFrame name="hardware" lang={lang} />
        </div>
      </div>
      <AINativeSection lang={lang} />
      <ContentStrip lang={lang} />
    </>
  );
}
