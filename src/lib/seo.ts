import type { Metadata } from "next";
import { APP_STORE_URL, BRAND, SALES, SCREENSHOT_PATHS } from "@/lib/constants";

export const SITE_URL = BRAND.website;
export const OG_IMAGE_PATH = "/og-image.png";
export const LAST_MODIFIED = "2026-07-09";

const PUBLISHER_NAME = "Xylolabs Inc.";
const SEO_KEYWORDS = [
  "BurstPick",
  "photo culling app",
  "Mac photo culling",
  "burst photo organizer",
  "RAW photo culling",
  "Lightroom photo workflow",
  "on-device photo scoring",
  "Mac App Store photography app",
];

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
    applicationName: BRAND.name,
    authors: [{ name: PUBLISHER_NAME, url: SITE_URL }],
    creator: PUBLISHER_NAME,
    publisher: PUBLISHER_NAME,
    category: "Photography",
    keywords: SEO_KEYWORDS,
    alternates: localizedAlternates(locale, path),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "og:updated_time": LAST_MODIFIED,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: BRAND.name,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: `${BRAND.name} macOS photo culling workspace`,
        },
      ],
      locale: locale === "ko" ? "ko_KR" : "en_US",
      alternateLocale: locale === "ko" ? ["en_US"] : ["ko_KR"],
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
    screenshot: SCREENSHOT_PATHS.map(absoluteUrl),
    operatingSystem: "macOS 14 or later",
    applicationCategory: "PhotographyApplication",
    applicationSubCategory: "Photo culling software",
    description,
    inLanguage: locale,
    dateModified: LAST_MODIFIED,
    keywords: SEO_KEYWORDS.join(", "),
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
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Pro one-time in-app purchase",
        price: proOffer.price,
        priceCurrency: proOffer.priceCurrency,
        url: APP_STORE_URL,
        availability: "https://schema.org/InStock",
      },
    ],
    featureList: [
      "Automatic burst photo grouping",
      "On-device photo scoring signals",
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
