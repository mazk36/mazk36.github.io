import type { MetadataRoute } from "next";
import { isPublicSite, siteOrigin } from "@/lib/metadata";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(isPublicSite ? { allow: "/" } : { disallow: "/" }),
    },
    ...(isPublicSite ? { sitemap: `${siteOrigin}/sitemap.xml` } : {}),
  };
}
