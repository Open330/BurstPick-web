# Verifier — Cycle 2 (2026-04-26)

## Gates (run against full repo)
- `pnpm lint` — exit 0, no warnings, no errors.
- `pnpm exec tsc --noEmit` — exit 0.
- `pnpm build` — exit 0, output `out/` regenerated.

## Plan-level verification (cycle 1 archived plans)
- Plan 001 (BRAND import) — VERIFIED. No `BRAND` import in privacy/terms.
- Plan 002 (centralize URLs) — VERIFIED. `id6760616886`, `discord.gg/8dMD56Mv`, `support@burstpick.app` only in `lib/constants.ts`.
- Plan 003 (disabled buttons) — VERIFIED. Hero/CTA/Pricing render `<button disabled aria-disabled>`.
- Plan 004 (env-driven mailing list) — VERIFIED. `${API_BASE_URL}/api/mailing-list/subscribe`.
- Plan 005 (README purchase cleanup) — VERIFIED.
- Plan 006 (no `<img>`) — VERIFIED. `grep -rn "<img" src/` empty.
- Plan 007 (gtag null-guard) — VERIFIED.
- Plan 008 (JSON-LD escape) — VERIFIED. `safeJsonLd()` present.

## NEW evidence (cycle 2)
- CR2-1, CR2-2 candidate fixes verified as still-present issues in HEAD.
