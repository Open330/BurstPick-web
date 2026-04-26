# Debugger — Cycle 1 (2026-04-26)

Looking for latent bugs, regressions, and failure modes.

## DB-1 (M, H) — `gtag-init` script `l.textContent.substring(0, 50)` will throw if `<span>` has no text
- File: `src/app/[locale]/layout.tsx:163`. If the FAQ button's first `<span>` ever holds an icon-only child, `textContent` may be `""` (no throw) but if the `<span>` element is itself null (no `<span>` child), `f.querySelector('span')` returns `null` and `l.textContent` throws. The current `f.querySelector('span')` lookup *can* return null because the chevron is wrapped in `motion.span`.
- Repro: open devtools, manually delete the question span, click — TypeError.
- Fix: `var l = f.querySelector('span'); var label = l ? (l.textContent || '').substring(0, 50) : '';`.

## DB-2 (M, H) — `useEffect` dependency missing in `Header.tsx`
- `useState(scrolled)` updates can race with rapid resize/scroll, but listener uses `setScrolled(window.scrollY > 50)` so React batching handles it. No bug.

## DB-3 (M, H) — `setOpenIndex(openIndex === i ? null : i)` is fine
- FAQ accordion. No bug. Index is always within bounds (`FAQ_KEYS` length). No off-by-one.

## DB-4 (M, M) — `redirect()` in static export
- `src/app/page.tsx` calls `redirect("/en")`. Next 16 + static export emits this as a meta-refresh in `out/index.html`. Verify after build. If absent, root URL hits 404.

## DB-5 (M, H) — Locale fallback in `request.ts` is silent
- `src/i18n/request.ts:6-8` sets locale to default if missing/unknown. Combined with `setRequestLocale` in pages, an unknown locale URL like `/de/privacy` would still render English content under the `de` URL — confusing for SEO.
- Fix: emit a 404 (`notFound()`) instead of silently falling back. Or rely on `routing.localePrefix` settings.

## DB-6 (L, H) — `useState` updater not used in scroll handler
- `Header.tsx:19`. Using `setScrolled(window.scrollY > 50)` always recalculates. No regression.

## DB-7 (M, H) — Mailing list error path swallows non-JSON 5xx
- `CTASection.tsx:46`: `await res.json().catch(() => null)`. If the API returns plain text 502 / Cloudflare HTML, `data` is null and `errorMessage` is set to the generic. Fine.
- But: when `res.ok` is true and the body is unexpected, code still treats as success. If the API ever changes to "ack but error", users see green checkmark.
- Fix: parse the response and check `data?.success === true`.

## DB-8 (L, M) — `.replace(/\/$/, "")` on BASE_PATH does not handle trailing whitespace
- `constants.ts:13`. If env var has trailing space, slash is not stripped. Defensive only.

## DB-9 (M, H) — Locale-bound metadata canonical is `/`
- `LocaleLayout.tsx:57`: `alternates.canonical: "/"` — for `/en/foo`, canonical resolves to `https://burstpick.app/` which is incorrect (should be `/en/foo`). This collapses every page in every locale to the same canonical, harming SEO.
- Fix: derive canonical from the route via `usePathname` (server-side) or set per-page metadata.
