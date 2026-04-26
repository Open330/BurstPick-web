# Plan 013 — Focus-visible rings + mobile menu a11y (DEFERRED)

**Severity:** Medium · **Status:** deferred · **Source:** AGG-16, AGG-17, AGG-18 (designer D-2, D-3, D-7)

## Files
- `src/components/layout/Header.tsx`
- `src/app/[locale]/layout.tsx` (skip-link contrast)
- All section components with anchors/buttons

## Problem
- Most clickable elements lack `focus-visible` rings on dark BG.
- Mobile menu has no Escape handler, no focus trap, no focus restore.
- Skip-link contrast is marginal.

## Reason for deferral
Significant cross-cutting change touching 10+ files. Plan 003 already lands the highest-impact a11y fix this cycle. Schedule a dedicated a11y pass.

## Exit criterion
Next dedicated a11y cycle, or when an axe-core scan is wired into CI.
