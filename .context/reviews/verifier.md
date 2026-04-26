# Verifier — Cycle 1 (2026-04-26)

Confirms gate state and behaviors against documented expectations.

## V-1 (H, H) — Lint: `pnpm lint` exits 0 with 10 warnings
- All warnings are `@next/next/no-img-element` for the 10 `<img>` tags listed in perf-reviewer P-1. No errors. Repo policy (CLAUDE.md) says "fix the underlying issue rather than suppress." So either convert all to `<Image>` or document a project rule that decorative tiny images are allowed.

## V-2 (H, H) — Typecheck: `pnpm exec tsc --noEmit` exits 0
- No errors.

## V-3 (M, H) — Build status (was running at end of cycle)
- Ran `pnpm build` in background. Check before commit. Static export produces `out/`.

## V-4 (H, H) — i18n key parity confirmed
- en.json: 348 leaf keys. ko.json: 348 leaf keys. 0 keys missing in either direction.

## V-5 (M, H) — All page routes referenced from Footer/Header exist
- `/${locale}#features` → exists (HomePage anchor)
- `/${locale}#screenshots` → exists (Gallery)
- `/${locale}#about` → exists (About)
- `/${locale}#faq` → exists (FAQ)
- `/${locale}/privacy`, `/${locale}/terms`, `/${locale}/license`, `/${locale}/models` → exist
- App Store URL `id6760616886` external → not verified.

## V-6 (M, H) — README claims `/purchase` page; not present in code
- See document-specialist DS-1 / DS-2.

## V-7 (M, H) — `unused` exports in `constants.ts`
- `sitePath`, `localizedPath`, `SALES`, `APP_STORE_URL`, `Feature`, `GalleryItem` — all exported, only `BRAND`, `BASE_PATH`, `FEATURES`, `GALLERY_ITEMS`, `FAQ_KEYS` are imported elsewhere. `APP_STORE_URL` is exported but the actual URL is hardcoded in 4 places. Inconsistent.
