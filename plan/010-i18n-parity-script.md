# Plan 010 — i18n key parity script (DEFERRED)

**Severity:** Medium · **Status:** deferred · **Source:** AGG-13 (test-engineer T-2)

## Files
- New: `scripts/check-i18n.mjs`
- `package.json` (add to `lint` script chain or a `prebuild`)

## Problem
en/ko message files are aligned today. Without a guard, future PRs will drift.

## Reason for deferral
Currently 0 drift. Low immediate impact. Ship together with test bootstrap (Plan 017).

## Exit criterion
Re-open with Plan 017 or when first drift is observed.

## Sketch
- Node script: load both JSONs, flatten, diff key sets, exit non-zero on missing.
- Wire into `pnpm lint` as `eslint . && node scripts/check-i18n.mjs`.
