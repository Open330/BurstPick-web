# Plan 007 — Null-guard inline gtag listener

**Severity:** High · **Status:** done · **Source:** AGG-8 (code-reviewer CR-8, debugger DB-1, tracer TR-2)

## Progress
- 2026-04-26: extracted `var label = l && l.textContent ? ... : ''` so that a missing span or null text node no longer throws inside the gtag click listener.

## Files
- `src/app/[locale]/layout.tsx:158-166`

## Problem
The inline `gtag-init` script does:
```js
var l = f.querySelector('span');
gtag('event', 'faq_toggle', { event_label: l ? l.textContent.substring(0, 50) : '' });
```
But `l.textContent` can be `null` if the element has no text node (rare but possible). And the chevron is wrapped in `motion.span`, so `f.querySelector('span')` may return the chevron span instead of the question span.

## Steps
1. Replace with: `var l = f.querySelector('span'); var label = l && l.textContent ? l.textContent.substring(0, 50) : '';`
2. Be explicit: target the question span via class or by skipping spans whose text is empty.

## Done when
- Snippet handles null `l` and null `textContent`.

## Commit
- `fix(analytics): null-guard FAQ event label extraction` 🐛
