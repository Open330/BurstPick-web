# Plan 017 — Tests bootstrap (DEFERRED)

**Severity:** Medium · **Status:** deferred · **Source:** AGG-13 (test-engineer T-1, T-3, T-4, T-5)

## Files
- `package.json`
- New: `playwright.config.ts`
- New: `tests/smoke.spec.ts`

## Problem
- `@playwright/test` is in devDependencies but no spec, no config, no `pnpm test`.
- No i18n parity check (Plan 010 covers).
- No axe-core sweep.

## Reason for deferral
Establishing tests is a multi-cycle effort. The cycle's primary task is review-plan-fix on existing code. Schedule a dedicated "tests" cycle after the high-severity review items land.

## Exit criterion
Next cycle that lands a feature change, or when CI is added.
