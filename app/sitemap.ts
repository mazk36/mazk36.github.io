import type { MetadataRoute } from "next";
import { href, routes } from "@/data/site";
import { isPublicSite, siteOrigin } from "@/lib/metadata";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return isPublicSite
    ? (["en", "es"] as const).flatMap((lang) =>
        routes.map((page) => ({
          url: `${siteOrigin}${href(lang, page)}`,
          alternates: {
            languages: {
              en: `${siteOrigin}${href("en", page)}`,
              es: `${siteOrigin}${href("es", page)}`,
            },
          },
        })),
      )
    : [];
}
