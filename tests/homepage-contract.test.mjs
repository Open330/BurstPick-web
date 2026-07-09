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

  for (const removedSection of [
    "ShowcaseSection",
    "UseCasesSection",
    "NotDoSection",
    "StorySection",
    "AboutSection",
  ]) {
    assert.doesNotMatch(page, new RegExp(removedSection));
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

test("active site surfaces avoid promotional visual effects", async () => {
  const paths = [
    "src/components/layout/Header.tsx",
    "src/components/layout/Footer.tsx",
    "src/components/sections/HeroSection.tsx",
    "src/components/sections/FeaturesSection.tsx",
    "src/components/sections/GallerySection.tsx",
    "src/components/sections/PricingSection.tsx",
    "src/components/sections/FAQSection.tsx",
    "src/components/sections/CTASection.tsx",
    "src/app/[locale]/download/page.tsx",
    "src/app/[locale]/support/page.tsx",
    "src/app/[locale]/models/page.tsx",
    "src/app/[locale]/privacy/page.tsx",
    "src/app/[locale]/terms/page.tsx",
    "src/app/[locale]/license/page.tsx",
  ];
  const source = (await Promise.all(paths.map(read))).join("\n");

  assert.doesNotMatch(
    source,
    /gradient|radial|rounded-(?:xl|2xl|full)|tracking-(?:tight|wide|wider)|shadow-(?:xl|2xl)|drop-shadow/,
  );
});

test("website screenshots render at their natural 16:10 ratio", async () => {
  for (const path of [
    "src/components/sections/HeroSection.tsx",
    "src/components/sections/GallerySection.tsx",
  ]) {
    const source = await read(path);
    assert.match(source, /width=\{1600\}/);
    assert.match(source, /height=\{1000\}/);
    assert.doesNotMatch(source, /\n\s+fill\s*\n|object-cover|aspect-\[16\/10\]/);
  }
});
