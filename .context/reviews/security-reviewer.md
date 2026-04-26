# Security Reviewer — Cycle 2 (2026-04-26)

## NEW findings (cycle 2)

### S2-1 — `next.config.ts` does not set `images.dangerouslyAllowSVG`
- **File:** `next.config.ts`
- **Severity:** Info · **Confidence:** High
- Static export with `images.unoptimized: true` skirts SVG-injection vectors. No remote `<Image src>` is used. No fix needed.

## Already-tracked findings
- AGG-9 (CSP `unsafe-inline`) — plan 016 deferred.
- AGG-10 (JSON-LD escape) — plan 008 archived (DONE this cycle path).
- AGG-28 (Permissions-Policy minimal) — deferred AGG-28.

## Confirmed clean
- No secrets in repo, `.env` ignored, `.env.example` placeholders only.
- `dangerouslySetInnerHTML` JSON-LD is now passed through `safeJsonLd()` (escapes `<`,`>`,`&`,U+2028,U+2029).
- All external `<a target=_blank>` carry `rel="noopener noreferrer"`.
