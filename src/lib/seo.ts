import type { Metadata } from "next";
import { APP_STORE_URL, BRAND, SALES } from "@/lib/constants";

export const SITE_URL = BRAND.website;
export const OG_IMAGE_PATH = "/og-image.png";
export const LAST_MODIFIED = "2026-07-08";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localizedCanonical(locale: string, path = ""): string {
  return path ? `/${locale}${path}/` : `/${locale}/`;
}

export function localizedAlternates(locale: string, path = ""): Metadata["alternates"] {
  return {
    canonical: localizedCanonical(locale, path),
    languages: {
      en: localizedCanonical("en", path),
      ko: localizedCanonical("ko", path),
      "x-default": localizedCanonical("en", path),
    },
  };
}

export function buildPageMetadata({
  locale,
  path = "",
  title,
  description,
}: {
  locale: string;
  path?: string;
  title: string;
  description: string;
}): Metadata {
  const url = localizedCanonical(locale, path);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: localizedAlternates(locale, path),
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: BRAND.name,
      images: [{ url: OG_IMAGE_PATH, width: 1200, height: 630 }],
      locale,
      alternateLocale: locale === "ko" ? ["en"] : ["ko"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}

export function safeJsonLd(obj: unknown): string {
  return JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function organizationReference() {
  return {
    "@type": "Organization",
    name: BRAND.name,
    legalName: "Xylolabs Inc.",
    url: SITE_URL,
    logo: absoluteUrl("/logo.png"),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    ...organizationReference(),
    sameAs: [SALES.discordUrl],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SALES.supportEmail,
      url: absoluteUrl("/en/support/"),
    },
  };
}

function localizedOffer(locale: string) {
  return locale === "ko"
    ? { price: "129000", priceCurrency: "KRW" }
    : { price: "89.99", priceCurrency: "USD" };
}

export function softwareApplicationJsonLd({
  locale,
  description,
}: {
  locale: string;
  description: string;
}) {
  const proOffer = localizedOffer(locale);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: BRAND.name,
    url: absoluteUrl(localizedCanonical(locale)),
    downloadUrl: APP_STORE_URL,
    image: absoluteUrl(OG_IMAGE_PATH),
    screenshot: [
      absoluteUrl("/screenshots/main-interface.avif"),
      absoluteUrl("/screenshots/clusters-view.avif"),
      absoluteUrl("/screenshots/compare-mode.avif"),
    ],
    operatingSystem: "macOS 14 or later",
    applicationCategory: "PhotographyApplication",
    applicationSubCategory: "Photo culling software",
    description,
    inLanguage: locale,
    author: organizationReference(),
    publisher: organizationReference(),
    softwareHelp: absoluteUrl(localizedCanonical(locale, "/support")),
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: proOffer.priceCurrency,
        url: APP_STORE_URL,
      },
      {
        "@type": "Offer",
        name: "Pro lifetime in-app purchase",
        price: proOffer.price,
        priceCurrency: proOffer.priceCurrency,
        url: APP_STORE_URL,
      },
    ],
    featureList: [
      "Automatic burst photo grouping",
      "On-device AI photo culling scores",
      "XMP ratings and color label export",
      "Lightroom Classic catalog handoff for Pro",
      "Face grouping and side-by-side compare",
      "Local-first photo analysis",
    ],
  };
}

export function faqPageJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
