# BurstPick Landing Page Copy Review

**Reviewer**: Soo-jin, Brand Strategist  
**Date**: 2026-02-18  
**Repository**: burstpick-web

---

## Overall Narrative Arc

**Score**: 3/5 — Coherent, but "by photographers" is underutilized

**Current arc**: 
The page tells a functional story: "We're photographers who built an AI tool to solve burst culling." It establishes the problem (thousands of near-identical frames), the solution (clustering + ranking), and the outcome (faster culling). The narrative is *competent* — it flows from pain to relief. But it's missing the emotional weight that makes "by photographers" *felt* rather than *stated*.

**Ideal arc**: 
A photographer lands on the page and within 3 seconds thinks: "Oh, someone who actually shoots built this." Not because the copy says "we're photographers" — but because every section *smells* like it was written by someone who's lived the 45-minute culling grind, who knows the fear of XMP corruption, who understands why Lightroom muscle memory matters. The page should feel like a conversation with a peer, not a pitch from a tool vendor.

**Gap**: 
- The "by photographers" identity is *stated* in Hero and Showcase, but not *woven* through Features, Story, and FAQ
- Feature descriptions read like spec sheets ("Automatically groups burst sequences using image embeddings") rather than workflow insights ("No more scrolling through 200 identical frames to find the one where the eagle's wing is sharp")
- The Story section is outcome-focused but lacks the *before* emotional resonance — it should make photographers feel seen, not just informed
- FAQ answers are professional but sterile; they should sound like a photographer answering a peer's question
- No human presence (founder name, team photo, origin story detail) anywhere on the page

---

## Section-by-Section "By Photographers" Audit

### Hero
**Status**: Present, but surface-level  
**Tagline**: "AI-powered burst photo culling, built by photographers"  
**Assessment**: The phrase "built by photographers" is there, but it's buried in a feature-first tagline. "AI-powered" leads, which signals commodity positioning. A photographer reading this thinks "another AI tool" before they think "people like me made this."

**Specific note**: The description ("We shoot 10,000+ frames per session and got tired of culling by hand") is the strongest moment on the page. It's specific, personal, and immediately signals insider knowledge. But it's buried in the second line. The tagline should lead with identity, not features.

---

### Showcase
**Status**: Present, but performative  
**Heading**: "Built by Photographers, for Photographers"  
**Assessment**: This section *says* the right thing but doesn't *show* it. "We know the burst workflow because we live it" is a claim, not evidence. The stats that follow (Sharpness · Exposure · Composition, 26+ RAW Formats, 100% Local App) are features, not proof of photographer-ness.

**Specific note**: A photographer reading this wants to know: "Do these people understand that I'm shooting at 30fps on a sideline with 2 minutes to deliver? Do they know why I'm terrified of XMP corruption?" The copy doesn't answer these questions. It lists what the tool does, not why the team built it.

---

### Story
**Status**: Weak  
**Heading**: "From Thousands to Your Top Candidates"  
**Assessment**: This section is purely functional. It describes the transformation (thousands → top candidates) but doesn't *feel* like it was written by someone who's lived the pain. The "Before" description ("Hundreds of near-identical burst shots filling your screen — where do you even start?") is generic. A photographer would say something like: "You're staring at 300 frames from a 2-second burst. The light was perfect. The eagle's wing was sharp in maybe 5 of them. You have to find them."

**Specific note**: The "After" is outcome-focused but lacks the relief/trust moment. It should reinforce that the photographer is still in control ("Your top candidates ranked by sharpness, exposure, and composition — *you* make the final call") — which it does, but it's buried in the description, not emphasized.

---

### Features
**Status**: Absent  
**Heading**: "Why BurstPick?"  
**Assessment**: This is the biggest miss. Feature descriptions are written in product-speak, not photographer-speak. Examples:

- "Automatically groups burst sequences using image embeddings and temporal proximity" → Should be: "Burst sequences automatically grouped so you review clusters, not chaos"
- "20+ ML models analyze sharpness, exposure, noise, aesthetics, and face quality" → Should be: "We trained models on thousands of professional shots to spot what makes a frame keeper-worthy"
- "Compare up to 4 photos simultaneously with color-accurate previews and full EXIF overlay" → Should be: "Side-by-side comparison so you can see the 1% difference in wing position or eye sharpness"

**Specific note**: None of these descriptions reflect the *workflow knowledge* of a photographer. They're spec sheets. A photographer reading this doesn't think "oh, someone who shoots built this" — they think "engineers wrote this."

---

### Gallery
**Status**: Weak  
**Heading**: "See BurstPick in Action"  
**Assessment**: The descriptions are functional but sterile. "NavigationSplitView with clusters sidebar, detail view, and filmstrip" is UI terminology, not photographer language. "Burst sequences automatically grouped by visual similarity" is accurate but doesn't convey the *relief* of not having to manually tag 300 frames.

**Specific note**: This section should make photographers *feel* the speed and control. Instead, it reads like a feature tour.

---

### FAQ
**Status**: Weak  
**Heading**: "Frequently Asked Questions"  
**Assessment**: The FAQ is the second-strongest section (after Hero description). Q8 ("Who built BurstPick?") and Q9 ("How does BurstPick fit into my workflow?") are excellent — they sound like a photographer answering a peer. But most answers are professional/corporate, not peer-to-peer.

**Specific note**: 
- A8 is strong: "BurstPick is built by a team of photographers and macOS engineers who shoot 10,000+ frames per session. We built it because we needed it — existing tools didn't understand burst-specific workflows." This is the voice the entire page should have.
- A10 (vs. Aftershoot) is excellent: "You also see exactly why each photo was ranked." This is photographer-centric (transparency, control).
- But A1 (formats), A3 (macOS version), A5 (ML models) are sterile. They should sound like a photographer answering, not a support bot.

---

### CTA
**Status**: Present, strong  
**Heading**: "Get back to shooting, not sorting"  
**Assessment**: This is the second-strongest moment on the page. "We built BurstPick because we were spending more time culling than shooting" is the origin story, and it's *felt*. The emphasis on "One-time purchase. No subscription. No cloud. Your photos never leave your Mac" is photographer-centric (trust, control, privacy).

**Specific note**: This section should be the emotional climax, and it mostly is. But it comes too late. The page should build to this moment, not arrive at it after 5 sections of feature descriptions.

---

### Footer
**Status**: Present, strong  
**Tagline**: "Burst photo culling, built by photographers who shoot 10K+ frames a day."  
**Assessment**: The footer tagline is excellent — specific, identity-forward, and memorable. "Built with Swift, SwiftUI, Vision, and CoreML" is a nice technical touch that signals craftsmanship. But there's no human presence (founder name, team photo, origin story).

**Specific note**: A single sentence about Hyeon Lee (founder, wildlife photographer, macOS engineer) would transform this section from "company info" to "people you can trust."

---

## Top 3 Messaging Priorities

### 1. **Rewrite Features section to reflect photographer workflow knowledge, not spec sheets**
   - **Impact**: Features is the longest section. If it reads like a photographer wrote it, the entire page shifts.
   - **Current problem**: "Automatically groups burst sequences using image embeddings and temporal proximity" → "No more scrolling through 200 identical frames"
   - **Why it matters**: This is where photographers decide if you understand their pain. If Features reads like engineering specs, they'll assume you don't.

### 2. **Strengthen the "Before" emotional moment in Story section**
   - **Impact**: The Story section is where photographers should feel *seen*. Currently, it's just functional.
   - **Current problem**: "Hundreds of near-identical burst shots filling your screen — where do you even start?" is generic.
   - **Ideal**: "You're staring at 300 frames from a 2-second burst. The light was perfect. The eagle's wing was sharp in maybe 5 of them. You have to find them. Manually."
   - **Why it matters**: Emotional recognition ("that's my pain") is the bridge between awareness and trust.

### 3. **Add human presence to the page (founder story, team context)**
   - **Impact**: Photographers are skeptical of new tools. A founder story (Hyeon Lee: wildlife photographer + macOS engineer) transforms "company" into "people like me."
   - **Current problem**: No founder name, no team photo, no origin story detail anywhere on the page.
   - **Ideal**: A single paragraph in Showcase or a new "Our Story" section: "Hyeon Lee is a wildlife photographer who shoots 10,000+ frames per session. After spending 45 minutes culling a single shoot, he built BurstPick. The team includes professional photographers and macOS engineers who live this problem daily."
   - **Why it matters**: "Built by photographers" is a claim. A founder story is proof.

---

## Emotional Progression Audit

| Stage | Current | Ideal | Gap |
|-------|---------|-------|-----|
| **Awareness** | "We have a burst culling problem" | ✓ Established in Hero | ✓ Present |
| **Recognition** | "That's my pain" | Weak in Story; generic "where do you even start?" | Needs specific, visceral language |
| **Trust** | "These people get it" | Partially in FAQ (A8, A9); missing elsewhere | Needs founder story, team context, workflow knowledge in Features |
| **Action** | "I need this" | Strong in CTA ("Get back to shooting") | ✓ Present |

**Missing moment**: The page jumps from Awareness → Action without fully landing on Recognition and Trust. A photographer should feel *seen* before they feel *convinced*.

---

## Differentiation Stickiness Audit

**Question**: After reading, what ONE thing will a visitor remember?

**Current answer**: "It's an AI tool that clusters burst photos and ranks them by sharpness."

**Problem**: This is not differentiated. Aftershoot does this. Lightroom's AI does this. The page doesn't make clear why BurstPick is *different*.

**What should stick**: "Built by photographers who shoot 10,000+ frames per session. 100% local. One-time purchase. You see exactly why each photo was ranked."

**Current stickiness**: 3/5. The page mentions these differentiators (local, one-time purchase, transparency) but doesn't *emphasize* them. They're buried in Features and FAQ, not highlighted in Hero or Story.

**Ideal stickiness**: The page should make it impossible to forget that:
1. Photographers built this (not engineers)
2. It's local-first (not cloud-dependent)
3. You're in control (not the algorithm)

---

## Red Flags Observed

- ❌ **"AI-powered" leads the tagline** — This is commodity positioning. "Built by photographers" should lead.
- ❌ **Feature-first hero** — The tagline is feature-first ("AI-powered burst photo culling"). Should be identity-first or outcome-first.
- ❌ **Spec-sheet Features section** — "Automatically groups burst sequences using image embeddings and temporal proximity" is engineering language, not photographer language.
- ❌ **No human presence** — No founder name, team photo, or origin story detail anywhere on the page.
- ❌ **"Built for photographers" without "by photographers" in most sections** — The identity is stated in Hero and Showcase, but not woven through the rest of the page.
- ⚠️ **Generic SaaS patterns** — The page follows standard SaaS structure (Hero → Features → Gallery → FAQ → CTA). This is safe but forgettable.

---

## What's Working Well

- ✅ **Hero description** ("We shoot 10,000+ frames per session and got tired of culling by hand") — This is the strongest moment on the page. It's specific, personal, and immediately signals insider knowledge.
- ✅ **FAQ answers A8, A9, A10** — These sound like a photographer answering a peer. They should be the voice of the entire page.
- ✅ **CTA section** — "Get back to shooting, not sorting" is the origin story, and it's felt. The emphasis on "One-time purchase. No subscription. No cloud" is photographer-centric.
- ✅ **Footer tagline** — "Burst photo culling, built by photographers who shoot 10K+ frames a day" is specific and memorable.
- ✅ **Privacy/local-first messaging** — Consistently emphasized throughout (Hero, Showcase, CTA, FAQ). This is a real differentiator for a skeptical audience.

---

## Proposed Positioning Statement

**Current**: "AI-powered burst photo culling, built by photographers"

**Proposed**: "The burst culling tool built by photographers who shoot 10,000+ frames per session. 100% local, one-time purchase, full control — because we know the pain of manual culling and the fear of losing your originals."

**Why this works**:
- Leads with identity ("built by photographers"), not features ("AI-powered")
- Specific to the use case ("burst culling," "10,000+ frames")
- Addresses the core fear (data loss, loss of control)
- Differentiates on business model (one-time, not subscription)
- Signals trust (local, not cloud)

---

## Tagline Options

### Option 1: Identity-First
**"Burst culling, built by photographers who shoot 10K+ frames a day."**
- Leads with identity
- Specific to the use case
- Memorable (10K+ frames is a concrete detail)
- *Best for*: Photographers who are skeptical of new tools and need to know "are these people like me?"

### Option 2: Outcome-First
**"From 10,000 frames to your best shots — in minutes, not hours."**
- Leads with the outcome (time saved)
- Specific and measurable
- Emotional (relief, speed)
- *Best for*: Photographers who are time-poor and need to know "will this actually save me time?"

### Option 3: Trust-First
**"Burst culling without the fear. 100% local, one-time purchase, your photos never leave your Mac."**
- Leads with the core fear (data loss, loss of control)
- Addresses the skepticism (local, not cloud; one-time, not subscription)
- Specific and reassuring
- *Best for*: Photographers who've been burned before and need to know "is this safe?"

---

## Summary: The Gap Between Current and Ideal

The BurstPick landing page is **competent but not compelling**. It tells the right story (photographers built this, it solves burst culling) but doesn't *feel* like it was written by photographers. The page reads like a well-researched product pitch, not a conversation with a peer.

**The fix is not more copy — it's better copy.** Rewrite Features to sound like a photographer explaining their workflow. Add a founder story to Showcase. Strengthen the "Before" moment in Story. Let the voice of FAQ A8 and A9 (peer-to-peer, specific, honest) guide the entire page.

If you do this, a photographer will land on BurstPick and within 3 seconds think: "Oh, someone who actually shoots built this." That's when the page becomes truly differentiated.

---

## Recommended Next Steps

1. **Rewrite Features section** — Convert spec-sheet language to photographer-workflow language
2. **Add founder story** — 2-3 sentences about Hyeon Lee in Showcase or new "Our Story" section
3. **Strengthen Story "Before" moment** — Make it visceral, specific, and emotionally resonant
4. **Audit voice consistency** — Ensure FAQ tone (peer-to-peer, specific, honest) is reflected throughout
5. **Test with target users** — Show the revised page to 5-10 wildlife/sports photographers and ask: "Does this feel like it was built by someone like you?"

