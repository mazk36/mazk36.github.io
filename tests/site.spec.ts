import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdirSync } from "node:fs";
import { routes, href } from "../data/site";

mkdirSync("qa/screenshots", { recursive: true });
const widths = [375, 390, 430, 768, 1024, 1440, 1920];
for (const lang of ["en", "es"] as const) {
  for (const route of routes) {
    test(`${lang} /${route} — rendering, responsive, metadata and accessibility`, async ({
      page,
    }) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (message) => {
        if (["error", "warning"].includes(message.type()))
          errors.push(message.text());
      });
      const response = await page.goto(href(lang, route));
      expect(response?.status()).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("main")).toBeVisible();
      expect(
        new URL(
          (await page.locator('link[rel="canonical"]').getAttribute("href"))!,
        ).pathname,
      ).toBe(href(lang, route));
      await expect(page.locator('link[hreflang="en"]')).toHaveCount(1);
      await expect(page.locator('link[hreflang="es"]')).toHaveCount(1);
      await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
        "content",
        lang === "en" ? "en_US" : "es_PE",
      );
      for (const width of widths) {
        await page.setViewportSize({ width, height: 900 });
        const overflow = await page.evaluate(() => ({
          viewport: innerWidth,
          document: document.documentElement.scrollWidth,
          offenders: [
            ...document.querySelectorAll("main *, header *, footer *"),
          ]
            .filter((el) => {
              // Offscreen slides are intentionally clipped by their own scroll container.
              if (el.closest(".work-slide")) return false;
              const r = el.getBoundingClientRect();
              return r.width > 0 && (r.right > innerWidth + 1 || r.left < -1);
            })
            .slice(0, 8)
            .map((el) => `${el.tagName}.${el.className}`),
        }));
        expect(overflow.document, JSON.stringify(overflow)).toBeLessThanOrEqual(
          width,
        );
        expect(overflow.offenders, JSON.stringify(overflow)).toEqual([]);
        if (width === 390 || width === 1440) {
          await page.emulateMedia({ reducedMotion: "reduce" });
          await page.evaluate(async () => {
            for (let y = 0; y < document.body.scrollHeight; y += 900) {
              scrollTo(0, y);
              await new Promise((resolve) => setTimeout(resolve, 60));
            }
            scrollTo(0, 0);
          });
          await expect
            .poll(() =>
              page
                .locator("img")
                .evaluateAll((images) =>
                  images
                    .filter((image) => !image.closest("[inert]"))
                    .every(
                      (image) =>
                        image instanceof HTMLImageElement &&
                        image.complete &&
                        image.naturalWidth > 0,
                    ),
                ),
            )
            .toBe(true);
          await page.screenshot({
            path: `qa/screenshots/${lang}-${route.replaceAll("/", "-") || "home"}-${width}.png`,
            fullPage: true,
          });
          const accessibility = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
            .analyze();
          expect(
            accessibility.violations.map((v) => ({
              id: v.id,
              impact: v.impact,
              nodes: v.nodes.map((n) => n.target),
            })),
          ).toEqual([]);
        }
      }
      const badLinks = await page
        .locator(
          'a[href=""], a[href="#"], a[href*="example.com"], a[href^="mailto:"]',
        )
        .count();
      expect(badLinks).toBe(0);
      expect(errors).toEqual([]);
    });
  }
}
test("language keeps the current chapter; mobile menu and keyboard work", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/work/tekapto");
  await page.getByRole("link", { name: "Español", exact: true }).click();
  await expect(page).toHaveURL("/es/work/tekapto");
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
  const menu = page.getByRole("button", { name: "Menú" });
  await menu.click();
  await expect(page.locator("#mobile-navigation")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-navigation")).toBeHidden();
  await expect(menu).toBeFocused();
  await menu.click();
  await page
    .locator("#mobile-navigation")
    .getByRole("link", { name: "Sobre mí" })
    .click();
  await expect(page).toHaveURL("/es/about");
  await expect(page.locator("#mobile-navigation")).toBeHidden();
  await page.getByRole("link", { name: "English", exact: true }).click();
  await expect(page).toHaveURL("/about");
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
  await page.emulateMedia({ reducedMotion: "reduce" });
  expect(
    await page
      .locator(".hero-copy")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
});
test("all internal links resolve, 404 is real, metadata assets respond", async ({
  page,
  request,
}) => {
  const internal = new Set<string>();
  for (const lang of ["en", "es"] as const)
    for (const route of routes) {
      await page.goto(href(lang, route));
      const links = await page
        .locator('a[href^="/"]')
        .evaluateAll((els) => els.map((el) => el.getAttribute("href")!));
      links.forEach((link) => internal.add(link.split("#")[0] || "/"));
    }
  for (const url of internal)
    expect((await request.get(url)).status(), url).toBe(200);
  for (const url of ["/does-not-exist", "/es/no-existe"]) {
    const response = await page.goto(url);
    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("link", { name: "Inicio en español" }),
    ).toBeVisible();
  }
  for (const url of [
    "/robots.txt",
    "/sitemap.xml",
    "/icon.svg",
    "/og/en",
    "/og/es",
  ])
    expect((await request.get(url)).status(), url).toBe(200);
  expect((await request.get("/og/invalid")).status()).toBe(404);
});
