import { href, ui, type Locale, type Localized } from "@/data/site";
import { SectionLabel, TextLink } from "./primitives";

export function PageIntro({
  lang,
  label,
  title,
  intro,
}: {
  lang: Locale;
  label: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="page-intro container">
      <TextLink to={`${href(lang)}#work`} className="back-link">
        {ui.back[lang]}
      </TextLink>
      <SectionLabel>{label}</SectionLabel>
      <h1>{title}</h1>
      <p className="page-lead">{intro}</p>
    </div>
  );
}

export function EditorialRows({
  lang,
  rows,
}: {
  lang: Locale;
  rows: readonly { title: Localized; copy: Localized }[];
}) {
  return (
    <div className="editorial-rows">
      {rows.map((row, i) => (
        <section key={i}>
          <span className="mono">0{i + 1}</span>
          <h2>{row.title[lang]}</h2>
          <p>{row.copy[lang]}</p>
        </section>
      ))}
    </div>
  );
}
