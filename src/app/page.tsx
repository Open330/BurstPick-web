import Link from "next/link";

const title = "BurstPick for Mac - AI Burst Photo Culling";
const description =
  "Cull burst photos on your Mac with on-device AI, XMP export, and Lightroom workflow handoff.";

export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://burstpick.app/en/" />
        <link rel="alternate" hrefLang="en" href="https://burstpick.app/en/" />
        <link rel="alternate" hrefLang="ko" href="https://burstpick.app/ko/" />
        <link rel="alternate" hrefLang="x-default" href="https://burstpick.app/en/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="BurstPick" />
        <meta property="og:image" content="https://burstpick.app/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://burstpick.app/og-image.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: "window.location.replace('/en/');",
          }}
        />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#0a0a0f",
          color: "#e5e7eb",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <main>
          <h1 style={{ margin: "0 0 12px", fontSize: "32px" }}>BurstPick</h1>
          <p style={{ margin: "0 0 24px", color: "#a1a1aa" }}>
            Redirecting to the English homepage.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
            <Link style={{ color: "#8bb4ff" }} href="/en/">
              English
            </Link>
            <Link style={{ color: "#8bb4ff" }} href="/ko/">
              한국어
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
