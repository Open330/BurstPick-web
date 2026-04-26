# Plan 019 — Drop redundant `BRAND.downloadUrl`

**Severity:** Low · **Status:** done · **Source:** AGG2-1 (code-reviewer CR2-1)

## Progress
- 2026-04-26: Removed `downloadUrl` from `BRAND` literal in `src/lib/constants.ts`. Lint+tsc green.

## Files
- `src/lib/constants.ts:35-39`

## Problem
`BRAND.downloadUrl: APP_STORE_URL` is exported but no caller imports it. Components import `APP_STORE_URL` directly. Two names for one URL increases drift risk.

## Steps
1. Edit `BRAND` to drop `downloadUrl`.
2. Run `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm build`.
3. Commit `refactor(constants): ♻️ drop redundant BRAND.downloadUrl alias`.

## Done when
- `BRAND` no longer carries `downloadUrl`.
- All gates green.
