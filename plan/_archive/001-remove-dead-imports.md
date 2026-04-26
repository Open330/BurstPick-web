# Plan 001 — Remove unused `BRAND` import in legal pages

**Severity:** Medium · **Status:** done · **Source:** AGG-6 (code-reviewer CR-1)

## Progress
- 2026-04-26: removed `BRAND` import from `privacy/page.tsx` and `terms/page.tsx`. Lint and tsc green.

## Files
- `src/app/[locale]/privacy/page.tsx:4`
- `src/app/[locale]/terms/page.tsx:4`

## Problem
Both pages import `BRAND` from `@/lib/constants` but never reference it.

## Steps
1. Edit both files: drop the `BRAND` import line.
2. Run `pnpm lint` and `pnpm exec tsc --noEmit`.
3. Commit: `chore(legal): remove unused BRAND import from privacy/terms pages` with gitmoji `🧹`.

## Done when
- Both files compile without the import.
- No new lint warnings.
