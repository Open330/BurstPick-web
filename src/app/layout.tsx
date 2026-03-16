import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://burstpick.app"),
  title: "BurstPick — AI-Powered Burst Photo Culling for Photographers",
  description:
    "Drop a folder of burst photos. BurstPick clusters similar shots, scores them with 20+ ML models, and surfaces the best picks.",
  openGraph: {
    title: "BurstPick — AI-Powered Burst Photo Culling for Photographers",
    description:
      "Drop a folder of burst photos. BurstPick clusters similar shots, scores them with 20+ ML models, and surfaces the best picks.",
    type: "website",
    siteName: "BurstPick",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BurstPick — AI-Powered Burst Photo Culling for Photographers",
    description:
      "Drop a folder of burst photos. BurstPick clusters similar shots, scores them with 20+ ML models, and surfaces the best picks.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
