# Plan 014 — Logo intrinsic dimensions + dedupe alt text (DEFERRED)

**Severity:** Medium · **Status:** deferred · **Source:** AGG-14, AGG-15 (designer D-6, D-8)

## Files
- `src/components/layout/Header.tsx:34-37`
- `src/components/layout/Footer.tsx:18-21`
- `src/components/sections/HeroSection.tsx:35`
- `src/components/sections/CTASection.tsx:88`
- `src/app/[locale]/download/page.tsx:24`

## Problem
- Logos declared `width=645 height=618` rendered into square boxes — small CLS + squish.
- Header/Footer have `<img alt="BurstPick">` next to a `<span>BurstPick</span>` — duplicated SR announcement.

## Reason for deferral
Will be revisited together with Plan 006 (img → next/image). Same files touched. Schedule plan 006 to land first; this becomes a follow-up.

## Exit criterion
Land Plan 006, then immediately follow with this.
