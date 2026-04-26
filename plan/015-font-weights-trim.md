# Plan 015 — Drop unused Plus-Jakarta weight 500 (DEFERRED)

**Severity:** Medium · **Status:** deferred · **Source:** AGG-19 (perf-reviewer P-2)

## Files
- `src/app/[locale]/layout.tsx:13-17`

## Problem
Plus-Jakarta is loaded with weights 500/600/700/800. Headings only use 600/700/800. Weight 500 is rarely used.

## Reason for deferral
Need to scan for any `font-medium` heading usage first to be sure 500 is unused. Defer to a perf pass.

## Exit criterion
Next perf pass, or when bundle analyzer flags font weight unused.
