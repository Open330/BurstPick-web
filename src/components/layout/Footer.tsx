import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Container } from "@/components/ui/Container";
import { BASE_PATH, BRAND, SALES } from "@/lib/constants";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="border-t border-white/10 bg-[#0a0b0c]">
      <Container className="py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={`${BASE_PATH}/logo.avif`}
                alt=""
                width={645}
                height={618}
                className="h-7 w-7 object-contain"
              />
              <span className="text-sm font-semibold">{BRAND.name}</span>
            </div>
            <p className="mt-3 text-sm text-text-muted">{t("tagline")}</p>
          </div>

          <nav className="flex max-w-2xl flex-wrap gap-x-6 gap-y-3 text-sm text-text-secondary">
            <a href={`/${locale}/#features`} className="hover:text-text-primary">{t("features")}</a>
            <a href={`/${locale}/#screenshots`} className="hover:text-text-primary">{t("screenshots")}</a>
            <a href={`/${locale}/models/`} className="hover:text-text-primary">{t("models")}</a>
            <a href={`mailto:${SALES.supportEmail}`} className="hover:text-text-primary">{t("support")}</a>
            <a href={`/${locale}/privacy/`} className="hover:text-text-primary">{t("privacy")}</a>
            <a href={`/${locale}/terms/`} className="hover:text-text-primary">{t("terms")}</a>
            <a href={`/${locale}/license/`} className="hover:text-text-primary">{t("license")}</a>
          </nav>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-text-muted">
          {t("copyright")}
        </p>
      </Container>
    </footer>
  );
}
