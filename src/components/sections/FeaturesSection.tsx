import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { FEATURES } from "@/lib/constants";

export function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section id="features" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <FadeInView className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {t("heading")}
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-text-secondary">
              {t("subheading")}
            </p>
          </FadeInView>

          <div className="grid border-t border-white/15 sm:grid-cols-2">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <FadeInView
                  key={feature.titleKey}
                  delay={i * 0.03}
                  className="border-b border-white/15 sm:odd:border-r"
                >
                  <article className="h-full py-7 sm:px-7">
                    <Icon size={20} className="mb-5 text-brand-start" />
                    <h3 className="text-base font-semibold">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-text-secondary">
                      {t(feature.descKey)}
                    </p>
                  </article>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
