import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { routing } from "@/i18n/routing";
import { buildPageMetadata, organizationJsonLd, safeJsonLd } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["500", "600", "700", "800"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const metadata = buildPageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
  });

  return {
    ...metadata,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  const orgJsonLd = organizationJsonLd();

  return (
    <html lang={locale} className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-9812795931738479" />
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="preload" as="image" type="image/avif" href="/assets/hero-bg.avif" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(orgJsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LDHFL2CQSZ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LDHFL2CQSZ');
            document.addEventListener('click', function(e) {
              var t = e.target.closest('a[href*="/download"]');
              if (t) {
                var s = t.closest('section');
                gtag('event', 'download_click', {
                  event_category: 'conversion',
                  event_label: s ? s.id || 'hero' : 'hero'
                });
              }
              var p = e.target.closest('a[href*="apps.apple.com"], a[href*="#download"]');
              if (p) {
                gtag('event', 'app_store_click', {
                  event_category: 'conversion',
                  event_label: p.getAttribute('data-analytics') || p.getAttribute('href') || 'app_store'
                });
              }
              var f = e.target.closest('#faq button');
              if (f) {
                var l = f.querySelector('span');
                var label = l && l.textContent ? l.textContent.substring(0, 50) : '';
                gtag('event', 'faq_toggle', {
                  event_category: 'engagement',
                  event_label: label
                });
              }
            });
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-surface-primary font-sans text-text-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-start focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div id="main-content">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
