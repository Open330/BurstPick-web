import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { APP_STORE_URL, BASE_PATH, BRAND, SCREENSHOTS } from "@/lib/constants";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="overflow-hidden border-b border-white/10 pt-14">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <FadeInView>
            <div className="mb-7 flex items-center gap-3">
              <Image
                src={`${BASE_PATH}/logo.avif`}
                alt=""
                width={645}
                height={618}
                className="h-12 w-12 object-contain"
                priority
              />
              <span className="text-sm text-text-muted">{t("product_type")}</span>
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              {BRAND.name}
            </h1>
            <p className="mt-5 max-w-3xl text-2xl leading-snug text-text-primary sm:text-3xl">
              {t("tagline")}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary">
              {t("description")}
            </p>
          </FadeInView>

          <FadeInView delay={0.1}>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-3 rounded-md bg-[#f3f3ef] px-5 text-[#111214] transition-colors hover:bg-white"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-sm font-semibold">Mac App Store</span>
            </a>
          </FadeInView>
        </div>

        <FadeInView delay={0.15} className="mt-12 sm:mt-16">
          <Image
            src={SCREENSHOTS.workspace}
            alt="BurstPick macOS app showing a real photo catalog, review controls, and scoring results"
            width={1600}
            height={1000}
            sizes="(min-width: 1280px) 1216px, calc(100vw - 2rem)"
            className="block h-auto w-full rounded-lg border border-white/15"
            priority
          />
        </FadeInView>

        <FadeInView delay={0.2}>
          <dl className="mt-6 grid gap-y-3 border-t border-white/10 pt-5 text-sm sm:grid-cols-3 sm:gap-x-8">
            <div><dt className="text-text-muted">{t("meta_platform")}</dt><dd className="mt-1 text-text-primary">{t("meta_platform_value")}</dd></div>
            <div><dt className="text-text-muted">{t("meta_processing")}</dt><dd className="mt-1 text-text-primary">{t("meta_processing_value")}</dd></div>
            <div><dt className="text-text-muted">{t("meta_purchase")}</dt><dd className="mt-1 text-text-primary">{t("meta_purchase_value")}</dd></div>
          </dl>
        </FadeInView>
      </Container>
    </section>
  );
}
