import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SALES } from "@/lib/constants";

export default async function PurchasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PurchaseContent locale={locale} />;
}

function PurchaseContent({ locale }: { locale: string }) {
  const t = useTranslations("purchasePage");
  const checkoutUrl = SALES.checkoutUrl;
  const primaryHref = checkoutUrl ?? `/${locale}#download`;
  const primaryLabel = checkoutUrl ? t("buyNow") : t("joinWaitlist");
  const opensExternalCheckout = Boolean(checkoutUrl);

  const purchaseSteps = [
    t("stepCheckout"),
    t("stepLicense"),
    t("stepActivate"),
    t("stepCreate"),
  ];

  const proIncludes = [
    t("featureUnlimited"),
    t("featureModels"),
    t("featureLearning"),
    t("featureExports"),
    t("featureSupport"),
  ];

  return (
    <main className="px-0 pt-28 pb-20 sm:pt-32 sm:pb-24">
      <Container className="max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-3xl border border-white/10 bg-surface-secondary/80 p-8 shadow-2xl shadow-black/30 sm:p-10">
            <div className="inline-flex items-center rounded-full border border-brand-start/25 bg-brand-start/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-start">
              {t("eyebrow")}
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{t("title")}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary">{t("description")}</p>

            <div className="mt-8 flex flex-wrap items-end gap-3">
              <div className="text-5xl font-bold tracking-tight">{t("price")}</div>
              <div className="pb-2 text-base text-text-muted">{t("priceNote")}</div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={primaryHref}
                size="lg"
                data-analytics={checkoutUrl ? "checkout-cta" : "purchase-waitlist-cta"}
                {...(opensExternalCheckout
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {primaryLabel}
              </Button>
              <Button href={`/${locale}/license`} variant="ghost" size="lg">
                {t("viewLicense")}
              </Button>
            </div>

            <p className="mt-4 text-sm text-text-muted">
              {checkoutUrl ? t("checkoutReady") : t("checkoutPending")}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {proIncludes.map((item) => (
                <div key={item} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-text-secondary">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-3xl border border-white/10 bg-surface-secondary/80 p-8 shadow-xl shadow-black/20">
              <h2 className="text-xl font-semibold">{t("howItWorksTitle")}</h2>
              <ol className="mt-5 space-y-4">
                {purchaseSteps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-start/15 text-sm font-semibold text-brand-start">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-sm leading-relaxed text-text-secondary">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-3xl border border-white/10 bg-surface-secondary/80 p-8 shadow-xl shadow-black/20">
              <h2 className="text-xl font-semibold">{t("trustTitle")}</h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-text-secondary">
                <p>{t("trustLine1")}</p>
                <p>{t("trustLine2")}</p>
                <p>{t("trustLine3")}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`/${locale}#download`} variant="secondary" size="md">
                  {t("notifyMe")}
                </Button>
                <Button href={SALES.discordUrl} variant="ghost" size="md" target="_blank" rel="noopener noreferrer">
                  {t("joinDiscord")}
                </Button>
              </div>

              <a
                href={`mailto:${SALES.supportEmail}`}
                className="mt-5 inline-flex text-sm font-medium text-brand-start transition-colors hover:text-brand-end"
              >
                {t("contactSales")}
              </a>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
