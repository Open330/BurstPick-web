# Document Specialist — Cycle 1 (2026-04-26)

## DS-1 (M, H) — README documents pages that no longer match the repo
- `README.md` lists `purchase/` page in the project structure tree, but `src/app/[locale]/purchase/` does not exist. Only `download/`, `license/`, `privacy/`, `terms/`, `models/`, `support/` exist.
- Fix: update README to reflect actual route map.

## DS-2 (M, H) — README mentions `NEXT_PUBLIC_CHECKOUT_URL`
- README says `NEXT_PUBLIC_CHECKOUT_URL` is "optional. When set, the localized `/purchase` page routes visitors to your hosted checkout." But there is no `/purchase` page and `NEXT_PUBLIC_CHECKOUT_URL` is not referenced anywhere in `src/`.
- Fix: drop both from README + `.env.example`.

## DS-3 (M, H) — `.env.example` is bare
- Has `NEXT_PUBLIC_BASE_PATH=` and `NEXT_PUBLIC_CHECKOUT_URL=`. Doesn't document the (currently hardcoded) `https://api.burstpick.app/api/mailing-list/subscribe` endpoint.
- Fix: add `NEXT_PUBLIC_API_URL=https://api.burstpick.app` and reference it from `CTASection.tsx`.

## DS-4 (M, M) — README missing build/test/deploy details
- `## Build` is one line. No mention of:
  - `pnpm lint`, `pnpm exec tsc --noEmit`
  - Static export deploy via Cloudflare Pages or GitHub Pages
  - `out/` artifact location
  - The `_headers` file for Cloudflare
  - The `CNAME` for GitHub Pages
- Fix: expand a `## Deployment` section.

## DS-5 (L, H) — No CONTRIBUTING.md
- Repo has no contribution guidelines; commit-message style (Conventional + gitmoji) is described in user CLAUDE.md but not in repo. Ship a CONTRIBUTING.md so external collaborators know the conventions.

## DS-6 (L, H) — No CHANGELOG
- Footer references `t("changelog")` and renders a non-link `<span class="cursor-default">`. There is no changelog source. Either link to GitHub releases or create `CHANGELOG.md`.

## DS-7 (L, H) — Recent commits show fix-then-revert deploy churn
- 5 most recent commits: TypeScript upgrade, restore `output:export`, remove `output:export`, add Pages workflow, CNAME. Indicates deploy is in flux. Add a short "Deployment" doc explaining current target (Cloudflare or GitHub Pages).
