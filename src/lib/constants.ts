import {
  Layers,
  SlidersHorizontal,
  Columns2,
  ShieldCheck,
  ArrowRightLeft,
  Fingerprint,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

export function sitePath(path: string): string {
  if (!path) {
    return BASE_PATH || "/";
  }
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("mailto:")) {
    return path;
  }
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localizedPath(locale: string, path = ""): string {
  if (path.startsWith("#")) {
    return sitePath(`/${locale}/${path}`);
  }

  return sitePath(path ? `/${locale}${path}/` : `/${locale}/`);
}

export const APP_STORE_URL = "https://apps.apple.com/us/app/burstpick/id6760616886";

export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.burstpick.app"
).replace(/\/$/, "");

export const BRAND = {
  name: "BurstPick",
  website: "https://burstpick.app",
} as const;

export const SALES = {
  supportEmail: "support@burstpick.app",
  discordUrl: "https://discord.gg/8dMD56Mv",
} as const;

export interface Feature {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export const FEATURES: Feature[] = [
  { titleKey: "clustering_title", descKey: "clustering_desc", icon: Layers },
  { titleKey: "scoring_title", descKey: "scoring_desc", icon: SlidersHorizontal },
  { titleKey: "compare_title", descKey: "compare_desc", icon: Columns2 },
  { titleKey: "workflow_title", descKey: "workflow_desc", icon: ShieldCheck },
  {
    titleKey: "lightroom_title",
    descKey: "lightroom_desc",
    icon: ArrowRightLeft,
  },
  { titleKey: "c2pa_title", descKey: "c2pa_desc", icon: Fingerprint },
];

export interface GalleryItem {
  titleKey: string;
  descKey: string;
  screenshot: string;
}

export const SCREENSHOTS = {
  workspace: "/screenshots/web-all-photos-grid.png",
  surveyMode: "/screenshots/web-survey-mode.png",
  proGate: "/screenshots/web-iap-license-gate.png",
} as const;

export const SCREENSHOT_PATHS = Object.values(SCREENSHOTS);

export const GALLERY_ITEMS: GalleryItem[] = [
  { titleKey: "all_photos", descKey: "all_photos_desc", screenshot: SCREENSHOTS.workspace },
  { titleKey: "survey", descKey: "survey_desc", screenshot: SCREENSHOTS.surveyMode },
  { titleKey: "pro_iap", descKey: "pro_iap_desc", screenshot: SCREENSHOTS.proGate },
];

export const FAQ_KEYS = [
  "q1",
  "q2",
  "q3",
  "q4",
  "q6",
  "q7",
  "q12",
  "q13",
] as const;
