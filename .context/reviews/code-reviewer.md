# Code Reviewer — Cycle 2 (2026-04-26)

Cycle 1 already shipped fixes for AGG-1..AGG-8 (plans 001..008 archived). Re-reviewed the post-cycle-1 HEAD against current source.

## NEW findings (cycle 2)

### CR2-1 — Redundant `BRAND.downloadUrl` duplicates `APP_STORE_URL`
- **File:** `src/lib/constants.ts:35-39`
- **Severity:** Low · **Confidence:** High
- `BRAND.downloadUrl: APP_STORE_URL` is exported but no caller imports it. Components import `APP_STORE_URL` directly. Slight cognitive cost from having two names for one URL.
- **Fix:** Drop `downloadUrl` from `BRAND` literal.

### CR2-2 — Locale type assertion in `i18n/request.ts`
- **File:** `src/i18n/request.ts:6`
- **Severity:** Low · **Confidence:** High
- `routing.locales.includes(locale as "en" | "ko")` casts the unknown `locale` to the locale union before `includes` — defeats the purpose of `includes` as a guard. Use `(routing.locales as readonly string[]).includes(locale)`.

### CR2-3 — Footer "changelog" non-interactive `<span>` with `cursor-default`
- **File:** `src/components/layout/Footer.tsx:53-57`
- **Severity:** Low · **Confidence:** High
- Same a11y class of bug as cycle 1 AGG-1: span styled as a footer link but is not interactive. Already tracked in deferred bundle (AGG-29).

### CR2-4 — `sitePath` / `localizedPath` exported but never imported
- **File:** `src/lib/constants.ts:15-27`
- **Severity:** Low · **Confidence:** High
- Same dead-code class as cycle 1 CR-3 cleanup. Either delete or use them in place of the inline `${BASE_PATH}/...` template literals.

## Already-tracked findings (no change)
- All cycle-1 plans 009..018 still apply. No new evidence to escalate or close them.

## Confirmed clean (cycle-2 verification)
- JSON-LD escaping, gtag null-guard, disabled-button a11y, env-driven mailing list, README/.env cleanup, all `<img>`→`<Image>` all present in HEAD.
