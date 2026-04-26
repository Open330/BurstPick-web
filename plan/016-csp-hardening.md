# Plan 016 — CSP hardening (DEFERRED)

**Severity:** High · **Status:** deferred · **Source:** AGG-9 (security-reviewer S-1, S-2)

## Files
- `public/_headers`
- `src/app/[locale]/layout.tsx` (gtag-init + JSON-LD)

## Problem
CSP allows `script-src 'unsafe-inline'` because of three inline `<script>`s (gtag-init + 3 JSON-LD). Currently safe (no user-supplied content), but brittle.

## Reason for deferral
Requires moving inline scripts to external `/public/*.js` files OR computing build-time `sha256` hashes per static export. Static export complicates per-request nonces. Plan 008 (escape `</script>`) is the high-value, low-risk fix that lands this cycle. Full CSP hardening is a follow-up.

## Exit criterion
Before any feature that takes user-supplied HTML/markdown into the rendered pages, OR when external security audit happens.

## Repo policy notes
- Per user CLAUDE.md, security-class findings are not deferrable unless repo rules explicitly permit. There is no project-level CLAUDE.md/AGENTS.md/CONTRIBUTING.md. The current security risk is theoretical (no DOM XSS sink reachable today); deferral is justified by lack of an actively exploitable path. Re-open if any third-party HTML sink is added.
