# BurstPick Web — Implementation Plans

Plans derived from `.context/reviews/_aggregate.md`.
Cycle 1 (2026-04-26) produced plans 001..018; cycle 2 (2026-04-26) produced plans 019..021.
Cycle 3 (2026-04-26) produced no new plans; plan 014 was implemented and archived (its prerequisite plan 006 had landed in cycle 1).

Conventions:
- Each plan is one file. File name: `NNN-slug.md`.
- Statuses: `not-started`, `in-progress`, `done`, `deferred`.
- "Done" plans are moved to `plan/_archive/`.
- All commits follow Conventional Commits + gitmoji and are GPG-signed (`-S`).
- Repo policy: no Co-Authored-By, fine-grained commits, `git pull --rebase` before push.

## Index

| File | Status | Severity | Title |
|------|--------|----------|-------|
| _archive/001-remove-dead-imports.md | done | M | Remove unused `BRAND` import in legal pages |
| _archive/002-centralize-shared-urls.md | done | H | Centralize App Store / Discord / email URLs in `constants.ts` |
| _archive/003-coming-soon-button-a11y.md | done | H | Convert "Coming Soon" pseudo-buttons to real disabled buttons |
| _archive/004-mailing-list-env-url.md | done | H | Make mailing-list endpoint env-driven; validate response shape |
| _archive/005-readme-purchase-cleanup.md | done | H | Remove `/purchase` and `NEXT_PUBLIC_CHECKOUT_URL` references |
| _archive/006-fix-img-warnings.md | done | H | Resolve 10 `no-img-element` lint warnings |
| _archive/007-gtag-null-guard.md | done | H | Null-guard `textContent.substring` in inline gtag listener |
| _archive/008-jsonld-script-escape.md | done | M | Escape `</script>` in JSON-LD `dangerouslySetInnerHTML` |
| 009-canonical-and-locale-fallback.md | deferred | M | Per-page canonical + 404 on unknown locale |
| 010-i18n-parity-script.md | deferred | M | Script to assert en/ko key parity at lint time |
| 011-models-data-extraction.md | deferred | M | Extract models data from page TSX into `lib/models.ts` |
| 012-sitemap-completeness.md | deferred | M | Generate sitemap from route table; include all pages |
| 013-focus-visible-and-mobile-menu-a11y.md | deferred | M | Add focus-visible rings + mobile-menu Escape/focus-trap |
| _archive/014-logo-aspect-and-alt.md | done | M | Fix logo intrinsic dimensions + dedupe alt text |
| 015-font-weights-trim.md | deferred | M | Drop unused Plus-Jakarta weight 500 |
| 016-csp-hardening.md | deferred | H | Move inline scripts out → drop `unsafe-inline`; add report-uri |
| 017-tests-bootstrap.md | deferred | M | Either add Playwright smoke or remove `@playwright/test` |
| 018-deferred-low-priority.md | deferred | L | Cycle-1 aggregated low-severity items |
| _archive/019-drop-redundant-brand-downloadurl.md | done | L | Drop redundant `BRAND.downloadUrl` alias |
| _archive/020-fix-locale-includes-cast.md | done | L | Remove misleading locale union cast in i18n request |
| 021-deferred-cycle2-low-priority.md | deferred | L | Cycle-2 aggregated low-severity items |
