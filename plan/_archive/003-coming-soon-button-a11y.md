# Plan 003 — Coming Soon / disabled CTAs as real buttons

**Severity:** High · **Status:** done · **Source:** AGG-1 (code-reviewer CR-14, designer D-1, D-14)

## Progress
- 2026-04-26: Hero, CTA, Pricing now render disabled `<button>` with aria-disabled, aria-label, opacity-70, cursor-not-allowed; SVG marked aria-hidden. Lint+tsc green.

## Files
- `src/components/sections/HeroSection.tsx:80` (Windows coming-soon)
- `src/components/sections/CTASection.tsx:131` (Windows coming-soon)
- `src/components/sections/PricingSection.tsx:78` (Pro CTA placeholder)

## Problem
Each is rendered as `<div class="cursor-default">`. Screen readers see no button, no disabled state. Sighted users see button-shaped element they cannot click.

## Steps
1. Convert each `<div>` to `<button type="button" disabled aria-disabled="true" aria-label="...">`.
2. Add visible disabled styling: `opacity-60`, retain existing border/bg.
3. Tooltip / `title` attribute optional.

## Done when
- All three render as `<button disabled>`.
- axe-core check (manual) reports no violation on `role=button` with no name.
- Lint, typecheck, build pass.

## Commit
- `fix(a11y): use real disabled buttons for coming-soon CTAs` 🐛
