import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";

export default async function LicensePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LicenseContent />;
}

function LicenseContent() {
  const t = useTranslations("licensePage");

  const sections = [
    { title: t("grantTitle"), body: t("grantBody") },
    { title: t("restrictionsTitle"), body: t("restrictionsBody") },
    { title: t("ownershipTitle"), body: t("ownershipBody") },
    { title: t("multiDeviceTitle"), body: t("multiDeviceBody") },
    { title: t("updatesTitle"), body: t("updatesBody") },
    { title: t("terminationTitle"), body: t("terminationBody") },
    { title: t("warrantyTitle"), body: t("warrantyBody") },
    { title: t("liabilityTitle"), body: t("liabilityBody") },
    { title: t("governingLawTitle"), body: t("governingLawBody") },
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
              <a
                href="mailto:open330.dev@gmail.com"
                className="mt-4 inline-flex text-sm font-medium text-brand-start transition-colors hover:text-brand-end"
              >
                {t("contactLink")}
              </a>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}
