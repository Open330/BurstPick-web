# Plan 005 — Remove `/purchase` and `NEXT_PUBLIC_CHECKOUT_URL` references

**Severity:** High · **Status:** not-started · **Source:** AGG-3 (document-specialist DS-1, DS-2)

## Files
- `README.md`
- `.env.example`

## Problem
- README describes a `purchase/` page in the project structure tree, but the directory does not exist.
- README documents `NEXT_PUBLIC_CHECKOUT_URL`, which is not referenced anywhere in `src/`.
- `.env.example` declares the same env var.

## Steps
1. Update README's "Project Structure" tree to match the actual filesystem (no `purchase/`, add `models/`, `support/`).
2. Drop the `NEXT_PUBLIC_CHECKOUT_URL` paragraph.
3. Drop the env var from `.env.example`.
4. Optionally add the new `NEXT_PUBLIC_API_BASE_URL` once Plan 004 lands.

## Done when
- `grep -r "purchase" README.md` returns nothing relevant.
- `grep -r "NEXT_PUBLIC_CHECKOUT_URL" .` returns nothing.

## Commit
- `docs(readme): drop stale purchase page and CHECKOUT_URL references` 📝
