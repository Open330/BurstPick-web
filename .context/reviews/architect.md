# Architect — Cycle 2 (2026-04-26)

## NEW findings (cycle 2)

### A2-1 — Inline `${BASE_PATH}/...` string concatenation duplicated 14× across components
- **Files:** Header, Footer, HeroSection, CTASection.
- **Severity:** Low · **Confidence:** High
- `sitePath()` exists in `lib/constants.ts` for exactly this purpose but is never used.

### A2-2 — Internal navigation uses raw `<a>` instead of `Link`
- **Files:** `Header.tsx`, `Footer.tsx`
- **Severity:** Low · **Confidence:** Medium
- Static export tolerates `<a>`. Pre-launch site, low impact. Defer.

## Already-tracked findings
- AGG-21 (models data extraction) — plan 011 deferred.
- AGG-7 (Button component unused) — fold into A2-1 cleanup.
