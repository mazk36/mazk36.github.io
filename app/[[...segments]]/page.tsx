import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HomePage } from "@/components/home";
import {
  AboutPage,
  DesignPage,
  HurtadoPage,
  MotorsportPage,
  TekaptoPage,
  WebPage,
} from "@/components/pages";
import {
  href,
  parseRoute,
  profile,
  routes,
  social,
  ui,
  type PageKey,
} from "@/data/site";
import { pageMetadata, siteOrigin } from "@/lib/metadata";

type Props = { params: Promise<{ segments?: string[] }> };
export function generateStaticParams() {
  return (["en", "es"] as const).flatMap((lang) =>
    routes.map((page) => ({
      segments: [
        ...(lang === "es" ? ["es"] : []),
        ...page.split("/").filter(Boolean),
      ],
    })),
  );
}
export async function generateMetadata({ params }: Props) {
  const { lang, page } = parseRoute((await params).segments);
  if (!routes.includes(page as PageKey))
    return {
      title: "404 — Marcelo Jauregui",
      robots: { index: false, follow: false },
    };
  return pageMetadata(lang, page as PageKey);
}
export default async function Page({ params }: Props) {
  const { lang, page } = parseRoute((await params).segments);
  const pages = {
    "": HomePage,
    "work/tekapto": TekaptoPage,
    "work/web-development": WebPage,
    "work/automotriz-hurtado": HurtadoPage,
    "work/brand-design": DesignPage,
    motorsport: MotorsportPage,
    about: AboutPage,
  };
  if (!routes.includes(page as PageKey)) notFound();
  const Content = pages[page as PageKey];
  const structured = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: `${siteOrigin}${href(lang)}`,
    sameAs: [social.github, social.linkedin],
    jobTitle: "Co-founder & CTO",
    worksFor: { "@type": "Organization", name: "Tekapto" },
    knowsAbout: [
      "Software Engineering",
      "Artificial Intelligence",
      "Branding",
      "Karting",
    ],
    homeLocation: { "@type": "Place", name: profile.location[lang] },
  };
  return (
    <div id="top" key={`${lang}/${page}`}>
      <a className="skip-link" href="#main">
        {ui.skip[lang]}
      </a>
      <Navigation lang={lang} page={page} />
      <main id="main">
        <Content lang={lang} />
      </main>
      <Footer lang={lang} />
      {page === "" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structured).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </div>
  );
}
