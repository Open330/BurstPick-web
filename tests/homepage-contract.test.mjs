import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), "utf8");
}

test("homepage keeps its product, commerce, and support sections", async () => {
  const page = await read("src/app/[locale]/page.tsx");

  for (const section of [
    "HeroSection",
    "FeaturesSection",
    "GallerySection",
    "PricingSection",
    "FAQSection",
    "CTASection",
  ]) {
    assert.match(page, new RegExp(`<${section}\\s*/>`));
  }
});

test("both locales provide the homepage copy used by retained sections", async () => {
  for (const locale of ["en", "ko"]) {
    const messages = JSON.parse(await read(`messages/${locale}.json`));

    for (const namespace of ["metadata", "nav", "hero", "features", "gallery", "pricing", "faq", "cta", "footer"]) {
      assert.ok(messages[namespace], `${locale}.${namespace} is required`);
    }

    assert.equal(typeof messages.hero.tagline, "string");
    assert.equal(typeof messages.gallery.pro_iap, "string");
    assert.equal(typeof messages.pricing.pro_price, "string");
  }
});

test("homepage uses the current real-catalog screenshots and App Store listing", async () => {
  const constants = await read("src/lib/constants.ts");

  for (const screenshot of [
    "web-all-photos-grid.png",
    "web-survey-mode.png",
    "web-iap-license-gate.png",
  ]) {
    assert.match(constants, new RegExp(screenshot.replaceAll(".", "\\.")));
  }

  assert.match(constants, /apps\.apple\.com\/us\/app\/burstpick\/id6760616886/);
});

test("structured data keeps the requested July 9 update date", async () => {
  const seo = await read("src/lib/seo.ts");
  assert.match(seo, /LAST_MODIFIED = "2026-07-09"/);
});
