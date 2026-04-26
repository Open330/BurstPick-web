# Tracer — Cycle 2 (2026-04-26)

## Causal traces

- TR2-1 — i18n locale resolution: `request.ts:6` casts `locale` to the locale union before calling `Array.includes`. The cast does not validate; the `||` fallback to defaultLocale catches it. Net effect: safe today, but the cast should be removed (CR2-2).

- TR2-2 — Mailing-list error handling: `CTASection.tsx:47-71` parses JSON, treats non-OK with body containing "invalid email" specially. Verified the fall-through is correct.

## NEW findings
None beyond cycle 1.
