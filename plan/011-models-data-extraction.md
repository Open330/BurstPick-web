# Plan 011 — Extract models data into `lib/models.ts` (DEFERRED)

**Severity:** Medium · **Status:** deferred · **Source:** AGG-21 (code-reviewer CR-13, architect A-4)

## Files
- `src/app/[locale]/models/page.tsx:17-299`
- New: `src/lib/models.ts`

## Problem
280 lines of static model metadata sit inside the page TSX. Not a bug — purely organizational.

## Reason for deferral
Lower-priority refactor. No correctness/security/perf impact. Move when adding the next model entry.

## Exit criterion
When the next model is added or removed, OR when the page is otherwise touched.
