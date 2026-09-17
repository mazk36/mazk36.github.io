import { home, profile, social, type Locale } from "@/data/site";
import { Arrow, SectionLabel, TextLink } from "./primitives";
import { SocialIcon } from "./social-icon";
import { CVButton } from "./cv-button";

export function Footer({ lang }: { lang: Locale }) {
  const contact = social.email ? `mailto:${social.email}` : social.linkedin;
  const optional = [
    ["Instagram", social.instagram],
    ["TikTok", social.tiktok],
    ["YouTube", social.youtube],
    ["Twitch", social.twitch],
  ];
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <SectionLabel>
          {lang === "en" ? "HAVE SOMETHING IN MIND?" : "¿TIENES ALGO EN MENTE?"}
        </SectionLabel>
        <div className="footer-top">
          <h2>{home.footerTitle[lang]}</h2>
          <div>
            <p>{home.footerCopy[lang]}</p>
            <TextLink to={contact} external={!social.email}>
              {social.email || home.connect[lang]}
            </TextLink>
            <div className="footer-cv">
              <CVButton lang={lang} />
            </div>
          </div>
        </div>
        <div className="footer-links">
          <a href={social.github} target="_blank" rel="noreferrer">
            <SocialIcon url={social.github} /> GitHub <Arrow />
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <SocialIcon url={social.linkedin} /> LinkedIn <Arrow />
          </a>
          {optional
            .filter(([, url]) => url)
            .map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer">
                <SocialIcon url={url} /> {name} <Arrow />
              </a>
            ))}
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {profile.shortName}
          </span>
          <span>
            {profile.location[lang]} ·{" "}
            {lang === "en" ? "Built with intention." : "Hecho con intención."}
          </span>
          <a href="#top">
            {lang === "en" ? "Back to top ↑" : "Volver arriba ↑"}
          </a>
        </div>
      </div>
    </footer>
  );
}
