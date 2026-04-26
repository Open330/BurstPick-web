# Designer (UI/UX) — Cycle 1 (2026-04-26)

(Browser-based interactive review skipped — no headless browser available in this cycle. Findings from static read of TSX + Tailwind classes + globals.css. Selectors and exact colors cited.)

## D-1 (M, H) — "Coming Soon" Windows button has no affordance for assistive tech
- Files: `HeroSection.tsx:80`, `CTASection.tsx:131`. Rendered as `<div>` with no `role`, no `aria-disabled`, no `tabindex`. Visually it looks like a card next to the App Store anchor, but a screen reader skips it (no name, no role).
- Fix: render as `<button type="button" disabled aria-disabled="true" aria-label="Windows version coming soon">`. Same for the disabled Pro CTA in `PricingSection.tsx:78`.

## D-2 (M, H) — Focus-visible outline missing on most clickable elements
- Search across `src/components` shows only one `focus:` style (the email input). Anchors like Header nav, Footer links, CTAs in Hero/CTA section have no `focus-visible` ring.
- Risk: keyboard users cannot see where focus is on a dark background.
- Fix: add `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-start focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary` to all interactive anchors / buttons.

## D-3 (M, H) — Skip-to-content link only positions on focus, but uses `bg-brand-start` not `bg-brand-end`
- File: `LocaleLayout.tsx:171-176`. The skip link uses `bg-brand-start` (`#4F7DF2`) with white text. Contrast = 4.27:1 (WCAG AA "normal text" requires 4.5:1; large text 3:1). Marginal.
- Fix: use a higher-contrast token like `bg-text-primary text-surface-primary` (~16:1).

## D-4 (M, H) — Color contrast in muted text
- `text-text-muted` = `#8888a0` on `bg-surface-secondary` = `#12121a`. Ratio ≈ 5.7:1 — passes for normal text. OK.
- `text-text-muted` on `bg-surface-tertiary` = `#1a1a26`. Ratio ≈ 5.4:1. OK.
- `text-white/30` on `bg-[#161618]` (multiple in the hero mockup): roughly 2.0:1. Fails WCAG, but the mockup is decorative and wrapped in `aria-hidden="true"`. Acceptable.

## D-5 (M, H) — `<img alt="">` on hero mockup is empty for some images
- `HeroSection.tsx:35` — logo has alt="BurstPick" — OK.
- `HeroSection.tsx:172,263,297,398` — cluster, thumb, film, face tiles all have alt text but they live inside a parent with `aria-hidden="true"`. The alts will be ignored. Fine — but the alts add to HTML weight pointlessly.
- Fix: set `alt=""` on those decorative images (still inside aria-hidden).

## D-6 (M, H) — Logo `<img>` aspect ratio mismatch
- All four logo `<img>` instances are declared `width={645} height={618}` but rendered with class `h-8 w-8` or `h-24 w-24` (square). The intrinsic aspect ratio (1.0437:1) does not match the rendered 1:1 box. This causes a slight CLS-on-load jitter and squished logo.
- Fix: use `width={32} height={32}` (or whatever the rendered size is) so the aspect ratio is honored, or use `aspect-square object-contain` plus the original ratio.

## D-7 (M, M) — Mobile menu has no focus trap, no Escape handler
- File: `Header.tsx:80-114`. Open mobile menu, hit Escape: nothing happens. Tab leaves the menu and goes to body content underneath. No focus restoration to the toggle.
- Fix: add `onKeyDown` Escape handler that closes the menu and refocuses the toggle button.

## D-8 (M, H) — Header logo has no accessible name when image fails
- `<img alt="BurstPick">` plus a sibling `<span>BurstPick</span>` inside the same anchor. SR users hear "BurstPick BurstPick" twice.
- Fix: `alt=""` on the image (purely decorative since the text is right next to it).

## D-9 (M, M) — Headings outside semantic order on legal pages
- `terms`, `privacy`, `license` use `h1` then `h2`s — good. But `support` page also has h1 + h2. OK.

## D-10 (M, M) — FAQ accordion: no `<dl>/<dt>/<dd>` semantics
- `FAQSection.tsx`. Uses `button` with `aria-expanded` + `aria-controls`. Good. But each panel uses `role="region"` with `aria-labelledby`. Some screen readers will announce regions as landmarks — having 10 regions on the FAQ may be noisy.
- Fix: switch role to `region` only on opened panels, or use `role="group"` to reduce landmark spam.

## D-11 (L, H) — `prefers-reduced-motion` not honored in FAQ chevron and accordion
- `FAQSection.tsx:38,53` use motion components without `useReducedMotion()`.
- Fix: gate the rotate/animate on `prefersReducedMotion`.

## D-12 (M, H) — Responsive breakpoints leave hero mockup un-displayed at narrow widths
- `HeroSection.tsx:133` grid is `grid-cols-1 md:grid-cols-[200px_1fr_200px]`. Below `md`, only the center column shows (left/right are `hidden md:block`). The center column shows toolbar→preview→thumbgrid→filmstrip — fine. But the toolbar's "Wildlife Session 2026" text is centered with `mx-auto`; on narrow widths it sits right next to the traffic lights. Verify visually.

## D-13 (L, M) — Korean line-breaks: `keep-all` is right but `wbr` may be needed
- `globals.css:24-27` sets `word-break: keep-all`. Good for Korean. But long English brand names like "BurstPick" inside Korean copy may overflow without `<wbr>` hints. Manually inspect long Korean strings.

## D-14 (L, M) — Pricing `disabled` Pro CTA looks identical to enabled CTA
- `PricingSection.tsx:78` has `cursor-default` but the same border/background/text styles as the active hero buttons. Color contrast vs. cursor change is the only signal of "you can't click this." Add a visible disabled state.
