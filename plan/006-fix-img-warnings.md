# Plan 006 — Resolve 10 `no-img-element` lint warnings

**Severity:** High · **Status:** not-started · **Source:** AGG-4 (perf-reviewer P-1, verifier V-1)

## Files
- `src/components/layout/Header.tsx:35`
- `src/components/layout/Footer.tsx:19`
- `src/components/sections/HeroSection.tsx:35,172,228,263,297,398`
- `src/components/sections/CTASection.tsx:88`
- `src/app/[locale]/download/page.tsx:24`

## Problem
10 ESLint warnings (`@next/next/no-img-element`). Repo policy (user CLAUDE.md) says fix root cause, not suppress. With `images: { unoptimized: true }`, `<Image>` becomes a passthrough; no runtime regression.

## Steps
1. Replace each `<img>` with `next/image`'s `<Image>`. Keep declared widths/heights matching the actual rendered size where practical (e.g. logos: 32×32 on Header, 64×64 on Hero — see Plan 014).
2. For decorative mockup images inside `aria-hidden`, can keep `<img>` only if we add a directory-level eslint override. Easier to convert too.
3. Re-run `pnpm lint`.

## Done when
- `pnpm lint` exits 0 with 0 warnings.

## Commit
- `perf(images): swap raw <img> for next/image to clear lint warnings` ⚡
