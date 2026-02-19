"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BASE_PATH, BRAND } from "@/lib/constants";

const NAV_ITEMS = ["features", "screenshots", "about", "faq"] as const;

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
          <img src={`${BASE_PATH}/logo.avif`} alt={BRAND.name} width={645} height={618} className="h-8 w-8 object-contain" />
          <span className="text-lg font-bold tracking-tight">{BRAND.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {t(item)}
            </a>
          ))}
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
                href={`#${item}`}
                className="flex min-h-[44px] items-center text-sm text-text-secondary transition-colors hover:text-text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {t(item)}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
