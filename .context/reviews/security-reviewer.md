# Security Reviewer — Cycle 1 (2026-04-26)

Static marketing site, no server-side input handling, no auth. Surface: outbound API call (mailing list), inline analytics, JSON-LD, third-party CDN/script domains via CSP.

## S-1 (H, H) — CSP allows `'unsafe-inline'` in `script-src`
- File: `public/_headers`
- `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com ...`
- Reason it's there: the `gtag-init` inline script in `LocaleLayout` and the three JSON-LD blocks. Without a CSP nonce, removing `unsafe-inline` breaks them.
- Risk: high. With `unsafe-inline`, any DOM-XSS sink would be exploitable. Currently no user-supplied content is inserted via dangerouslySetInnerHTML beyond JSON-LD of static data, so the practical risk is low — but the pattern is brittle and any future innerHTML of translated content would be exploitable.
- Fix: move analytics bootstrap to a static JS file under `/public/` and reference via `<script src>`, then drop `'unsafe-inline'`. JSON-LD blocks can also be moved to `<script type="application/ld+json" src="...">` (if browsers support — they do for type=application/ld+json with src in modern browsers; otherwise pre-render with a known SHA-256 hash and add to CSP `script-src 'sha256-...'`).

## S-2 (M, H) — No CSP report-only or report-uri
- File: `public/_headers`
- No `report-uri` / `report-to` directive. CSP failures will be silent.
- Fix: add a `Content-Security-Policy-Report-Only` clone in dev; or send reports to a free endpoint (e.g. uri-reports).

## S-3 (M, H) — Mixed-context POST without CSRF/origin checks
- `CTASection.tsx:36-43` POSTs JSON to `https://api.burstpick.app/api/mailing-list/subscribe`. The endpoint is cross-origin from `burstpick.app`. Browser will preflight; the API must be CORS-permissive. No bearer token sent. Anyone can call the API directly with arbitrary `email` + `source`.
- Risk: subscription spam / mailing-list flood. Out of scope for this repo (server-side problem) but worth noting that the front-end has no rate limiting.
- Fix (front-end): add a simple per-page submit cooldown (`localStorage` flag, e.g. 1 attempt per minute) to deflect accidental retries.

## S-4 (M, H) — Outbound `target="_blank"` everywhere has `rel="noopener noreferrer"`
- Verified across Hero/CTA/Header/Footer/Support — all external anchors have correct `rel`. Good.

## S-5 (L, H) — `dangerouslySetInnerHTML` only used for static JSON-LD
- `src/app/[locale]/layout.tsx:122-130`. Content is `JSON.stringify(orgJsonLd|productJsonLd|faqJsonLd)`. The `faqJsonLd` reads from `faqT(key)` — if a translator ever inserted `</script>` in a FAQ string, it would break out of the JSON-LD script tag. Risk: translator self-XSS.
- Fix: replace any `<` and `>` and `&` in the JSON.stringify output, or use `JSON.stringify(obj).replace(/</g, "\\u003c")`.

## S-6 (L, M) — `_headers` `Permissions-Policy` is minimal
- Only camera/mic/geolocation are blocked. Consider adding: `interest-cohort=(), browsing-topics=(), payment=(), usb=(), midi=()`.

## S-7 (L, H) — `X-Frame-Options: SAMEORIGIN` plus `frame-ancestors 'self' https://www.google.com https://googleads.g.doubleclick.net`
- `X-Frame-Options` is overridden by `frame-ancestors` per spec, so `SAMEORIGIN` is informational only. Not a bug, just noise. Acceptable.

## S-8 (L, H) — Mailto links expose two distinct emails
- `support@burstpick.app` and `open330.dev@gmail.com`. The personal Gmail in `terms`, `privacy`, `license` is harvestable. Switch all mailto to `support@burstpick.app` if equivalent.

## S-9 (L, M) — `manifest.json` `start_url` is `/en` but no `lang` / `id`
- Minor PWA hygiene; not a security issue per se but `id` should be set to a stable identifier so that future rename of `start_url` doesn't fork the install.
