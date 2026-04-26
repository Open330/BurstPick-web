# Architect — Cycle 1 (2026-04-26)

## A-1 (M, H) — Unclear separation between server data + client UI
- Sections like `FAQSection` and `CTASection` are client components; the rest of `[locale]/page.tsx` is server. The page composes them transparently. Fine. But `Header.tsx` (client) imports `BASE_PATH` from `constants.ts` whose evaluation reads `process.env.NEXT_PUBLIC_BASE_PATH` — which is inlined at build time — so it works. Confirm nobody adds a non-NEXT_PUBLIC env to `constants.ts`.

## A-2 (M, H) — Two parallel layouts that disagree on basics
- `src/app/layout.tsx` exports `metadata` and `<RootLayout>{children}</RootLayout>` that returns `children` raw (no html/body). `src/app/[locale]/layout.tsx` provides the actual `<html><body>`. This is the standard Next.js `[locale]` pattern, but it means root-level pages without a locale (e.g. `/not-found.tsx`) must each render their own html/body — and `not-found.tsx` does. OK but easy to break.

## A-3 (L, H) — `BRAND` constants vs hardcoded strings
- `BRAND.name` is sometimes used (Header, Footer, Hero, CTA), but the literal `"BurstPick"` appears in metadata strings, og-image generator, etc. Decide one source of truth.

## A-4 (M, H) — Models data lives in a page file
- `src/app/[locale]/models/page.tsx` contains 280 lines of model metadata that should be in `src/lib/models.ts` (also used by FAQ JSON-LD potentially).

## A-5 (M, M) — `[locale]/page.tsx` composes 10 sections in fixed order
- No section toggling, no feature flags. Fine for a marketing site. But the section names duplicate the section IDs (`#features`, `#screenshots`, `#about`, `#faq`, `#download`) which are referenced by `Header` and `Footer` as anchors. Consolidate IDs into a typed registry to avoid drift.

## A-6 (M, H) — No abstraction for "Coming Soon" buttons
- The Windows "Coming Soon" pseudo-button is duplicated in Hero and CTA with the same SVG inline. Extract a `WindowsComingSoonButton` component.

## A-7 (M, H) — Common Apple Mac App Store badge duplicated 4×
- Same SVG path appears in Hero, CTA, Pricing, Download. Extract `AppStoreBadge` component.
