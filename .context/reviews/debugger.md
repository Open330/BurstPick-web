# Debugger Review — Cycle 3 (2026-04-26)

## Runtime invariants
- Locale guard returns to `defaultLocale` for unknown values — verified.
- gtag listener guards `null` `textContent` — verified.
- Mailing-list submit handles `res.json()` parse failure (`.catch(() => null)`) — verified.

## New findings
None.
