# BurstPick Website

Marketing and documentation website for [BurstPick](https://burstpick.app) — an AI-powered burst photo picker for macOS.

## Tech Stack

- **Framework**: Next.js 16 (static export)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **i18n**: next-intl (English, Korean)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with custom domain

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
```

Static output is generated in `out/` for GitHub Pages deployment.

## Project Structure

```
src/
├── app/
│   ├── globals.css            # Design tokens & theme
│   └── [locale]/
│       ├── layout.tsx         # Root layout with metadata
│       ├── page.tsx           # Landing page
│       ├── download/          # Download page
│       ├── privacy/           # Privacy policy
│       └── terms/             # Terms of service
├── components/
│   ├── layout/                # Header, Footer
│   ├── sections/              # Hero, Features, Gallery, Showcase, Story, FAQ, CTA
│   ├── ui/                    # Button, Container, GradientText
│   └── motion/                # FadeInView (scroll animations)
├── i18n/                      # Locale config
├── lib/                       # Constants, features, gallery data
└── messages/                  # en.json, ko.json
scripts/
└── generate-og.mjs            # OG image generator (satori)
public/
├── assets/                    # Section background images
├── screenshots/               # App screenshots
├── logo.png                   # App icon
├── og-image.png               # Open Graph image
└── CNAME                      # Custom domain config
```

## License

All rights reserved.
