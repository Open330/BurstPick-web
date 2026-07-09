import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { APP_STORE_URL } from "@/lib/constants";
import { Check } from "lucide-react";

const FREE_FEATURES = ["free_f1", "free_f2", "free_f3", "free_f4", "free_f5"] as const;
const PRO_FEATURES = ["pro_f1", "pro_f2", "pro_f3", "pro_f4", "pro_f5"] as const;

export function PricingSection() {
  const t = useTranslations("pricing");

  return (
    <section id="pricing" className="border-b border-white/10 py-20 sm:py-28">
      <Container>
        <FadeInView className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            {t("subheading")}
          </p>
        </FadeInView>

        <FadeInView delay={0.05}>
          <div className="grid overflow-hidden rounded-lg border border-white/15 lg:grid-cols-2">
            <section className="flex flex-col p-6 sm:p-8">
              <header className="border-b border-white/15 pb-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{t("free_name")}</h3>
                  <span className="text-3xl font-semibold">{t("free_price")}</span>
                </div>
                <p className="mt-3 text-sm text-text-secondary">{t("free_desc")}</p>
              </header>
              <ul className="flex-1 space-y-3 pt-6">
                {FREE_FEATURES.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-sm leading-6 text-text-secondary">
                    <Check size={16} className="mt-1 shrink-0 text-text-muted" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col border-t border-white/15 bg-[#17181b] p-6 sm:p-8 lg:border-l lg:border-t-0">
              <header className="border-b border-white/15 pb-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{t("pro_name")}</h3>
                  <div className="text-right">
                    <div className="text-3xl font-semibold">{t("pro_price")}</div>
                    <div className="mt-1 text-xs text-text-muted">{t("pro_period")}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-text-secondary">{t("pro_desc")}</p>
              </header>
              <ul className="flex-1 space-y-3 pt-6">
                {PRO_FEATURES.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-sm leading-6 text-text-secondary">
                    <Check size={16} className="mt-1 shrink-0 text-brand-start" />
                    {t(key)}
                  </li>
                ))}
              </ul>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#f3f3ef] px-5 text-sm font-semibold text-[#111214] transition-colors hover:bg-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {t("pro_cta")}
              </a>
            </section>
          </div>
        </FadeInView>
      </Container>
    </section>
  );
}
