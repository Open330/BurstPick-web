import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { Check } from "lucide-react";
import { APP_STORE_URL } from "@/lib/constants";

const FREE_FEATURES = ["free_f1", "free_f2", "free_f3", "free_f4", "free_f5"] as const;
const PRO_FEATURES = ["pro_f1", "pro_f2", "pro_f3", "pro_f4", "pro_f5"] as const;

export function PricingSection() {
  const t = useTranslations("pricing");

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(79,125,242,0.06), transparent)",
        }}
      />

      <Container>
        <FadeInView className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("heading")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            {t("subheading")}
          </p>
        </FadeInView>

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          {/* Free Tier */}
          <FadeInView delay={0.1}>
            <div className="flex h-full flex-col rounded-xl border border-white/[0.08] bg-surface-secondary p-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold">{t("free_name")}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{t("free_price")}</span>
                  <span className="text-sm text-text-muted">/ {t("free_period")}</span>
                </div>
                <p className="mt-3 text-sm text-text-secondary">{t("free_desc")}</p>
              </div>
              <ul className="flex-1 space-y-3">
                {FREE_FEATURES.map((key) => (
                  <li key={key} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <Check size={16} className="mt-0.5 shrink-0 text-text-muted" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>

          {/* Pro Tier */}
          <FadeInView delay={0.2}>
            <div className="relative flex h-full flex-col rounded-xl border border-brand-start/30 bg-surface-secondary p-8 shadow-lg shadow-brand-start/5">
              {/* Popular badge */}
              <div className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-brand-start to-brand-end px-4 py-1 text-xs font-semibold text-white">
                {t("pro_highlight")}
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold">{t("pro_name")}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{t("pro_price")}</span>
                  <span className="text-sm text-text-muted">/ {t("pro_period")}</span>
                </div>
                <p className="mt-3 text-sm text-text-secondary">{t("pro_desc")}</p>
              </div>
              <ul className="flex-1 space-y-3">
                {PRO_FEATURES.map((key) => (
                  <li key={key} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand-start" />
                    {t(key)}
                  </li>
                ))}
              </ul>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-start to-brand-end px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                {t("pro_cta")}
              </a>
            </div>
          </FadeInView>
        </div>

        <FadeInView delay={0.3}>
          <p className="mt-10 text-center text-sm text-text-muted">
            {t("guarantee")}
          </p>
        </FadeInView>
      </Container>
    </section>
  );
}
