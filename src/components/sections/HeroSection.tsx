import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { FadeInView } from "@/components/motion/FadeInView";
import { APP_STORE_URL, BASE_PATH, BRAND, SCREENSHOTS } from "@/lib/constants";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <Image src="/assets/hero-bg.avif" alt="" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-primary/60 via-surface-primary/40 to-surface-primary" />
      </div>

      <Container className="flex w-full flex-col items-center py-20 text-center">
        <FadeInView>
          <Image
            src={`${BASE_PATH}/logo.avif`}
            alt={BRAND.name}
            width={645}
            height={618}
            className="mb-8 h-24 w-24 object-contain drop-shadow-2xl sm:h-28 sm:w-28"
            priority
          />
        </FadeInView>

        <FadeInView delay={0.1}>
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight drop-shadow-[0_0_40px_rgba(79,125,242,0.3)] sm:text-6xl lg:text-7xl">
            <GradientText>{BRAND.name}</GradientText>
          </h1>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="mb-6 max-w-2xl text-xl text-text-secondary sm:text-2xl">
            {t("tagline")}
          </p>
        </FadeInView>

        <FadeInView delay={0.3}>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-text-secondary">
            {t("description")}
          </p>
        </FadeInView>

        <FadeInView delay={0.4}>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-text-secondary transition-colors hover:border-white/40 hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-medium leading-none">{t("cta_download_mac")}</div>
              <div className="text-xl font-semibold leading-tight">Mac App Store</div>
            </div>
          </a>
        </FadeInView>

        <FadeInView delay={0.5} className="mt-12 w-full max-w-6xl sm:mt-16">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-surface-secondary shadow-[0_24px_90px_-24px_rgba(79,125,242,0.35)]">
            <Image
              src={SCREENSHOTS.workspace}
              alt="BurstPick macOS app showing a real photo catalog, burst clusters, scoring, and review controls"
              fill
              sizes="(min-width: 1280px) 1152px, calc(100vw - 2rem)"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10" />
          </div>
        </FadeInView>
      </Container>
    </section>
  );
}
