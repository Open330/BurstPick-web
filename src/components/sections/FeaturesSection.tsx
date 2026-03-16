import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { FEATURES } from "@/lib/constants";

export function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section id="features" className="relative bg-surface-secondary/50 py-24 sm:py-32">
      <Container>
        {/* Header with AI illustration */}
        <div className="mb-16 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <FadeInView>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t("heading")}
            </h2>
            <p className="max-w-2xl text-lg text-text-secondary">
              {t("subheading")}
            </p>
          </FadeInView>

          <FadeInView direction="right" delay={0.1}>
            <div className="hidden overflow-hidden rounded-xl border border-white/10 shadow-lg lg:block">
              <Image
                src="/assets/feature-ai.avif"
                alt="AI scoring pipeline visualization"
                width={360}
                height={200}
                className="w-[360px]"
              />
            </div>
          </FadeInView>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <FadeInView key={feature.titleKey} delay={i * 0.05}>
                <div className="group h-full rounded-xl border border-white/[0.08] bg-surface-secondary p-6 transition-all duration-300 hover:border-brand-start/30 hover:bg-surface-tertiary">
                  <div className="mb-4 inline-flex rounded-lg bg-brand-start/10 p-2.5 text-brand-start">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 text-base font-semibold">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {t(feature.descKey)}
                  </p>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
