# Perf Reviewer — Cycle 2 (2026-04-26)

## NEW findings (cycle 2)

### P2-1 — Hero mockup uses ~22 `next/image` instances inside `aria-hidden`
- **File:** `src/components/sections/HeroSection.tsx:140-451`
- **Severity:** Low · **Confidence:** Medium
- Decorative app-mockup contains 7 cluster + 10 thumbnail + 10 filmstrip + 1 main + 2 face + logo. Many are above-fold on desktop. Consider sprite sheet to drop request count.

### P2-2 — Decorative tile images lack explicit `sizes`
- **File:** `src/components/sections/HeroSection.tsx:179-188, 274, 308, 409`
- **Severity:** Low · **Confidence:** Medium
- Several `<Image fill>` sites with `sizes`; cluster sidebar tile uses `<Image width=48 height=36>` correctly. Verified `unoptimized:true` mutes warnings. Cosmetic.

## Already-tracked findings (no change)
- AGG-19 (font weight 500) — plan 015 deferred.
- AGG-20 (hero double-fetch) — folded into 015.

## Confirmed clean
- All `<img>` tags now `<Image>` (cycle 1 plan 006 archived). `pnpm lint` exits 0 with no warnings.
