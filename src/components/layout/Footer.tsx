import { useTranslations, useLocale } from "next-intl";
import { Container } from "@/components/ui/Container";
import { BASE_PATH, BRAND } from "@/lib/constants";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="border-t border-white/[0.08] bg-surface-secondary">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-3 flex items-center gap-2.5">
              <img src={`${BASE_PATH}/logo.avif`} alt={BRAND.name} width={645} height={618} className="h-8 w-8 object-contain" />
              <span className="text-lg font-bold">{BRAND.name}</span>
            </div>
            <p className="mb-2 text-sm text-text-secondary">{t("tagline")}</p>
            <p className="mb-3 text-xs text-text-muted">{t("built_with")}</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
              {t("product")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-text-secondary hover:text-text-primary transition-colors">
                  {t("features")}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
              {t("resources")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:support@burstpick.app"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  {t("support")}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/license`}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  {t("license")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
              {t("legal")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`/${locale}/privacy`} className="text-text-secondary hover:text-text-primary transition-colors">
                  {t("privacy")}
                </a>
              </li>
              <li>
                <a href={`/${locale}/terms`} className="text-text-secondary hover:text-text-primary transition-colors">
                  {t("terms")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/[0.08] pt-6">
          <p className="text-center text-xs text-text-muted">{t("copyright")}</p>
        </div>
      </Container>
    </footer>
  );
}
