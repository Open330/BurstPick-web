import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <SupportContent />;
}

function SupportContent() {
  const t = useTranslations("supportPage");

  return (
    <main className="px-0 pt-28 pb-20 sm:pt-32 sm:pb-24">
      <Container className="max-w-4xl">
        <article className="rounded-2xl border border-white/10 bg-surface-secondary/80 p-6 shadow-2xl shadow-black/30 sm:p-10">
          <header className="mb-10 border-b border-white/[0.08] pb-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("title")}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-text-secondary">
              {t("intro")}
            </p>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-text-primary sm:text-xl">
                {t("emailTitle")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                {t("emailBody")}
              </p>
              <a
                href="mailto:support@burstpick.app"
                className="mt-4 inline-flex text-sm font-medium text-brand-start transition-colors hover:text-brand-end"
              >
                support@burstpick.app
              </a>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary sm:text-xl">
                {t("discordTitle")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                {t("discordBody")}
              </p>
              <a
                href="https://discord.gg/8dMD56Mv"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-brand-start transition-colors hover:text-brand-end"
              >
                {t("discordLink")}
              </a>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary sm:text-xl">
                {t("faqTitle")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                {t("faqBody")}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary sm:text-xl">
                {t("requirementsTitle")}
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed text-text-secondary sm:text-base">
                <li>{t("req1")}</li>
                <li>{t("req2")}</li>
                <li>{t("req3")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary sm:text-xl">
                {t("responseTitle")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                {t("responseBody")}
              </p>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}
