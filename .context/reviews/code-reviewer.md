# Code Reviewer — Cycle 1 (2026-04-26)

Scope: full repository. Inventoried 21 source files (TS/TSX), 1 build script, configs (next, tsconfig, eslint, postcss), public assets, two locale files, and existing brand reviews.

Confidence: H = High, M = Medium, L = Low.

---

## CR-1 (M, H confidence) — Unused imports in `terms` and `privacy` pages
- File: `src/app/[locale]/terms/page.tsx:4`, `src/app/[locale]/privacy/page.tsx:4`
- `BRAND` is imported from `@/lib/constants` but never referenced in either file. ESLint's no-unused-vars is not enabled in the bare `eslint-config-next/core-web-vitals` preset, so the warning is silently swallowed.
- Failure: dead import, slightly larger bundle, drift signal — both pages were probably refactored without cleanup.
- Fix: remove the import.

## CR-2 (M, H) — `useLocale` imported but unused
- File: `src/app/[locale]/terms/page.tsx:1` imports `useLocale` from `next-intl` and uses it. Good. But `src/app/[locale]/privacy/page.tsx` imports `BRAND` and never uses it (see CR-1). Re-confirm CR-1 only — `useLocale` itself is fine in `terms`.

## CR-3 (M, H) — Dead helpers in `src/lib/constants.ts`
- File: `src/lib/constants.ts:15-27` defines `sitePath()` and `localizedPath()` but no caller anywhere in `src/`.
- Same with `SALES` (`src/lib/constants.ts:37-40`) — never imported.
- Failure: dead code, drift, contradicts the `clsx` + `tailwind-merge` minimalism elsewhere.
- Fix: either remove or actually replace the ad-hoc `${BASE_PATH}/...` template strings with `sitePath()` everywhere (Header, Footer, Hero, CTA, Download). Pick one, document it.

## CR-4 (H, H) — Server vs client component boundary violation in `terms/page.tsx`
- File: `src/app/[locale]/terms/page.tsx`
- The exported page is `async` (server component) and calls `setRequestLocale`. It then renders `<TermsContent />`, which calls `useTranslations` and `useLocale`. `useLocale` is a *client* hook in `next-intl` only when no NextIntlClientProvider context exists on the server side; both `useTranslations` and `useLocale` work in server components only inside the next-intl server layer (with `setRequestLocale`). This works because the `LocaleLayout` calls `setRequestLocale`, and the inner functional component is rendered server-side without `"use client"`. OK in practice for `next-intl@4`, but the pattern is fragile: any future refactor that adds state to `TermsContent` will silently make it a server-only function trying to manage state.
- Risk: low actual bug, medium maintainability risk.
- Fix: collapse the inner `function TermsContent()` into the page body or mark intent via comment. Same applies to `LicensePage`, `PrivacyPage`, `SupportPage`, `DownloadPage`, `ModelsPage`.

## CR-5 (H, H) — `fetch` URL is hardcoded; no environment override
- File: `src/components/sections/CTASection.tsx:36-43`
- `https://api.burstpick.app/api/mailing-list/subscribe` is hardcoded. Cannot be pointed at staging during development. The `.env.example` doesn't even hint at it.
- Failure: dev/staging requests hit production mailing list. Forces fork to test.
- Fix: read `process.env.NEXT_PUBLIC_API_URL` with the existing default.

## CR-6 (M, M) — Email validation is too permissive
- File: `src/components/sections/CTASection.tsx:25-30`
- Validation is `trimmed.includes("@") && trimmed.includes(".")`. Accepts `"a.@"`, `".@a"`, `"@."`, `"foo@bar"` is rejected (no dot), but `"foo@.bar"` accepted, etc. The `<input type="email">` has its own browser validation but the user-facing JS is the loose one used to set the `errorMessage`.
- Fix: either drop the JS check entirely (rely on `type="email"` + `required`) or use a stricter regex (e.g. `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).

## CR-7 (M, H) — `Button` component is exported but never imported anywhere
- File: `src/components/ui/Button.tsx` (full file).
- Search across `src/` shows zero callers. Sections all roll their own anchor/button styling inline.
- Failure: dead code; tree-shaking will drop it but it confuses readers and gives false reuse signal.
- Fix: either delete `Button.tsx` or refactor inline buttons (Hero, CTA, Footer Discord button, Pricing CTA) to use it for consistency.

## CR-8 (M, M) — Inline analytics script is fragile
- File: `src/app/[locale]/layout.tsx:136-167`
- Inline gtag bootstrap re-attaches a global click listener inside the `gtag-init` Script. Because Next renders the same layout on every locale-route change (server-side), and the script body is dropped into the head as `afterInteractive`, this is fine on hard nav but in a hypothetical client-side route transition the same listener would not be re-attached (no problem today; only a problem if pages move to soft nav). More importantly: `l.textContent.substring(0, 50)` may execute on a `null` `textContent` if the FAQ button structure changes — no null check.
- Failure: low risk now, latent regression.
- Fix: extract to a module-level analytics helper in a separate `<Script>` file; add null guard.

## CR-9 (L, M) — `not-found.tsx` hardcodes `/en` and is not localized
- File: `src/app/not-found.tsx:42`
- `href="/en"` and the body text `"Page not found"` is English-only. With Korean as an enabled locale, a Korean visitor hitting a 404 sees English-only.
- Fix: detect locale via `usePathname` (client) or render two language strings. Acceptable as English fallback if documented.

## CR-10 (M, H) — Magic Discord URL duplicated in 3 places
- Files: `src/components/layout/Header.tsx:10`, `src/components/layout/Footer.tsx:6`, `src/components/sections/CTASection.tsx:11`, `src/app/[locale]/support/page.tsx:56`
- `https://discord.gg/8dMD56Mv` is duplicated. `SALES.discordUrl` in `constants.ts` already has it but is never read (see CR-3).
- Fix: import `SALES.discordUrl` everywhere.

## CR-11 (M, H) — Hardcoded App Store URL duplicated in 4 places
- Files: `Header.tsx:60,104`, `Footer.tsx:44`, `HeroSection.tsx:66`, `CTASection.tsx:117`, `download/page.tsx:43`. Same anti-pattern as CR-10. `APP_STORE_URL` exists in `constants.ts` and is also unused.
- Fix: import `APP_STORE_URL` everywhere.

## CR-12 (L, H) — Magic email duplicated
- Files: `Footer.tsx:68`, `CTASection.tsx`-implied, `support/page.tsx:41`, `terms/page.tsx:60`, `privacy/page.tsx:52`, `license/page.tsx:53`. Two distinct emails (`support@burstpick.app` and `open330.dev@gmail.com`) coexist.
- Fix: centralize in `SALES`.

## CR-13 (L, M) — Models data table is a 280-line literal in a page component
- File: `src/app/[locale]/models/page.tsx:17-299`
- This data should live in `src/lib/models.ts` for reuse and to keep pages slim.

## CR-14 (M, H) — `cursor-default` `<div>` masquerading as a button
- Files: `HeroSection.tsx:80`, `CTASection.tsx:131`, `PricingSection.tsx:78`
- "Windows — Coming Soon" and the disabled Pro CTA render as `<div>` with `cursor-default` but no `aria-disabled`, no `role`. Screen readers see a div. Sighted users see a button-shaped element they can't click.
- Fix: render as `<button type="button" disabled aria-disabled="true">` so AT users get the same affordance/disabled state.

---

## Final sweep — common patterns
- No `any` casts found.
- No `dangerouslySetInnerHTML` outside JSON-LD scripts (safe — JSON.stringify of static objects).
- No secrets in repo.
- No `useEffect` cleanup leaks.
- All client components have `"use client"`.
- Tests: none. There is no test runner, no Playwright spec, no Vitest. `@playwright/test` is a devDependency but no `tests/` or `e2e/` directory exists. Either drop the dependency or add at least one smoke test.
