import type { Metadata } from "next";
import { href, seo, type Locale, type PageKey } from "@/data/site";

const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const deploymentOrigin = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const siteOrigin =
  configuredOrigin ||
  (deploymentOrigin ? `https://${deploymentOrigin}` : "http://localhost:3000");
export const isPublicSite =
  new URL(siteOrigin).protocol === "https:" &&
  process.env.VERCEL_ENV !== "preview";
export function pageMetadata(lang: Locale, page: PageKey): Metadata {
  const content = seo[page];
  const title = page
    ? `${content.title[lang]} — Marcelo Jauregui`
    : content.title[lang];
  return {
    metadataBase: new URL(siteOrigin),
    title,
    description: content.description[lang],
    alternates: {
      canonical: href(lang, page),
      languages: {
        en: href("en", page),
        es: href("es", page),
        "x-default": href("en", page),
      },
    },
    openGraph: {
      title,
      description: content.description[lang],
      url: href(lang, page),
      siteName: "Marcelo Jauregui",
      type: "website",
      locale: lang === "en" ? "en_US" : "es_PE",
      alternateLocale: [lang === "en" ? "es_PE" : "en_US"],
      images: [
        {
          url: `/og/${lang}`,
          width: 1200,
          height: 630,
          alt: content.title[lang],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: content.description[lang],
      images: [`/og/${lang}`],
    },
    robots: { index: isPublicSite, follow: isPublicSite },
  };
}
