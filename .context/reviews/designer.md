# Designer — Cycle 2 (2026-04-26)

UI/UX reviewer ran in static-only mode (no headless browser available).

## NEW findings

### D2-1 — Footer "Changelog" item visually identical to interactive links
- **File:** `src/components/layout/Footer.tsx:53-57`
- **Severity:** Low · **Confidence:** High
- Sighted users may try to click. Either remove the row or render as `<button disabled>` like cycle-1 plan 003 fixed for CTAs.

### D2-2 — Hero `<button disabled>` Windows CTA aria-label could match visible text
- Minor.

## Already-tracked
All cycle-1 designer findings unchanged.
