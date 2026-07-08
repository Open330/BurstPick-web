import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { NotDoSection } from "@/components/sections/NotDoSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { StorySection } from "@/components/sections/StorySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ_KEYS } from "@/lib/constants";
import {
  buildPageMetadata,
  faqPageJsonLd,
  safeJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return buildPageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const metaT = await getTranslations({ locale, namespace: "metadata" });
  const faqT = await getTranslations({ locale, namespace: "faq" });
  const softwareJsonLd = softwareApplicationJsonLd({
    locale,
    description: metaT("description"),
  });
  const faqJsonLd = faqPageJsonLd(
    FAQ_KEYS.map((key) => ({
      question: faqT(key),
      answer: faqT(key.replace("q", "a") as `a${string}`),
    }))
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
      <UseCasesSection />
      <NotDoSection />
      <GallerySection />
      <StorySection />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
