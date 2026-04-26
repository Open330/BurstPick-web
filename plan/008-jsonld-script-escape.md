# Plan 008 — Escape `</script>` in JSON-LD blobs

**Severity:** Medium · **Status:** not-started · **Source:** AGG-10 (security-reviewer S-5)

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
