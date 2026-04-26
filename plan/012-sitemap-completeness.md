# Plan 012 — Generate complete sitemap (DEFERRED)

**Severity:** Medium · **Status:** deferred · **Source:** AGG-22 (critic CR-B)

## Files
- `public/sitemap.xml`
- New: `scripts/generate-sitemap.mjs`

## Problem
Hand-written sitemap omits `/download`, `/models`, `/support` for both locales.

## Reason for deferral
SEO improvement, not a bug. Schedule alongside Plan 009 (canonical) for one cohesive SEO pass.

## Exit criterion
Next SEO pass or when search-console flags missing pages.
