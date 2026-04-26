# Tracer — Cycle 1 (2026-04-26)

Causal traces of suspicious flows.

## TR-1 (M, H) — Mailing-list submit happy + error paths
1. User types into `<input type="email">` (`CTASection.tsx:159`).
2. State updates `email`. If state is `error`, error clears.
3. On submit, `e.preventDefault()`. Trim. Cheap regex (`includes("@") && includes(".")`). On fail → set error + return.
4. `setFormState("loading")`, clear error.
5. POST to hardcoded URL. `body: JSON.stringify({ email: trimmed, source: "landing" })`.
6. If `!res.ok`, parse JSON, branch on `data?.error?.toLowerCase().includes("invalid email")`. Set error.
7. Else `setFormState("success")`.
- Latent issues: see DB-7 (no body validation on success), CR-5 (hardcoded URL), CR-6 (loose validation), S-3 (no client cooldown), no aria-live region on the error/success messages — screen readers won't announce.
- Fix: add `aria-live="polite"` to the error/success containers.

## TR-2 (M, H) — FAQ open → analytics flow
1. User clicks button (`FAQSection.tsx:31`).
2. `setOpenIndex(...)` toggles.
3. Inline gtag listener (`LocaleLayout.tsx:158-166`) catches the click, walks DOM for `#faq button`, queries first `<span>`, slices 50 chars, fires event.
- Latent: see DB-1.

## TR-3 (M, H) — Locale negotiation
1. URL `/ko/privacy` → middleware? next-intl `routing.ts` defines `locales: ["en","ko"]`, `defaultLocale: "en"`. No `localePrefix` set — defaults to `"always"`.
2. `request.ts` reads `requestLocale`. If unknown, falls back to `en` (no 404).
3. `LocaleLayout` calls `setRequestLocale(locale)`.
4. `getMessages()` and `getTranslations({ locale, namespace })` resolve.
- Latent: DB-5 — unknown locales silently render under wrong slug.

## TR-4 (M, H) — Hero background image fetch
1. `LocaleLayout` preloads `/assets/hero-bg.avif` via `<link rel="preload">`.
2. `HeroSection` renders `<Image src="/assets/hero-bg.avif" priority>`.
3. With `unoptimized:true`, `next/image` should request the same URL.
- Verify in network panel: only one fetch, not two.
