# Security Review — Cycle 3 (2026-04-26)

## Scope
CSP, headers, JSON-LD, inline scripts, mailing-list endpoint, `dangerouslySetInnerHTML`, secret leakage.

## Confirmations (no regressions)
- JSON-LD payloads escaped via `safeJsonLd()` — closes `</script>` breakout vector.
- Mailing-list endpoint env-driven via `NEXT_PUBLIC_API_BASE_URL`.
- No secrets in repo; `.env.example` placeholders only.
- `target="_blank"` external links carry `rel="noopener noreferrer"`.
- Permissions-Policy locks down camera/microphone/geolocation in `public/_headers`.

## Outstanding (already tracked)
- Plan 016 (CSP hardening) — `script-src 'unsafe-inline'` retained for gtag init. Deferred with exit criterion.
- AGG-28 (Plan 018) — Permissions-Policy could enumerate more directives. Deferred.

## New findings
None.

## Final sweep
No new attack surface introduced this cycle. No deferral upgrades needed.
