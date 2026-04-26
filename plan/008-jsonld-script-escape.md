# Plan 008 — Escape `</script>` in JSON-LD blobs

**Severity:** Medium · **Status:** done · **Source:** AGG-10 (security-reviewer S-5)

## Progress
- 2026-04-26: added `safeJsonLd()` helper that escapes `<`, `>`, `&`, U+2028, U+2029 in the stringified payload. All three JSON-LD blocks now go through it.

## Files
- `src/app/[locale]/layout.tsx:122-130`

## Problem
JSON-LD blocks are inserted via `dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}`. If a translator ever puts `</script>` in a FAQ string, it will close the script tag prematurely (translator self-XSS).

## Steps
1. Add a helper `safeJsonLd(obj)` that returns `JSON.stringify(obj).replace(/</g, "\\u003c")`.
2. Use it for all 3 blocks (orgJsonLd, productJsonLd, faqJsonLd).

## Done when
- Manual test: insert `</script><h1>x</h1>` into a FAQ value, build, inspect HTML — no escape.

## Commit
- `fix(seo): escape `</script>` in JSON-LD payloads` 🔒
