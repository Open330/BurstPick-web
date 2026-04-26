# Plan 018 — Deferred low-priority findings (DEFERRED bundle)

**Severity:** Low · **Status:** deferred · **Source:** see per-row citations

| ID | File | Issue | Original severity | Original confidence | Reason for deferral |
|----|------|-------|-------------------|---------------------|---------------------|
| AGG-24 | CTASection.tsx:25-30 | Email regex too loose | L | M | Will land inside Plan 004 |
| AGG-25 | not-found.tsx:42 | Hardcoded `/en` and English copy | L | M | Cosmetic; revisit when site is launched in more locales |
| AGG-26 | .gitignore | `out/` may not be ignored | L | M | Small; will land in next housekeeping commit |
| AGG-27 | terms/, privacy/, license/ | Two emails coexist | L | H | Lands inside Plan 002 |
| AGG-28 | public/_headers | Permissions-Policy minimal | L | M | Lands inside Plan 016 |
| AGG-29 | Footer.tsx:53 | `changelog` link is no-op | L | H | Pending changelog source |
| AGG-30 | Features/About/NotDo | `transition-all` on cards | L | M | Cosmetic perf; defer |
| AGG-31 | FAQSection.tsx | reduced-motion not honored | L | H | Lands inside Plan 013 |
| AGG-32 | repo root | No CONTRIBUTING.md | L | H | Lands when CONTRIBUTING is requested |
| AGG-33 | README.md | Missing build/deploy details | L | H | Lands inside Plan 005 |
| AGG-34 | FAQSection.tsx | role=region landmark spam | L | H | Lands inside Plan 013 |
| AGG-35 | HeroSection.tsx | mockup img alt waste | L | H | Lands inside Plan 014 |

All originals are recorded with severity preserved. Exit criteria: re-open the named parent plan that subsumes each.
