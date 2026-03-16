# BurstPick — Shared Brand Context

> This file is the single source of truth for all reviewer personas.
> Every persona agent MUST read this before reviewing landing page copy.

## Team Identity

- **Founder**: Jiyong Youn (hletrd) — working photographer + macOS engineer
- **Background**: Shoots wildlife and indoor sports professionally; built BurstPick from direct pain in burst-heavy culling workflows
- **Philosophy**: "Workflow-first roadmap" — features prioritized around real culling bottlenecks, not marketing demos
- **Team composition**: Professional developers + professional photographers who live the problem daily

## The Problem We Solve

- Burst-heavy shoots (wildlife, sports, events) produce 5,000–15,000+ near-identical frames per session
- Manual culling takes 45+ minutes for 10,000 photos
- No existing tool clusters near-duplicate burst frames automatically
- Photographers fear new tools will corrupt XMP sidecars or lose ratings
- Current workflow: Photo Mechanic (ingest) → Lightroom (cull/edit) — fragmented, no ML assistance

## Product: What BurstPick Does

| Stage | Action | Outcome |
|-------|--------|---------|
| Clustering | Groups near-duplicate frames via embeddings + temporal proximity | Review sequences, not random files |
| Ranking | 20+ on-device ML models score quality, aesthetics, sharpness, noise, exposure | Best frames surface first |
| Compare | Side-by-side up to 4 frames, synchronized zoom/pan | Tiny differences become visible |
| Decisions | Keep/Reject, 5-star ratings, color labels (non-destructive) | Reversible; originals untouched |
| Export | XMP sidecar or Lightroom Classic catalog handoff | Clean integration into existing workflow |

## 5 Core Differentiators

1. **Burst-specific clustering** — no other tool groups near-duplicates automatically
2. **20+ on-device ML models** — quality, aesthetics, sharpness, noise, exposure, face detection, VLM
3. **Non-destructive workflow** — Keep/Reject decisions reversible; originals never modified
4. **100% local privacy** — all processing on-device; no photos leave the Mac
5. **Lightroom compatibility** — XMP sidecar export preserves develop settings and metadata

## Competitive Positioning

| Competitor | Their Strength | Our Angle |
|-----------|---------------|-----------|
| Lightroom Classic | Industry standard for editing | BurstPick is a **companion**, not replacement — pre-cull step |
| Photo Mechanic | Blazing ingest speed (10K+ photos/sec) | We add ML ranking + clustering PM can't do |
| Aftershoot | AI culling as LR plugin | We're standalone, transparent ranking, full manual override, local-first |
| Capture One | Tethered shooting, color science | We focus on burst-specific culling speed |

## Target Users

- **Primary**: Wildlife photographers (5K–15K frames/session, telephoto bursts)
- **Primary**: Indoor sports photographers (sideline press, 30fps, same-day deadlines)
- **Secondary**: Event photographers (weddings, conferences, 6K–8K RAW/day)

## Psychographic Profile

- Skeptical of new tools (burned before by XMP corruption)
- Loyal to Lightroom (15+ years of muscle memory)
- Price-conscious but will pay for tools that save real time
- Risk-averse (data loss = income loss)
- Technically literate (sees through marketing BS)
- Time-poor (culling during deadlines)

## Business Model

- **$89 one-time** (introductory; regular $129) — perpetual license, no subscription
- **Free tier**: Up to 500 photos per catalog for evaluation
- **Platform**: Native macOS (Swift 6.2, SwiftUI, CoreML, Metal, Neural Engine)

## Brand Voice Rules

| DO | DON'T |
|----|-------|
| Specific, verifiable claims ("20+ CoreML models") | Vague marketing ("AI-powered") |
| Workflow-first language | Feature lists without context |
| Acknowledge limitations honestly | Hide behind hype |
| Assume photographers are experts | Condescend or oversimplify |
| Emphasize safety and non-destructive ops | Promise what you can't guarantee |

## The Narrative We Want to Strengthen

> **"Built for burst photographers, by burst photographers."**
>
> We shoot. We cull. We know the pain. We built the tool we wished existed.

This is NOT marketing spin — it's the literal origin story. The landing page must make this felt, not just stated.

## Current Landing Page Copy

Reference file: `messages/en.json` in the burstpick-web repository.
Each persona should review this file as the as-is baseline.

