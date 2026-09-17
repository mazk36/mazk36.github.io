import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const lang of ["en", "es"] as const) {
  test(`${lang} — all four categories, focus, scoped branding and screenshots`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(lang === "en" ? "/" : "/es");
    const next = page.getByRole("button", {
      name: lang === "en" ? "Next category" : "Siguiente categoría",
    });
    const previous = page.getByRole("button", {
      name: lang === "en" ? "Previous category" : "Categoría anterior",
    });
    const counter = page.locator(".carousel-counter");
    await expect(page.locator(".work-slide")).toHaveCount(4);
    await expect(
      page.locator(
        ".carousel-index, .hero-name, .hero-portrait-caption, .portrait-note, .hero-copy > .section-label",
      ),
    ).toHaveCount(0);
    await expect(
      page.locator(".web-slide-art video, .web-slide-art .video-control"),
    ).toHaveCount(0);
    await expect(page.locator(".web-slide-art img")).toHaveCount(2);
    await expect(previous).toBeDisabled();
    for (let i = 0; i < 4; i++) {
      await expect(counter).toContainText(`0${i + 1} / 04`);
      await expect(
        page.locator(`.work-slide[data-slide="${i}"] > .slide-content`),
      ).not.toHaveAttribute("inert");
      await expect(page.locator(".slide-content[inert]")).toHaveCount(3);
      await expect
        .poll(() =>
          page.locator(".work-track").evaluate((el, index) => {
            const slides = el.querySelectorAll<HTMLElement>(".work-slide");
            return Math.abs(
              el.scrollLeft - (slides[index].offsetLeft - slides[0].offsetLeft),
            );
          }, i),
        )
        .toBeLessThanOrEqual(1);
      if (i < 3) await next.click();
    }
    await expect(next).toBeDisabled();
    const outsideSignal = await page.evaluate(() =>
      [...document.querySelectorAll("body *")]
        .filter((el) => !el.closest('[data-brand-scope="tekapto"]'))
        .filter((el) =>
          [
            getComputedStyle(el).color,
            getComputedStyle(el).backgroundColor,
            getComputedStyle(el).borderColor,
          ].includes("rgb(255, 88, 56)"),
        )
        .map((el) => el.tagName),
    );
    expect(outsideSignal).toEqual([]);
    const track = page.locator(".work-track");
    await track.focus();
    await page.keyboard.press("Home");
    await expect(counter).toContainText("01 / 04");
    await page.keyboard.press("ArrowRight");
    await expect(counter).toContainText("02 / 04");
    await page.keyboard.press("ArrowLeft");
    await expect(counter).toContainText("01 / 04");
    await page.keyboard.press("End");
    await expect(counter).toContainText("04 / 04");
    await page.keyboard.press("Tab");
    await expect(
      page.locator('.work-slide[data-slide="3"] .text-link'),
    ).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(
      lang === "en"
        ? "/work/automotriz-hurtado"
        : "/es/work/automotriz-hurtado",
    );
    // Reload between DOM-instrumenting audits and interaction checks.
    for (let i = 0; i < 4; i++) {
      await page.goto(lang === "en" ? "/" : "/es");
      for (let step = 0; step < i; step++) {
        await next.click();
        await expect(counter).toContainText(`0${step + 2} / 04`);
      }
      await expect(counter).toContainText(`0${i + 1} / 04`);
      await page.screenshot({
        fullPage: false,
        path: `qa/screenshots/${lang}-carousel-${i + 1}-1440.png`,
      });
      const violations = (
        await new AxeBuilder({ page })
          .include("#work")
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations;
      expect(
        violations.map((v) => ({
          id: v.id,
          targets: v.nodes.map((n) => n.target),
        })),
      ).toEqual([]);
    }
  });
}

test("mouse drag, horizontal trackpad and vertical scroll do not conflict", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const track = page.locator(".work-track");
  await track.scrollIntoViewIfNeeded();
  const box = (await track.boundingBox())!;
  await page.mouse.move(box.x + box.width * 0.8, box.y + 180);
  await page.mouse.down();
  await page.mouse.move(box.x + 35, box.y + 180, { steps: 20 });
  await page.mouse.up();
  await expect(page.locator(".carousel-counter")).toContainText("02 / 04");
  await expect(page).toHaveURL("/");
  await page.mouse.move(box.x + 150, box.y + 160);
  const scrollY = await page.evaluate(() => window.scrollY);
  await page.mouse.wheel(0, 450);
  await expect
    .poll(() => page.evaluate(() => window.scrollY))
    .toBeGreaterThan(scrollY + 100);
  await expect(page.locator(".carousel-counter")).toContainText("02 / 04");
  await track.scrollIntoViewIfNeeded();
  const newBox = (await track.boundingBox())!;
  await page.mouse.move(newBox.x + 150, newBox.y + 160);
  await page.mouse.wheel(1200, 0);
  await expect(page.locator(".carousel-counter")).toContainText("03 / 04");
});

test("touch swipe, mobile slides and reduced motion", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3107/es");
  const track = page.locator(".work-track");
  await track.scrollIntoViewIfNeeded();
  const box = (await track.boundingBox())!;
  const cdp = await context.newCDPSession(page);
  const y = Math.max(160, box.y + 190);
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [{ x: 335, y }],
  });
  for (let x = 310; x >= 55; x -= 25) {
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [{ x, y }],
    });
    // Model a 220 ms physical gesture; a zero-duration CDP fling is not a swipe.
    await page.waitForTimeout(20);
  }
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchEnd",
    touchPoints: [],
  });
  await expect(page.locator(".carousel-counter")).toContainText("02 / 04");
  await expect
    .poll(() =>
      track.evaluate((el) => {
        const slides = el.querySelectorAll<HTMLElement>(".work-slide");
        return Math.abs(
          el.scrollLeft - (slides[1].offsetLeft - slides[0].offsetLeft),
        );
      }),
    )
    .toBeLessThanOrEqual(1);
  await track.focus();
  await page.keyboard.press("Home");
  await expect(page.locator(".carousel-counter")).toContainText("01 / 04");
  for (let i = 0; i < 4; i++) {
    if (i > 0) await page.locator(".carousel-arrows button").nth(1).click();
    await expect(page.locator(".carousel-counter")).toContainText(
      `0${i + 1} / 04`,
    );
    await page.screenshot({
      fullPage: false,
      path: `qa/screenshots/es-carousel-${i + 1}-390.png`,
    });
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBe(390);
  }
  await context.close();
});

test("videos are local, opt-in, mutually exclusive and pause outside the viewport", async ({
  page,
}) => {
  const requests: string[] = [];
  page.on("request", (request) => {
    if (/\.mp4/.test(request.url())) requests.push(request.url());
  });
  await page.goto("/work/tekapto");
  await page.locator('[data-video="clevun"]').scrollIntoViewIfNeeded();
  expect(requests).toEqual([]);
  const video = page.locator('[data-video="clevun"] video');
  await page
    .getByRole("button", { name: "Play showcase: Clevun", exact: true })
    .click();
  await expect
    .poll(() =>
      video.evaluate(
        (el) =>
          !(el as HTMLVideoElement).paused &&
          (el as HTMLVideoElement).currentTime > 0,
      ),
    )
    .toBe(true);
  expect(await video.evaluate((el) => (el as HTMLVideoElement).muted)).toBe(
    true,
  );
  await page.locator('[data-video="iceguin"]').scrollIntoViewIfNeeded();
  await expect
    .poll(() => video.evaluate((el) => (el as HTMLVideoElement).paused))
    .toBe(true);
  await page
    .getByRole("button", { name: "Play showcase: Iceguin", exact: true })
    .click();
  const secondVideo = page.locator('[data-video="iceguin"] video');
  await expect
    .poll(() => secondVideo.evaluate((el) => !(el as HTMLVideoElement).paused))
    .toBe(true);
  await page.locator("footer").scrollIntoViewIfNeeded();
  await expect
    .poll(() => secondVideo.evaluate((el) => (el as HTMLVideoElement).paused))
    .toBe(true);
  expect(
    requests.every((url) =>
      url.startsWith("http://127.0.0.1:3107/work/tekapto/"),
    ),
  ).toBe(true);
});

test("legacy links redirect permanently to the new bilingual chapters", async ({
  request,
}) => {
  for (const prefix of ["", "/es"])
    for (const [from, to] of [
      ["/work/web", "/work/web-development"],
      ["/design", "/work/brand-design"],
    ]) {
      const response = await request.get(`${prefix}${from}`, {
        maxRedirects: 0,
      });
      expect(response.status()).toBe(308);
      expect(response.headers().location).toBe(`${prefix}${to}`);
    }
});
