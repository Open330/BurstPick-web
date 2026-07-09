import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { SCREENSHOTS } from "@/lib/constants";

export function StorySection() {
  const t = useTranslations("story");

  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] py-24 sm:py-32">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,180,50,0.04), transparent)",
        }}
      />

      <Container>
        <FadeInView className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("heading")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            {t("description")}
          </p>
        </FadeInView>

        {/* Before / After visual */}
        <FadeInView delay={0.2}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 shadow-2xl shadow-black/30">
              <Image
                src={SCREENSHOTS.allPhotosGrid}
                alt="BurstPick full catalog view showing imported photos and filters"
                fill
                sizes="(min-width: 640px) 50vw, calc(100vw - 2rem)"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10" />
              <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                <span className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur-md sm:text-base">
                  {t("before_label")}
                </span>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-gold-start/20 shadow-2xl shadow-black/30">
              <Image
                src={SCREENSHOTS.scoringPanel}
                alt="BurstPick scoring panel showing the recommended keeper candidate from a real burst sequence"
                fill
                sizes="(min-width: 640px) 50vw, calc(100vw - 2rem)"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-gold-start/20" />
              <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6">
                <span className="rounded-lg bg-gold-start/20 px-4 py-2 text-sm font-semibold text-gold-start backdrop-blur-md sm:text-base">
                  {t("after_label")}
                </span>
              </div>
            </div>
          </div>
        </FadeInView>

        {/* Before/After descriptions */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <FadeInView delay={0.3}>
            <div className="rounded-xl border border-white/[0.08] bg-surface-secondary p-6">
              <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
                {t("before_label")}
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                {t("before_desc")}
              </p>
            </div>
          </FadeInView>
          <FadeInView delay={0.4}>
            <div className="rounded-xl border border-gold-start/20 bg-gold-start/[0.03] p-6">
              <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold-start">
                {t("after_label")}
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                {t("after_desc")}
              </p>
            </div>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
