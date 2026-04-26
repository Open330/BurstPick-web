# BurstPick Website

Marketing and documentation website for [BurstPick](https://burstpick.app) — an AI-powered burst photo picker for macOS.

<div><img src="https://quickstart-for-agents.vercel.app/api/header.svg?theme=opencode&logo=BurstPick-web&title=Build+the+BurstPick+marketing+site+with+Next.js+16+and+React+19&font=inter" width="100%" /></div>

```
You are an AI agent working on the BurstPick website, built with Next.js 16,
React 19, Tailwind CSS v4, and Framer Motion with i18n support.
Clone https://github.com/Open330/BurstPick-web and help add landing page
sections, improve animations, extend localization, or optimize the build.
```

## Tech Stack

- **Framework**: Next.js 16 (static export)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **i18n**: next-intl (English, Korean)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with custom domain

## Getting Started

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

`NEXT_PUBLIC_BASE_PATH` is optional and should only be set when the site is served from a subpath rather than the root domain.
`NEXT_PUBLIC_API_BASE_URL` is optional. When set, the mailing-list signup form posts to that origin instead of `https://api.burstpick.app` — useful for staging.

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
│   ├── layout.tsx             # Root metadata
│   ├── not-found.tsx          # 404 page
│   ├── page.tsx               # Locale-redirect entry
│   └── [locale]/
│       ├── layout.tsx         # Locale layout with metadata + JSON-LD
│       ├── page.tsx           # Landing page
│       ├── download/          # Download page
│       ├── license/           # EULA / license terms
│       ├── models/            # AI model catalog
│       ├── privacy/           # Privacy policy
│       ├── support/           # Support / contact page
│       └── terms/             # Terms of service
├── components/
│   ├── layout/                # Header, Footer
│   ├── sections/              # Hero, Pricing, Features, Gallery, Showcase, Story, About, NotDo, FAQ, CTA
│   ├── ui/                    # Button, Container, GradientText
│   └── motion/                # FadeInView (scroll animations)
├── i18n/                      # Locale config
└── lib/                       # Constants, feature/gallery data
messages/                      # en.json, ko.json
scripts/
└── generate-og.mjs            # OG image generator (satori)
public/
├── assets/                    # Section background images
├── mockup/                    # Hero app-mockup tiles
├── screenshots/               # App screenshots
├── logo.png                   # App icon
├── og-image.png               # Open Graph image
├── _headers                   # Cloudflare Pages security headers
└── CNAME                      # Custom domain config
```

## License

All rights reserved.
