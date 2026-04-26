# Critic — Cycle 1 (2026-04-26)

Cross-perspective skepticism applied to the whole change surface.

## CR-A (M, H) — Static export is decided but not enforced
- `next.config.ts: output: "export"`. The codebase still uses `next/font` (Google Fonts) which is OK with export, and `next/script`, also OK. But `redirect()` from `next/navigation` is used in `src/app/page.tsx`. Static export *does* support redirects via prerender, but only at build time — `redirect("/en")` in a server component generates a meta-refresh in the static HTML. Verify the produced `out/index.html` has the redirect.
- Risk: low; flag for verification.

## CR-B (M, H) — Sitemap is hand-written
- `public/sitemap.xml` is a static XML with only 4 routes per locale. Misses `/download`, `/models`, `/support`. Generating from the route table would prevent drift.
- Fix: add `next-sitemap` or a small `scripts/generate-sitemap.mjs` that scans `src/app/[locale]/*` directories.

## CR-C (M, H) — Manifest `start_url` does not honor browser language
- `manifest.json` always points at `/en`. Korean users installing the PWA will be sent to English. With static export there is no easy fix without two manifests.
- Fix: serve two manifests via `<link rel="manifest" href="/manifest-en.json">` per locale.

## CR-D (M, H) — Brand footer says "Built with [next?]" but no actual built_with text in en.json
- `Footer.tsx:23` renders `t("built_with")`. Look up: in messages/en.json, the value is "Built with care · Made for photographers". Fine. But its sibling `tagline` is "AI-powered burst photo culling for photographers" — overlapping with the page H1/metadata. Brand voice diverges across pages. Brand-voice consistency review (out of scope of code review) was already done by personas; flag here for completeness.

## CR-E (L, H) — Build output `/out` and `/.next` likely not in `.gitignore`
- `.gitignore` is small (153 bytes). Verify `/out` and `/.next` are listed; otherwise CI artifacts can leak.
