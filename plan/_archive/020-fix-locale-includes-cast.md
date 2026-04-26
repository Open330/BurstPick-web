# Plan 020 — Fix `Array.includes` cast in i18n request

**Severity:** Low · **Status:** done · **Source:** AGG2-2 (code-reviewer CR2-2, debugger DB2-2, tracer TR2-1)

## Progress
- 2026-04-26: Replaced misleading union cast with `(routing.locales as readonly string[]).includes(locale)`. Lint+tsc green.

## Files
- `src/i18n/request.ts:6`

## Problem
`routing.locales.includes(locale as "en" | "ko")` casts the unknown `locale` to the locale union before `includes` is called — this defeats the purpose of `includes` as a runtime guard. The runtime check still works because of the `||` fallback to `defaultLocale`, but the cast is misleading.

## Steps
1. Replace the cast with `(routing.locales as readonly string[]).includes(locale)`.
2. Run `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm build`.
3. Commit `refactor(i18n): ♻️ remove misleading locale union cast in request.ts`.

## Done when
- `request.ts` no longer asserts the unknown locale to the union before `Array.includes`.
- All gates green.
