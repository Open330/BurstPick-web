# Plan 021 — Cycle 2 deferred low-priority bundle

**Severity:** Low · **Status:** deferred · **Source:** see per-row citations

| ID | File | Issue | Original severity | Original confidence | Reason for deferral | Exit criterion |
|----|------|-------|-------------------|---------------------|---------------------|----------------|
| AGG2-3 | Header/Footer/Hero/CTA | Inline `${BASE_PATH}/...` duplicated 14×; `sitePath()` unused | L | H | Pure refactor; subsumed by plan 011/A-7 reorg. | Re-open when `sitePath()` migration plan is scheduled. |
| AGG2-4 | Header.tsx, Footer.tsx | Internal nav uses raw `<a>` instead of `Link` | L | M | Pre-launch site, static export tolerates `<a>`. | Re-open when adding a new locale or first SPA-like sub-route. |
| AGG2-5 | HeroSection.tsx | Hero mockup ships ~22 `next/image` instances | L | M | Cosmetic perf; needs measurement first. | Re-open when LCP impact is measured >100ms regression. |

All originals recorded with severity preserved. Exit criteria specified per row.

Repo-policy compliance check (CLAUDE.md):
- All deferred items are Low severity; none security/correctness/data-loss.
- All eventual fixes will continue to honor: GPG-signed commits, Conventional Commits + gitmoji, no `--no-verify`, no force-push.
