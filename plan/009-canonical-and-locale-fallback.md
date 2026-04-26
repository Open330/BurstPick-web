# Plan 009 — Per-page canonical + 404 on unknown locale (DEFERRED)

**Severity:** Medium · **Status:** deferred · **Source:** AGG-11, AGG-12 (debugger DB-9, DB-5)

## Files
- `src/app/[locale]/layout.tsx:56-60`
- `src/i18n/request.ts:6-8`

## Problem
1. `alternates.canonical: "/"` is identical for every locale + page. SEO regression.
2. Unknown locales fall back to `en` silently. Korean URL `/de/foo` would render English content under `de`.

## Reason for deferral
Both fixes require touching the `next-intl` request config and per-page metadata pattern. Lower priority than dead-code removal and a11y fixes that ship in this cycle. Repo policy does not forbid SEO deferral; this is medium severity and not security/correctness critical.

## Exit criterion (when to re-open)
- After Plan 002 / Plan 006 / Plan 007 land, or before next public-launch milestone.

## Sketch
- Compute canonical from the route segment in each `page.tsx`'s `generateMetadata`.
- In `request.ts`, call `notFound()` (from `next/navigation`) when locale is not in `routing.locales`.
