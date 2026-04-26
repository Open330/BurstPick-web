# BurstPick Web — Implementation Plans

Plans derived from `.context/reviews/_aggregate.md` (cycle 1, 2026-04-26).

Conventions:
- Each plan is one file. File name: `NNN-slug.md`.
- Statuses: `not-started`, `in-progress`, `done`, `deferred`.
- "Done" plans are moved to `plan/_archive/`.
- All commits follow Conventional Commits + gitmoji and are GPG-signed (`-S`).
- Repo policy: no Co-Authored-By, fine-grained commits, `git pull --rebase` before push.

## Index

| File | Status | Severity | Title |
|------|--------|----------|-------|
| 001-remove-dead-imports.md | not-started | M | Remove unused `BRAND` import in legal pages |
| 002-centralize-shared-urls.md | not-started | H | Centralize App Store / Discord / email URLs in `constants.ts` |
| 003-coming-soon-button-a11y.md | not-started | H | Convert "Coming Soon" pseudo-buttons to real disabled buttons |
| 004-mailing-list-env-url.md | not-started | H | Make mailing-list endpoint env-driven; validate response shape |
| 005-readme-purchase-cleanup.md | not-started | H | Remove `/purchase` and `NEXT_PUBLIC_CHECKOUT_URL` references |
| 006-fix-img-warnings.md | not-started | H | Resolve 10 `no-img-element` lint warnings |
| 007-gtag-null-guard.md | not-started | H | Null-guard `textContent.substring` in inline gtag listener |
| 008-jsonld-script-escape.md | not-started | M | Escape `</script>` in JSON-LD `dangerouslySetInnerHTML` |
| 009-canonical-and-locale-fallback.md | deferred | M | Per-page canonical + 404 on unknown locale |
| 010-i18n-parity-script.md | deferred | M | Script to assert en/ko key parity at lint time |
| 011-models-data-extraction.md | deferred | M | Extract models data from page TSX into `lib/models.ts` |
| 012-sitemap-completeness.md | deferred | M | Generate sitemap from route table; include all pages |
| 013-focus-visible-and-mobile-menu-a11y.md | deferred | M | Add focus-visible rings + mobile-menu Escape/focus-trap |
| 014-logo-aspect-and-alt.md | deferred | M | Fix logo intrinsic dimensions + dedupe alt text |
| 015-font-weights-trim.md | deferred | M | Drop unused Plus-Jakarta weight 500 |
| 016-csp-hardening.md | deferred | H | Move inline scripts out → drop `unsafe-inline`; add report-uri |
| 017-tests-bootstrap.md | deferred | M | Either add Playwright smoke or remove `@playwright/test` |
| 018-deferred-low-priority.md | deferred | L | Aggregated low-severity items |
