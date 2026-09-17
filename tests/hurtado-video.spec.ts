import { test, expect } from "@playwright/test";

for (const width of [390, 1440]) {
  test(`Hurtado video plays manually at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/es/work/automotriz-hurtado");
    const video = page.locator(".hurtado-campaign-video video");
    await video.scrollIntoViewIfNeeded();
    expect(await video.evaluate((el: HTMLVideoElement) => el.paused)).toBe(
      true,
    );
    await expect(video).not.toHaveAttribute("autoplay");
    await expect(video).toHaveAttribute("controls", "");
    await video.evaluate(async (el: HTMLVideoElement) => {
      await el.play();
    });
    await expect
      .poll(() => video.evaluate((el: HTMLVideoElement) => el.currentTime))
      .toBeGreaterThan(0);
    expect(
      await video.evaluate((el: HTMLVideoElement) => ({
        width: el.videoWidth,
        height: el.videoHeight,
        muted: el.muted,
        error: el.error,
      })),
    ).toEqual({ width: 720, height: 1280, muted: false, error: null });
    await video.evaluate((el: HTMLVideoElement) => el.pause());
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBe(width);
    await page
      .locator(".campaign-gallery")
      .screenshot({ path: `qa/screenshots/hurtado-video-${width}.png` });
  });
}
