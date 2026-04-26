# Plan 014 — Logo intrinsic dimensions + dedupe alt text (DONE)

**Severity:** Medium · **Status:** done (cycle 3) · **Source:** AGG-14, AGG-15 (designer D-6, D-8)

## Files touched
- `src/components/layout/Header.tsx:36`
- `src/components/layout/Footer.tsx:20`
- `src/components/sections/HeroSection.tsx:35-42`
- `src/components/sections/CTASection.tsx:105-111`
- `src/app/[locale]/download/page.tsx:25-32`

## Resolution
- Pass intrinsic 645×618 dimensions to every `next/image` rendering `logo.avif`, so the Image runtime produces correct aspect-ratio hints (eliminates the residual squish risk and gives the browser proper CLS metadata).
- Visual square slot retained via Tailwind `h-* w-* object-contain` — image is letterboxed inside the slot rather than squished.
- `download/page.tsx` previously lacked `object-contain` and would have squished the asset to square; fixed.
- Header/Footer alt-text dedup was already addressed in cycle 1 (`alt=""` paired with adjacent visible "BurstPick" span). No further change needed.

## Verification
- `pnpm lint` — PASS.
- `npx tsc --noEmit` — PASS.
- `pnpm build` — PASS.
