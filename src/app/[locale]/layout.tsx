import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { routing } from "@/i18n/routing";
import { FAQ_KEYS } from "@/lib/constants";

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

  return {
    metadataBase: new URL("https://burstpick.app"),
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      siteName: "BurstPick",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: "/",
      languages: { en: "/en", ko: "/ko" },
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
  const faqT = await getTranslations({ locale, namespace: "faq" });
  const metaT = await getTranslations({ locale, namespace: "metadata" });

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BurstPick",
    url: "https://burstpick.app",
    logo: "https://burstpick.app/logo.png",
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BurstPick",
    operatingSystem: "macOS",
    applicationCategory: "PhotographyApplication",
    description: metaT("description"),
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "USD",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_KEYS.map((key) => ({
      "@type": "Question",
      name: faqT(key),
      acceptedAnswer: {
        "@type": "Answer",
        text: faqT(key.replace("q", "a") as `a${string}`),
      },
    })),
  };

  return (
    <html lang={locale} className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="preload" as="image" type="image/avif" href="/assets/hero-bg.avif" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              var f = e.target.closest('#faq button');
              if (f) {
                var l = f.querySelector('span');
                gtag('event', 'faq_toggle', {
                  event_category: 'engagement',
                  event_label: l ? l.textContent.substring(0, 50) : ''
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
