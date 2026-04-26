# Plan 002 — Centralize shared URLs

**Severity:** High · **Status:** done · **Source:** AGG-5 (code-reviewer CR-3, CR-10, CR-11; architect A-7; verifier V-7)

## Progress
- 2026-04-26: Header, Footer, HeroSection, CTASection, support, terms, download/page now consume `APP_STORE_URL`, `SALES.discordUrl`, `SALES.supportEmail`. Verified zero remaining literals via grep. Lint+tsc green.

## Files
- `src/lib/constants.ts`
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/CTASection.tsx`
- `src/app/[locale]/download/page.tsx`
- `src/app/[locale]/support/page.tsx`

## Problem
- App Store URL `https://apps.apple.com/us/app/burstpick/id6760616886` is duplicated in 5 components.
- Discord URL `https://discord.gg/8dMD56Mv` is duplicated in 4 components.
- `support@burstpick.app` is duplicated in 5+ files.
- Meanwhile `APP_STORE_URL`, `SALES.discordUrl`, `SALES.supportEmail` exist in `constants.ts` and are not imported anywhere. Dead exports.

## Steps
1. Confirm `APP_STORE_URL`, `SALES.discordUrl`, `SALES.supportEmail` are correct.
2. Replace every literal occurrence with the imported constant.
3. Re-run gates.
4. Commit one-per-component or one for the whole rollup (rollup is fine since the change is mechanical):
   - `refactor(constants): use APP_STORE_URL / SALES across components` ♻️

## Done when
- Zero literal `apps.apple.com/...id6760616886` outside `constants.ts`.
- Zero literal `discord.gg/8dMD56Mv` outside `constants.ts`.
- Zero literal `support@burstpick.app` outside `constants.ts`.
- Lint, typecheck, build pass.
