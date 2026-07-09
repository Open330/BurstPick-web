"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { APP_STORE_URL, BASE_PATH, BRAND, SALES } from "@/lib/constants";

const NAV_ITEMS = ["features", "screenshots", "pricing", "faq"] as const;
const DISCORD_URL = SALES.discordUrl;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0d0e10]/90 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between">
        <a href={`/${locale}/`} className="flex items-center gap-2">
          <Image
            src={`${BASE_PATH}/logo.avif`}
            alt=""
            width={645}
            height={618}
            className="h-7 w-7 object-contain"
            priority
          />
          <span className="text-[15px] font-semibold">{BRAND.name}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`/${locale}/#${item}`}
              className="text-[13px] text-text-secondary transition-colors hover:text-text-primary"
            >
              {t(item)}
            </a>
          ))}
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("discord")}
            title={t("discord")}
            className="inline-flex h-8 w-8 items-center justify-center text-text-secondary transition-colors hover:text-text-primary"
          >
            <MessageCircle size={17} />
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-9 items-center rounded-md bg-[#f3f3ef] px-4 text-[13px] font-semibold text-[#111214] transition-colors hover:bg-white"
          >
            {t("download")}
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center text-text-secondary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0d0e10] md:hidden">
          <Container className="flex flex-col py-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`/${locale}/#${item}`}
                className="flex min-h-11 items-center border-b border-white/10 text-sm text-text-secondary transition-colors hover:text-text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {t(item)}
              </a>
            ))}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 border-b border-white/10 text-sm text-text-secondary transition-colors hover:text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              <MessageCircle size={16} />
              {t("discord")}
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-md bg-[#f3f3ef] px-4 text-sm font-semibold text-[#111214]"
              onClick={() => setMobileOpen(false)}
            >
              {t("download")}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
