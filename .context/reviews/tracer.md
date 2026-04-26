# Tracer Review — Cycle 3 (2026-04-26)

## Data-flow checks
- `BASE_PATH` flow: env → `constants.ts` → consumed in 14 sites (per AGG2-3, deferred plan 021).
- `APP_STORE_URL` / `SALES.discordUrl`: single source, consumed across Header / Footer / CTA / Hero.
- Locale flow: URL param → next-intl request handler → `setRequestLocale` → `useLocale` / `getTranslations`.

## New findings
None.
