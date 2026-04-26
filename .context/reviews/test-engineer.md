# Test Engineer — Cycle 1 (2026-04-26)

## T-1 (H, H) — Zero tests in the repo
- `package.json` lists `@playwright/test` in devDependencies but there is no `tests/`, `e2e/`, `playwright.config.*`, or `tests-examples/`.
- Failure mode: every regression ships unverified. The mailing-list submit could 500 silently after a refactor.
- Fix (any of):
  - Add a Playwright smoke spec that loads `/en`, `/ko`, `/en/privacy`, `/en/terms`, `/en/license`, `/en/download`, `/en/models`, `/en/support`, asserts no console errors and the H1.
  - Or remove `@playwright/test` from `devDependencies` until tests are added.

## T-2 (M, H) — No i18n key drift detector
- The English/Korean files are currently aligned (348 keys each). A drop-in test could parse both JSON files and assert key parity. Without it, any future PR adding only English keys ships with an `IntlError` at runtime in Korean.
- Fix: add a simple `tests/i18n-parity.test.ts` (or even a `node` script in `scripts/check-i18n.mjs`) and run it from `pnpm lint`.

## T-3 (M, H) — `pnpm test` is not a script
- Add a no-op or actual test command so CI can call it.

## T-4 (M, M) — No build-time check that all `t("...")` keys exist
- `useTranslations("foo")` + `t("bar")` — TypeScript cannot verify `bar` exists in the message bundle. `next-intl` supports a typed messages augmentation (`declare module "next-intl" { interface Messages extends ... }`). Without it, typos like `t("clusering_title")` ship as runtime warnings.
- Fix: add the typed augmentation in `src/global.d.ts` referencing the en.json shape.

## T-5 (M, H) — No accessibility test
- Add an axe-core sweep (`@axe-core/playwright`) to the Playwright smoke for at least `/en`.
