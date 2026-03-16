import { useTranslations, useLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { BRAND } from "@/lib/constants";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TermsContent />;
}

function TermsContent() {
  const t = useTranslations("termsPage");
  const locale = useLocale();

  const sections = [
    { title: t("licenseTitle"), body: t("licenseBody") },
    { title: t("acceptableUseTitle"), body: t("acceptableUseBody") },
    { title: t("noWarrantyTitle"), body: t("noWarrantyBody") },
    { title: t("liabilityTitle"), body: t("liabilityBody") },
    { title: t("openSourceTitle"), body: t("openSourceBody") },
    { title: t("changesTitle"), body: t("changesBody") },
    { title: t("generalTitle"), body: t("generalBody") },
  ];

  return (
    <main className="px-0 pt-28 pb-20 sm:pt-32 sm:pb-24">
      <Container className="max-w-4xl">
        <article className="rounded-2xl border border-white/10 bg-surface-secondary/80 p-6 shadow-2xl shadow-black/30 sm:p-10">
          <header className="mb-10 border-b border-white/[0.08] pb-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h1>
            <p className="mt-2 text-sm text-text-muted">{t("updated")}</p>
            <p className="mt-5 text-base leading-relaxed text-text-secondary">{t("intro")}</p>
          </header>

          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold text-text-primary sm:text-xl">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">{section.body}</p>
              </section>
            ))}

            <section>
              <h2 className="text-lg font-semibold text-text-primary sm:text-xl">{t("contactTitle")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">{t("contactBody")}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
                <a
                  href={`/${locale}/license`}
                  className="text-brand-start transition-colors hover:text-brand-end"
                >
                  {t("licenseLink")}
                </a>
                <a
                  href="mailto:support@burstpick.app"
                  className="text-brand-start transition-colors hover:text-brand-end"
                >
                  {t("projectLink")}
                </a>
              </div>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}
