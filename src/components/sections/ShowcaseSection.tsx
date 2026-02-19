import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/motion/FadeInView";

export function ShowcaseSection() {
  const t = useTranslations("showcase");

  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] py-24 sm:py-32">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/promo-workspace.avif"
          alt=""
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-primary via-surface-primary/90 to-surface-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-primary via-transparent to-surface-primary" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div>
            <FadeInView>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {t("heading")}
              </h2>
            </FadeInView>

            <FadeInView delay={0.1}>
              <p className="mb-4 max-w-lg text-lg leading-relaxed text-text-secondary">
                {t("description")}
              </p>
              <p className="mb-10 text-sm font-medium text-text-muted">
                {t("founder")}
              </p>
            </FadeInView>

            {/* Stats row */}
            <FadeInView delay={0.2}>
              <div className="flex flex-wrap gap-4 sm:gap-8">
                {[
                  { value: t("stat_speed"), desc: t("stat_speed_desc") },
                  { value: t("stat_models"), desc: t("stat_models_desc") },
                  { value: t("stat_formats"), desc: t("stat_formats_desc") },
                  { value: t("stat_privacy"), desc: t("stat_privacy_desc") },
                ].map((stat) => (
                  <div key={stat.value}>
                    <div className="text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-muted">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>

          {/* Promo image */}
          <FadeInView direction="right" delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/30">
              <Image
                src="/assets/marketing-banner.avif"
                alt="BurstPick AI analysis in action"
                width={960}
                height={640}
                className="w-full"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
