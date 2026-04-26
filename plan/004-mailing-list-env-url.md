# Plan 004 — Make mailing-list endpoint env-driven

**Severity:** High · **Status:** not-started · **Source:** AGG-2 (code-reviewer CR-5, debugger DB-7, document-specialist DS-3, tracer TR-1)

## Files
- `src/components/sections/CTASection.tsx`
- `src/lib/constants.ts`
- `.env.example`
- `README.md`

## Problem
- Endpoint URL is hardcoded — cannot test against staging.
- On `res.ok`, the success state is set without inspecting the response body.
- Email regex is too loose.
- Error/success containers are not announced via `aria-live`.

## Steps
1. Add `NEXT_PUBLIC_API_BASE_URL` to `.env.example` with default note.
2. Export `API_BASE_URL` from `constants.ts` (defaults to `https://api.burstpick.app`).
3. Replace hardcoded URL in `CTASection.tsx` with `${API_BASE_URL}/api/mailing-list/subscribe`.
4. Tighten email regex to `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.
5. On `res.ok`, parse JSON; require `data?.success === true || data?.subscribed === true || data?.email` (whichever the API returns) before transitioning to `success`.
6. Wrap the error/success container in `aria-live="polite"`.
7. Document the new env var in README.

## Done when
- No literal `https://api.burstpick.app/...` inside components.
- Submitting an obviously bad email shows the new error instantly.
- Lint, typecheck, build pass.

## Commit
- `feat(cta): make mailing list endpoint env-driven and validate response` ✨
- `fix(cta): tighten email regex and announce form result via aria-live` 🐛
