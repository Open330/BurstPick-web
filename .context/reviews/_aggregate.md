# Aggregate Code Review — Cycle 1 (2026-04-26)

Per-agent files: `code-reviewer.md`, `perf-reviewer.md`, `security-reviewer.md`, `architect.md`, `designer.md`, `test-engineer.md`, `critic.md`, `document-specialist.md`, `debugger.md`, `verifier.md`, `tracer.md`.

UI/UX agent ran in static-only mode (no headless browser available). All findings cite file/line; severity preserved from highest source.

## AGENT FAILURES
None. All reviewer perspectives produced output.

---

## Cross-agent agreement (multi-flagged → higher signal)

| ID | Severity | Finding | Files | Flagged by |
|----|----------|---------|-------|------------|
| AGG-1 | High | "Coming Soon" / disabled CTA rendered as `<div cursor-default>` instead of `<button disabled aria-disabled>` | HeroSection:80, CTASection:131, PricingSection:78 | code-reviewer (CR-14), designer (D-1) |
| AGG-2 | High | Mailing-list API URL hardcoded in component, no env override; success path doesn't validate body | CTASection.tsx:36-43 | code-reviewer (CR-5), debugger (DB-7), document-specialist (DS-3), tracer (TR-1) |
| AGG-3 | High | README + `.env.example` reference `/purchase` and `NEXT_PUBLIC_CHECKOUT_URL` that no longer exist | README.md, .env.example | document-specialist (DS-1, DS-2) |
| AGG-4 | High | 10 `<img>` lint warnings (`no-img-element`) — not gated, but repo policy says fix-don't-suppress | Header, Footer, Hero, CTA, download | perf-reviewer (P-1), verifier (V-1) |
| AGG-5 | High | Dead code in `lib/constants.ts`: `sitePath`, `localizedPath`, `SALES`, `APP_STORE_URL` exported but unused; URLs duplicated 4× across components | constants.ts, Header, Footer, Hero, CTA, Download | code-reviewer (CR-3, CR-10, CR-11), architect (A-7), verifier (V-7) |
| AGG-6 | Medium | Unused `BRAND` import in legal pages | privacy/page.tsx:4, terms/page.tsx:4 | code-reviewer (CR-1) |
| AGG-7 | Medium | `Button` UI component never imported anywhere; sections roll their own | components/ui/Button.tsx | code-reviewer (CR-7), architect (A-6, A-7) |
| AGG-8 | High | Inline `gtag-init` listener calls `.textContent.substring()` without null guard | layout.tsx:163 | code-reviewer (CR-8), debugger (DB-1), tracer (TR-2) |
| AGG-9 | High | CSP `script-src 'unsafe-inline'` required only because of inline scripts; current usage is safe but brittle | public/_headers, layout.tsx | security-reviewer (S-1) |
| AGG-10 | Medium | JSON-LD via `dangerouslySetInnerHTML` doesn't escape `</script>` in translated FAQ strings | layout.tsx:122-130 | security-reviewer (S-5) |
| AGG-11 | Medium | Locale-bound metadata canonical = `/` (collapses every page to root) | layout.tsx:57 | debugger (DB-9) |
| AGG-12 | Medium | Unknown locales silently fall back to `en` (no 404) — bad SEO + UX | i18n/request.ts:6-8 | debugger (DB-5) |
| AGG-13 | Medium | No tests at all; `@playwright/test` listed but no spec files | package.json, repo root | test-engineer (T-1, T-2, T-3, T-4, T-5) |
| AGG-14 | Medium | Logo `<img>` declares 645×618 but renders square — small CLS + squish | Header:35, Footer:19, Hero:35, Footer (download), CTA:88 | designer (D-6) |
| AGG-15 | Medium | Header logo announces brand name twice (img alt + sibling span) | Header.tsx:34-37, Footer.tsx:18-21 | designer (D-8) |
| AGG-16 | Medium | Mobile menu has no Escape key handler, no focus trap, no focus restore | Header.tsx:80-114 | designer (D-7) |
| AGG-17 | Medium | Most clickable elements lack `focus-visible` ring on dark BG | sections/* | designer (D-2) |
| AGG-18 | Medium | Skip-link contrast marginal (4.27:1) | layout.tsx:171 | designer (D-3) |
| AGG-19 | Medium | Hero font-loading: 8 woff2 files; Plus Jakarta weight 500 unused | layout.tsx:12-17 | perf-reviewer (P-2) |
| AGG-20 | Medium | Hero double-fetches background (preload + `<Image priority>`) | layout.tsx:118 + HeroSection.tsx:16 | perf-reviewer (P-3) |
| AGG-21 | Medium | Models data lives in page TSX; should be in `lib/models.ts` | models/page.tsx:17-299 | code-reviewer (CR-13), architect (A-4) |
| AGG-22 | Medium | Hand-written sitemap omits `/download`, `/models`, `/support` | public/sitemap.xml | critic (CR-B) |
| AGG-23 | Medium | Manifest `start_url` always `/en`; no per-locale manifest | public/manifest.json | critic (CR-C) |
| AGG-24 | Low | Email validation regex too loose | CTASection.tsx:25-30 | code-reviewer (CR-6) |
| AGG-25 | Low | 404 page hardcoded to `/en` and English copy | not-found.tsx:42 | code-reviewer (CR-9) |
| AGG-26 | Low | `out/` may not be in `.gitignore` | .gitignore | perf-reviewer (P-10), critic (CR-E) |
| AGG-27 | Low | Two emails (`support@`, `open330.dev@gmail.com`) coexist in legal pages | terms/, privacy/, license/ | security-reviewer (S-8), code-reviewer (CR-12) |
| AGG-28 | Low | Permissions-Policy missing extra blocks (interest-cohort, payment, usb, midi) | public/_headers | security-reviewer (S-6) |
| AGG-29 | Low | Footer `changelog` link is a no-op span | Footer.tsx:53 | document-specialist (DS-6) |
| AGG-30 | Low | `transition-all` on cards | Features/About/NotDo | perf-reviewer (P-5) |
| AGG-31 | Low | FAQ chevron + accordion don't respect prefers-reduced-motion | FAQSection.tsx | designer (D-11), perf-reviewer (P-9) |
| AGG-32 | Low | No CONTRIBUTING.md | repo root | document-specialist (DS-5) |
| AGG-33 | Low | README missing build/deploy details | README.md | document-specialist (DS-4, DS-7) |
| AGG-34 | Low | FAQ panels carry `role="region"` which spams landmarks (10 of them) | FAQSection.tsx | designer (D-10) |
| AGG-35 | Low | Mockup `<img>` alts inside `aria-hidden` parent waste bytes | HeroSection.tsx | designer (D-5) |

## Stats
- Total findings (after dedupe): 35
- High: 5
- Medium: 20
- Low: 10

## Notes for planning
- Repo is a static-export marketing site. There is no backend or test suite; `@playwright/test` is unused.
- Repo policy lives in user-global CLAUDE.md (no project-level CLAUDE.md, AGENTS.md, .cursorrules, or CONTRIBUTING.md). Repo policy reminders: GPG-signed commits, Conventional Commits + gitmoji, fine-grained commits, `git pull --rebase` before push.
- Latest tooling: Next 16, React 19, TS 6, Tailwind 4. All current.
