# Performance Reviewer — Cycle 1 (2026-04-26)

Static export site (`output: "export"`), so most concerns are bundle size, image strategy, and CSS.

## P-1 (M, H) — `next/image` used inconsistently
- `next.config.ts` sets `images: { unoptimized: true }` (required for static export). Half the codebase still uses `<Image>` (`HeroSection.tsx:16`, `ShowcaseSection.tsx:14,65`, `StorySection.tsx:33`, `FeaturesSection.tsx:26`, `GallerySection.tsx:33`); the other half uses raw `<img>` (`HeroSection.tsx:35,172,228,263,297,398`, `Footer.tsx:19`, `Header.tsx:35`, `CTASection.tsx:88`, `download/page.tsx:24`).
- With `unoptimized: true`, `next/image` becomes a passthrough but still computes layout boxes via inline styles and adds an event listener for LCP timing. For decorative tiny logos (`32×32`, `8×8`) it's not really better than `<img>`, but the lint warning fires (10 warnings, all `no-img-element`).
- Fix: settle on one approach. Either (a) replace all 10 `<img>` with `<Image>` and accept the LCP report wrapper, or (b) suppress `no-img-element` rule globally with a justified comment ("static export, decorative assets").

## P-2 (M, H) — Fonts: 7 font files loaded
- `src/app/[locale]/layout.tsx:12-17` loads `Inter` (4 weights default) + `Plus_Jakarta_Sans` weights 500/600/700/800. With static export + `next/font` self-hosting, that's 8 woff2 files served from `/_next/static/media/`.
- Plus_Jakarta is only used for `h1, h2, h3, h4` in `globals.css:36-38`. Weight 800 is used in hero (`text-extrabold`) and 404 page; weights 500/600/700 for body headings. 500 is rarely used — likely droppable.
- Fix: load Plus_Jakarta `display: "swap"` and consider weights `["600","700","800"]` only.

## P-3 (M, H) — Hero background `<Image priority>` plus `<link rel=preload>` causes double-fetch
- `src/app/[locale]/layout.tsx:118` preloads `/assets/hero-bg.avif` AND `src/components/sections/HeroSection.tsx:16-22` uses `<Image priority>`. With `unoptimized:true`, `next/image` will try to fetch the same URL — but since the URL matches, browsers should dedupe. However, the preload attribute must match the Image's eventually-rendered URL exactly (it does). Verify with a network panel.
- Fix: keep `<link rel="preload">`, drop `priority` on `<Image>`, OR drop the preload and rely on `priority`.

## P-4 (M, M) — Massive inline mockup in `HeroSection`
- `HeroSection.tsx` is 513 lines, with 7 cluster items, 10 thumbnail items twice (grid + filmstrip), 4 VLM bars, 3 quality bars, 2 face tiles, 5 stars, 5 color labels, 7 toolbar SVGs, 7 detail SVGs, 5 status-bar SVGs. Each `<svg>` is inline path data. The component re-renders fine but the static HTML payload is large and ships in the initial RSC stream.
- Per-page weight: roughly +18 KB gzipped HTML for the mockup alone. Probably acceptable for hero. But all 10 `mockup/cluster-XX.avif` thumbnails plus 10 `film-XX.avif` plus 2 face tiles plus `main-preview.avif` = ~22 image requests on first paint above the fold.
- Fix: either lazy-load the lower mockup with `loading="lazy"`, or sprite-sheet the cluster/film thumbnails.

## P-5 (L, M) — `transition-all` overdraw
- Cards in `FeaturesSection.tsx:42`, `AboutSection.tsx:41`, `NotDoSection.tsx:32` use `transition-all duration-300`. `transition-all` triggers transitions on every animatable property. Prefer `transition-colors` (already used in some headers) or `transition-[colors,background-color,border-color]`.
- Fix: replace `transition-all` with `transition-colors` (these cards only animate border/background).

## P-6 (L, M) — FAQ accordion `height: auto` animation
- `FAQSection.tsx:51-54` animates `height: 0 → "auto"` which is known to cause layout-thrash. Motion handles it but each open/close re-measures.
- Acceptable; if INP regresses, switch to `grid-template-rows: 0fr → 1fr` CSS animation.

## P-7 (L, H) — JSON-LD scripts injected into `<head>` per request
- `src/app/[locale]/layout.tsx:120-131` serializes 3 JSON-LD blobs and inlines them. Static and trivial, fine. But `JSON.stringify` runs at build time (server) so no runtime cost — confirmed.

## P-8 (M, H) — `useEffect` scroll handler attached on every render
- `Header.tsx:18-22` adds a scroll listener once (`[]` deps). `passive: true` is correct. Fine.

## P-9 (L, M) — Animations not respecting `prefers-reduced-motion` everywhere
- `FadeInView` checks `useReducedMotion()` correctly. But `FAQSection`'s `motion.span` (chevron rotate) and `motion.div` (height) do not check. Header doesn't either.
- Fix: wrap motion usage in those components with reduced-motion fallbacks or use `useReducedMotion()` to disable.

## P-10 (M, H) — Empty `out/` from earlier build present in repo
- `out/` directory is present but `.gitignore` doesn't list it explicitly (only `.next/` is shipped — verify). Static export rebuilds may stale-cache.
- Fix: add `/out` to `.gitignore`.
