# Architecture Review — Cycle 3 (2026-04-26)

## Confirmations
- Constants centralized in `src/lib/constants.ts` (APP_STORE_URL, API_BASE_URL, BRAND, SALES, BASE_PATH, sitePath, localizedPath).
- `BRAND.downloadUrl` redundancy removed in cycle 2.
- i18n routing uses `next-intl` `defineRouting` with safe runtime locale guard.
- Static export still configured for Cloudflare Pages / GitHub Pages.

## Outstanding (already tracked)
- Plan 011 — extract models data from page TSX into `lib/models.ts`.
- Plan 021 / AGG2-3 — `sitePath()` exists but unused; 14× inline `${BASE_PATH}/...`.
- Plan 021 / AGG2-4 — internal nav uses raw `<a>` instead of `next-intl` `Link`.

## New findings
None.
