import {
  Layers,
  Brain,
  FileImage,
  ScanFace,
  Columns2,
  ShieldCheck,
  ArrowRightLeft,
  Fingerprint,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const BRAND = {
  name: "BurstPick",
  website: "https://burstpick.app",
  downloadUrl: "/en/download",
} as const;

export interface Feature {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export const FEATURES: Feature[] = [
  { titleKey: "clustering_title", descKey: "clustering_desc", icon: Layers },
  { titleKey: "scoring_title", descKey: "scoring_desc", icon: Brain },
  { titleKey: "raw_title", descKey: "raw_desc", icon: FileImage },
  { titleKey: "face_title", descKey: "face_desc", icon: ScanFace },
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

export const GALLERY_ITEMS: GalleryItem[] = [
  { titleKey: "main_ui", descKey: "main_ui_desc", screenshot: "/screenshots/main-interface.avif" },
  { titleKey: "clustering", descKey: "clustering_desc", screenshot: "/screenshots/clusters-view.avif" },
  { titleKey: "scoring", descKey: "scoring_desc", screenshot: "/screenshots/photos-grid.avif" },
  { titleKey: "compare", descKey: "compare_desc", screenshot: "/screenshots/compare-mode.avif" },
  { titleKey: "persons", descKey: "persons_desc", screenshot: "/screenshots/tags-view.avif" },
];

export const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"] as const;
