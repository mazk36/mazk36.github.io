import Image from "next/image";
import { SocialIcon } from "./social-icon";
import {
  capabilities,
  home,
  href,
  profile,
  social,
  type Locale,
} from "@/data/site";
import { SelectedWork } from "./selected-work";
import { universityCopy } from "@/data/work";
import { Arrow, MediaFrame, SectionLabel, TextLink } from "./primitives";

export function AINativeSection({ lang }: { lang: Locale }) {
  return (
    <section
      className="ai-section container section-space"
      aria-labelledby="ai-title"
    >
      <div>
        <SectionLabel>{home.aiLabel[lang]}</SectionLabel>
        <h2 id="ai-title">{home.aiTitle[lang]}</h2>
        <p className="body-copy">{home.aiCopy[lang]}</p>
        <ul
          className="ai-tools"
          aria-label={lang === "es" ? "Herramientas de IA" : "AI tools"}
        >
          {[
            { name: "Codex", asset: "codex" },
            { name: "Claude Code", asset: "claude-code" },
            { name: "Higgsfield", asset: "higgsfield" },
          ].map((tool) => (
            <li key={tool.asset}>
              <Image
                src={`/images/ai/${tool.asset}.webp`}
                alt=""
                width={40}
                height={40}
              />
              <span>{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <ol className="workflow">
        {home.aiSteps.map((step, index) => (
          <li key={index}>
            <span className="mono">0{index + 1}</span>
            <div>
              <h3>{step.title[lang]}</h3>
              <p>{step.copy[lang]}</p>
            </div>
            <span aria-hidden="true">{index === 2 ? "↗" : "↓"}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ContentStrip({ lang }: { lang: Locale }) {
  return (
    <section className="content-strip container section-space">
      <div>
        <SectionLabel>{home.contentLabel[lang]}</SectionLabel>
        <h2>{home.contentTitle[lang]}</h2>
        <p>{home.contentCopy[lang]}</p>
        <div className="content-social-links">
          <TextLink to={social.instagram} external>
            Instagram
          </TextLink>
          <TextLink to={social.tiktok} external>
            TikTok
          </TextLink>
        </div>
      </div>
      <div className="content-stats">
        <div>
          <strong>~3K</strong>
          <span>TikTok · {home.followers[lang]}</span>
        </div>
        <div>
          <strong>~2K</strong>
          <span>Instagram · {home.followers[lang]}</span>
        </div>
        <div>
          <strong>~500K</strong>
          <span>{home.views[lang]}</span>
        </div>
      </div>
    </section>
  );
}

export function HomePage({ lang }: { lang: Locale }) {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">{home.headline[lang]}</h1>
          <p className="hero-intro">{home.intro[lang]}</p>
          <div className="hero-links">
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub ↗"
            >
              <SocialIcon url={social.github} /> GitHub <Arrow />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn ↗"
            >
              <SocialIcon url={social.linkedin} /> LinkedIn <Arrow />
            </a>
          </div>
          <div className="hero-metadata">
            <span className="location">
              <span aria-hidden="true">◉</span>
              {profile.location[lang]}
            </span>
            <div>
              <span>{profile.university}</span>
              <span>{profile.degree[lang]}</span>
            </div>
          </div>
        </div>
        <div className="hero-portrait">
          <MediaFrame name="hero" lang={lang} priority caption={false} />
        </div>
      </section>
      <section
        className="capabilities container"
        aria-label={lang === "en" ? "Capabilities" : "Capacidades"}
      >
        {capabilities.map((item, index) => (
          <div key={index} className={index < 2 ? "primary-capability" : ""}>
            <span className="mono">0{index + 1}</span>
            <h2>{item.title[lang]}</h2>
            <p>{item.copy[lang]}</p>
          </div>
        ))}
      </section>
      <SelectedWork lang={lang} />
      <AINativeSection lang={lang} />
      <section
        className="motorsport-feature dark-section"
        aria-labelledby="racing-title"
      >
        <div className="container section-space">
          <SectionLabel>{home.racingLabel[lang]}</SectionLabel>
          <div className="racing-heading">
            <h2 id="racing-title">{home.racingTitle[lang]}</h2>
            <div>
              <p>{home.racingCopy[lang]}</p>
              <TextLink to={href(lang, "motorsport")}>
                {home.racingLink[lang]}
              </TextLink>
            </div>
          </div>
          <div className="racing-image-pair">
            <MediaFrame name="racingPortrait" lang={lang} />
            <MediaFrame name="racing" lang={lang} />
          </div>
          <div className="racing-facts">
            <div>
              <span className="section-label">
                {lang === "en" ? "THE TEAM" : "EL EQUIPO"}
              </span>
              <strong>UNI Motorsport</strong>
              <span>Formula SAE · UMS</span>
            </div>
            <div>
              <span className="section-label">
                {lang === "en" ? "MY ROLE" : "MI ROL"}
              </span>
              <strong>
                {lang === "en" ? "Main driver" : "Piloto principal"}
              </strong>
              <span>
                {lang === "en"
                  ? "Karting & Formula SAE"
                  : "Karting y Formula SAE"}
              </span>
            </div>
            <div>
              <span className="section-label">{home.target[lang]}</span>
              <strong>
                {lang === "en" ? "Brazil, 2027" : "Brasil, 2027"}
                <span className="target-arrow" aria-hidden="true">
                  ↗
                </span>
              </strong>
              <span>
                {lang === "en"
                  ? "A goal we’re building toward."
                  : "Una meta que estamos construyendo."}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-feature container section-space"
        aria-labelledby="about-title"
      >
        <MediaFrame name="about" lang={lang} />
        <div>
          <SectionLabel>{home.aboutLabel[lang]}</SectionLabel>
          <h2 id="about-title">{home.aboutTitle[lang]}</h2>
          <p className="body-copy">{home.aboutCopy[lang]}</p>
          <div className="about-detail">
            <span className="mono">UNI / LIMA, PE</span>
            <p>{profile.degree[lang]}</p>
          </div>
          <TextLink to={href(lang, "about")}>{home.aboutLink[lang]}</TextLink>
        </div>
      </section>
      <section
        className="hardware-home container section-space"
        aria-labelledby="university-title"
      >
        <div>
          <SectionLabel>{universityCopy.label[lang]}</SectionLabel>
          <h2 id="university-title">{universityCopy.title[lang]}</h2>
          <Image
            className="university-logo"
            src="/images/education/uni-logo.png"
            alt="Universidad Nacional de Ingeniería"
            width={395}
            height={128}
            sizes="(max-width: 700px) 85vw, 320px"
          />
        </div>
        <div>
          <p className="body-copy">{universityCopy.description[lang]}</p>
          <dl>
            <div>
              <dt>{universityCopy.degreeLabel[lang]}</dt>
              <dd>{universityCopy.degree[lang]}</dd>
            </div>
            <div>
              <dt>{universityCopy.standingLabel[lang]}</dt>
              <dd>{universityCopy.standing[lang]}</dd>
            </div>
          </dl>
          <TextLink to={href(lang, "about")}>
            {universityCopy.link[lang]}
          </TextLink>
        </div>
      </section>
      <ContentStrip lang={lang} />
    </>
  );
}
