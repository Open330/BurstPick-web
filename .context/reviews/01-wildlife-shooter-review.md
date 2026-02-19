# BurstPick Landing Page Review
**Reviewer**: Marcus (Wildlife Photographer)  
**Date**: February 18, 2026

---

## Executive Summary

This landing page **gets it**. It reads like someone who has actually stared at 500 near-identical eagle frames at 11 PM, trying to find the one where the eye is tack-sharp. The copy avoids the usual SaaS marketing traps and speaks directly to burst photographers. The workflow positioning is clear, the safety guarantees are front-and-center, and the specificity about ML models and RAW support signals that the makers understand the technical depth we care about.

**Overall Verdict**: This lands. I'd download it.

**Score**: 8.5/10

---

## Section-by-Section Review

### Metadata (Title & Description)

**Gut reaction**: Strong. The title immediately signals "built by photographers" and the description cuts through the noise with concrete numbers (10,000+ frames) and specific pain points (culling by hand).

**What works**:
- "Built by photographers who shoot 10,000+ frames per session" — This is the hook. You're telling me you understand the scale of my problem.
- "on-device AI" — Privacy-first positioning. This matters to me.
- "clusters your burst sequences" — Not "organizes your photos." You're using burst-specific language.
- "You make the final call" — Acknowledges that I'm the decision-maker, not the algorithm.

**What doesn't**:
- "AI-Powered" in the title is a bit generic, but it's balanced by the "Built by Photographers" part, so it doesn't feel like marketing BS.

**Missing**:
- Could mention "non-destructive" in the meta description, but that's a minor point.

**"By photographers" score**: 5/5 — This reads like someone who has lived the problem.

**Suggested rewrite**: Already strong. No changes needed.

---

### Hero Section

**Gut reaction**: This is exactly what I need to hear. The hero doesn't oversell; it explains the problem and the solution in the order I care about.

**What works**:
- "We shoot 10,000+ frames per session and got tired of culling by hand" — Immediate credibility. You're not a SaaS company; you're a photographer who built a tool.
- "clusters your burst sequences, ranks them by sharpness, exposure, and composition" — Specific. Not "AI magic." You're telling me exactly what the models score.
- "You make the final call" — Repeated from metadata, and it's the right message. I don't trust tools that claim to make decisions for me.
- "Download for macOS" — Clear CTA. No friction.

**What doesn't**:
- Nothing. This section is solid.

**Missing**:
- Could mention "non-destructive" or "XMP-safe" here, but the FAQ covers it, so it's not critical.

**"By photographers" score**: 5/5 — This is the voice of someone who has lived the pain.

**Suggested rewrite**: No changes needed.

---

### Showcase Section ("Built by Photographers, for Photographers")

**Gut reaction**: Good positioning, but the stat cards feel a bit generic. The description is strong, but the visual hierarchy could emphasize safety more.

**What works**:
- "wildlife action sequences, indoor sports at 30fps, event coverage with thousands of frames" — You're naming my use cases. This tells me you're not trying to be everything to everyone.
- "daily grind" — Photographer language. You get it.
- "Sharpness · Exposure · Composition" — Specific scoring criteria. Not "AI-powered quality."
- "26+ RAW Formats" — This matters. I shoot Sony, and I need to know you support ARW.
- "100% Local App" — Privacy-first. Good.

**What doesn't**:
- "Multi-model scoring" is vague. The FAQ clarifies it's "20+ models," but the showcase should say that.
- The stat cards feel a bit like feature bullets. They're not wrong, but they're not as compelling as the description above them.

**Missing**:
- "Non-destructive workflow" should be a stat card. This is a trust signal, not a feature.
- "XMP-safe" or "Lightroom-compatible" could be highlighted here instead of buried in the FAQ.

**"By photographers" score**: 4/5 — The description is great, but the stat cards feel like they were written by a product manager.

**Suggested rewrite**:
```
stat_models: "20+ ML Models"
stat_models_desc: "Sharpness, exposure, composition, noise, face quality — all configurable"

stat_safety: "Non-Destructive"
stat_safety_desc: "Keep/Reject decisions reversible. Originals never touched."

stat_privacy: "100% Local"
stat_privacy_desc: "All processing on your Mac. No photos ever leave."
```

---

### Story Section ("From Thousands to Your Top Candidates")

**Gut reaction**: This is the "before/after" that actually resonates. The "before" describes my nightmare, and the "after" describes my dream.

**What works**:
- "Hundreds of near-identical burst shots filling your screen — where do you even start?" — This is my 11 PM moment. You nailed it.
- "Your top candidates ranked by sharpness, exposure, and composition — ready for your review" — This is what I want. Not "the best shot," but "the top candidates for me to review."

**What doesn't**:
- Nothing. This section is perfect.

**Missing**:
- Could mention "in seconds, not hours" to emphasize speed, but the heading already covers it.

**"By photographers" score**: 5/5 — This is the voice of someone who has lived the pain.

**Suggested rewrite**: No changes needed.

---

### Features Section

**Gut reaction**: Comprehensive and specific. This is where the technical depth shows. The features are listed in a logical order (clustering → scoring → comparison → workflow → integration → speed).

**What works**:
- "Intelligent Clustering" — Burst-specific. Not "photo organization."
- "20+ ML models analyze sharpness, exposure, noise, aesthetics, and face quality" — Specific. Not "AI-powered."
- "Non-Destructive Workflow" — This is a feature, not a limitation. Good framing.
- "Lightroom Integration" — XMP sidecar export is the right move. You're not trying to replace Lightroom.
- "Keyboard-Driven Workflow" — K to keep, R to reject. This is Photo Mechanic language. You understand my muscle memory.
- "26+ RAW formats" — Comprehensive support. I trust this.

**What doesn't**:
- "Face Detection & Grouping" is useful, but it's not as critical for wildlife photographers as it is for event photographers. It's fine to include, but it's not a primary pain point for me.
- "Side-by-Side Compare" is good, but the description could emphasize "synchronized zoom" more — that's the feature that matters when comparing tiny differences in wing position.

**Missing**:
- "Reversible decisions" could be emphasized more. This is a trust signal.
- "Configurable ML weights" is mentioned in the FAQ but not in the features. This is important for photographers who want to tune the ranking.

**"By photographers" score**: 4/5 — The features are solid, but the descriptions feel a bit like a feature list. The keyboard shortcuts section is the exception — that's photographer language.

**Suggested rewrite**:
```
clustering_desc: "Automatically groups burst sequences using image embeddings and temporal proximity. Compare the 5 best frames, not all 500."

compare_desc: "Compare up to 4 photos with synchronized zoom and pan. Spot the 1-pixel difference in wing position that matters."

workflow_desc: "Keep/Reject decisions, star ratings, and color labels with autosave. Change your mind anytime — nothing is ever deleted."
```

---

### Gallery Section

**Gut reaction**: This section is functional but feels a bit generic. The descriptions are technical, not photographer-focused.

**What works**:
- "NavigationSplitView with clusters sidebar, detail view, and filmstrip" — This is the right UI pattern for burst culling.
- "Burst sequences automatically grouped by visual similarity" — Specific to burst workflows.
- "20+ models score each photo with configurable weights" — Configurable weights is important. This signals that I have control.
- "Side-by-side comparison with synchronized zoom" — This is the feature that matters.

**What doesn't**:
- "A streamlined interface designed for speed and accuracy" is generic. Every app claims this.
- The descriptions are too technical. They read like they were written for developers, not photographers.

**Missing**:
- A description of what the ranking looks like. Do I see the scores? Can I see why a photo was ranked high?
- A description of the keyboard shortcuts in action.

**"By photographers" score**: 2/5 — This section feels like it was written by a product manager, not a photographer.

**Suggested rewrite**:
```
subheading: "Built for speed. Designed for photographers who cull thousands of frames a day."

main_ui_desc: "Clusters on the left, your top candidates ranked by score on the right. Keyboard shortcuts for every action."

clustering_desc: "500 near-identical frames become 5 clusters. You review the best from each, not the whole pile."

scoring_desc: "Each photo gets a score. You see why — sharpness at the eye AF point, exposure, composition. Adjust the weights to match your style."

compare_desc: "Zoom and pan in sync across 4 frames. Spot the 1-pixel difference that makes the shot."

persons_desc: "Faces grouped by person across your entire shoot. Merge clusters with drag-and-drop. Useful for event work."
```

---

### FAQ Section

**Gut reaction**: This is where the landing page really shines. Every question is the question I would ask. The answers are specific, honest, and address my fears directly.

**What works**:
- "Will it delete my photos?" — This is my #1 fear. The answer is clear: "Never."
- "Does it work with Lightroom?" — This is critical. The answer explains the integration clearly.
- "How does BurstPick fit into my workflow?" — This is the question I need answered. The answer is perfect: "Ingest with Photo Mechanic, pre-cull with BurstPick, edit in Lightroom."
- "Who built BurstPick?" — This is the "by photographers" signal. The answer is credible.
- "How is this different from Aftershoot?" — You're addressing the competitor directly. This is honest and specific.
- "20+ models covering image quality, aesthetics, similarity embeddings, face recognition, VLM assessment, and image classification. All hot-swappable via the settings panel." — This is the level of specificity I need. You're not hiding behind vague "AI" claims.

**What doesn't**:
- "BurstPick is free during the beta. After launch, it will be a one-time purchase — no subscription, no recurring fees." — This is good, but it could emphasize the price more. $89 one-time is a huge selling point compared to $12/month subscriptions.
- "Export creates hard links to save disk space — your originals stay untouched." — This is a nice detail, but it might confuse photographers who don't know what hard links are.

**Missing**:
- "Can I adjust the ML weights?" — This is implied in the gallery section, but it should be explicit in the FAQ.
- "What if I disagree with the ranking?" — This is a fear I have. Can I override the ranking? Can I manually reorder?
- "How fast is the culling process?" — I want to know if this will actually save me time. "45+ minutes for 10,000 photos" is the pain point; what's the BurstPick time?

**"By photographers" score**: 5/5 — This section is written by someone who has lived the fears and questions of burst photographers.

**Suggested rewrite**:
```
q11: "Can I adjust the ML model weights?"
a11: "Yes. In the settings panel, you can adjust the weight of each scoring criterion — sharpness, exposure, composition, noise, etc. Build your own ranking algorithm."

q12: "What if I disagree with the ranking?"
a12: "You're in control. Manually reorder, override scores, or ignore the ranking entirely. The ML is a suggestion, not a decision."

q13: "How much time does this actually save?"
a13: "On a typical 10,000-frame shoot, manual culling takes 45+ minutes. BurstPick clusters and ranks in 2-3 minutes, leaving you to review the top candidates. Most photographers report 60-70% faster culling."
```

---

### CTA Section ("Get back to shooting, not sorting")

**Gut reaction**: Strong. The headline is the right message. The copy reinforces the key differentiators (one-time purchase, no subscription, no cloud, local processing).

**What works**:
- "Get back to shooting, not sorting" — This is the emotional hook. It's not about the tool; it's about getting back to what I love.
- "We built BurstPick because we were spending more time culling than shooting" — Credibility. You're solving your own problem.
- "One-time purchase. No subscription. No cloud. Your photos never leave your Mac." — These are the four things I care about most.
- "macOS 14+ · Apple Silicon & Intel · Zero dependencies" — Specific system requirements. No surprises.
- "100% local processing. No photos leave your device — ever." — Repeated from earlier, but it's worth repeating.

**What doesn't**:
- Nothing. This section is solid.

**Missing**:
- The price. $89 one-time is a huge selling point. Why not mention it here?

**"By photographers" score**: 5/5 — This is the voice of someone who has lived the pain.

**Suggested rewrite**:
```
description: "We built BurstPick because we were spending more time culling than shooting. One-time purchase ($89). No subscription. No cloud. Your photos never leave your Mac."
```

---

### Footer

**Gut reaction**: Functional and professional. The tagline is strong, and the tech stack is transparent.

**What works**:
- "Burst photo culling, built by photographers who shoot 10K+ frames a day." — Consistent messaging.
- "Native macOS app built with Swift, SwiftUI, Vision, and CoreML." — Transparent about the tech. This signals quality and performance.
- Clear navigation to features, docs, support, and legal pages.

**What doesn't**:
- Nothing. This section is solid.

**Missing**:
- A link to the GitHub repository (if it's open-source) or a link to the source code (if it's not). Transparency builds trust.
- A link to the changelog. I want to see what's been fixed and improved.

**"By photographers" score**: 4/5 — The tagline is great, but the footer feels a bit generic.

**Suggested rewrite**: No major changes needed. Consider adding a GitHub link if the project is open-source.

---

## Overall Assessment

### What This Landing Page Does Right

1. **Speaks my language** — The copy is written by someone who has stared at 500 near-identical eagle frames. It's not generic SaaS marketing.

2. **Addresses my fears directly** — XMP safety, non-destructive workflow, local processing, Lightroom compatibility. These are the things I care about, and they're front-and-center.

3. **Positions the product correctly** — "Companion, not replacement." This is the right positioning. I'm not replacing Photo Mechanic or Lightroom; I'm filling a gap between them.

4. **Specific, not vague** — "20+ ML models" instead of "AI-powered." "Sharpness, exposure, composition" instead of "quality." This signals that the makers understand the technical depth I care about.

5. **Honest about limitations** — The Aftershoot comparison is direct and fair. You're not claiming to be better at everything; you're claiming to be better at burst-specific culling.

6. **Emphasizes speed and workflow** — The hero, story, and CTA all focus on getting back to shooting, not sorting. This is the right emotional hook.

### What Could Be Improved

1. **Gallery section feels generic** — The descriptions are too technical. They should be written for photographers, not developers.

2. **Price not mentioned on landing page** — $89 one-time is a huge selling point. Why hide it?

3. **Missing FAQ questions** — "Can I adjust ML weights?" "What if I disagree with the ranking?" "How much time does this actually save?" These are questions I would ask.

4. **Showcase stat cards could emphasize safety more** — "Non-Destructive" should be a stat card, not buried in the features.

5. **"Configurable weights" is mentioned in FAQ but not in features** — This is a key differentiator. It should be more prominent.

### Verdict

This landing page **gets it**. It's written by someone who has lived the problem, and it speaks directly to burst photographers. The copy avoids the usual SaaS marketing traps, the workflow positioning is clear, and the safety guarantees are front-and-center.

I would download this. I would try it. I would probably buy it.

**Final Score: 8.5/10**

**Recommendation**: Ship it. The only improvements are minor tweaks to the gallery section and adding the price to the CTA. The core message is strong, and the copy will resonate with your target audience.

---

## Detailed Scoring Breakdown

| Aspect | Score | Notes |
|--------|-------|-------|
| **Pain recognition** | 9/10 | Nails the burst culling nightmare. "Hundreds of near-identical frames" is exactly my problem. |
| **Workflow fit** | 9/10 | "Photo Mechanic → BurstPick → Lightroom" is crystal clear. This is the right positioning. |
| **Trust signals** | 9/10 | Non-destructive, XMP-safe, local processing, Lightroom compatibility. All front-and-center. |
| **Specificity** | 8/10 | "20+ ML models," "26+ RAW formats," "Sharpness, exposure, composition." Good. Could mention price and speed metrics. |
| **Photographer voice** | 8/10 | Hero, story, and FAQ are great. Gallery section feels a bit generic. |
| **"By photographers" signal** | 9/10 | "We shoot 10,000+ frames per session" is credible. The FAQ about who built it reinforces this. |
| **Emotional resonance** | 9/10 | "Get back to shooting, not sorting" is the right hook. |
| **Clarity & navigation** | 8/10 | Clear CTAs, good section flow. Could be slightly more prominent about price. |
| **Competitive positioning** | 9/10 | The Aftershoot comparison is honest and specific. |
| **Overall landing page quality** | 8.5/10 | Strong copy, clear positioning, photographer-first approach. Minor tweaks needed. |

---

**Review completed by Marcus**  
**Professional wildlife photographer, 42, Montana**  
**200+ shoot days per year, 8,000–12,000 frames per outing**
