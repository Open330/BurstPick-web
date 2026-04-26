"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { APP_STORE_URL, BASE_PATH, BRAND, SALES } from "@/lib/constants";

const NAV_ITEMS = ["features", "screenshots", "about", "faq"] as const;
const DISCORD_URL = SALES.discordUrl;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-primary/80 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <a href={`/${locale}`} className="flex items-center gap-2.5">
          <Image src={`${BASE_PATH}/logo.avif`} alt="" width={32} height={32} className="h-8 w-8 object-contain" priority />
          <span className="text-lg font-bold tracking-tight">{BRAND.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`/${locale}#${item}`}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {t(item)}
            </a>
          ))}
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <MessageCircle size={16} />
            {t("discord")}
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-start to-brand-end px-4 py-1.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {t("download")}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="flex h-11 w-11 items-center justify-center text-text-secondary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/[0.08] bg-surface-primary/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`/${locale}#${item}`}
                className="flex min-h-[44px] items-center text-sm text-text-secondary transition-colors hover:text-text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {t(item)}
              </a>
            ))}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              <MessageCircle size={16} />
              {t("discord")}
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-start to-brand-end px-4 py-1.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
