import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { NotDoSection } from "@/components/sections/NotDoSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { StorySection } from "@/components/sections/StorySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
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
