# BurstPick Landing Page Claim Audit

**Reviewer:** David (Technical Photographer & Camera Tech Reviewer)  
**Date:** 2026-02-18  
**Affiliation:** NFL sideline photographer for Getty Images, 85K YouTube subscribers (camera tech reviews)

---

## Executive Summary

I've reviewed every factual claim on the BurstPick landing page against the BS Detector Checklist. The copy is **significantly more credible than typical photography software marketing**, but it has three critical gaps where vague claims undermine otherwise solid technical positioning.

**Overall Credibility Score: 3.5/5** — Mostly credible, but key claims need specificity to earn my trust.

---

## Claim Audit: Hero Section

| Claim | Verdict | Issue | Suggested Fix |
|-------|---------|-------|---------------|
| "AI-powered burst photo culling" | ⚠️ Vague | "AI-powered" is the most overused term in photo software. Aftershoot, Lightroom, and Capture One all say this. What makes BurstPick's AI different? | "On-device ML scoring using 20+ CoreML models (sharpness, exposure, noise, aesthetics, face quality)" |
| "clusters your burst sequences" | ✅ Credible | Specific action. Clustering is a real technical operation. | Keep as-is. |
| "ranks them by sharpness, exposure, and composition" | ⚠️ Vague | HOW? Laplacian sharpness? MTF? Exposure histogram analysis? Composition by what metric—rule of thirds detection? Face position? | "Ranks by laplacian sharpness, exposure histogram analysis, and face/subject positioning" |
| "surfaces your best candidates" | ⚠️ Vague | "Best" by whose definition? The ML models? Can I override? Is this a suggestion or a decision? | "Surfaces top-ranked candidates based on ML scoring — you make the final call" |
| "You make the final call" | ✅ Credible | Honest acknowledgment of user control. This is good. | Keep as-is. |

---

## Claim Audit: Showcase Section

| Claim | Verdict | Issue | Suggested Fix |
|-------|---------|-------|---------------|
| "We know the burst workflow because we live it" | ✅ Credible | Specific context: wildlife, sports at 30fps, events. This feels authentic. | Keep as-is. |
| "wildlife action sequences, indoor sports at 30fps, event coverage" | ✅ Credible | Real use cases. Shows domain knowledge. | Keep as-is. |
| "Multi-model scoring" | ⚠️ Vague | Says "Sharpness · Exposure · Composition" but the FAQ says "20+ models." Which is it? 3 or 20? | Clarify: "20+ ML models including sharpness, exposure, composition, noise, aesthetics, face quality, VLM assessment" |
| "26+ RAW Formats" | ✅ Credible | Specific number. FAQ lists examples (ARW, CR2, CR3, NEF, DNG, ORF, RW2, RAF). | Keep as-is. |
| "100% Local App" | ⚠️ Vague | Does the app phone home AT ALL? License validation? Crash reporting? Telemetry? "100% local" is a strong claim that needs clarification. | "100% local processing — no photos or metadata leave your Mac. License validation is offline." |

---

## Claim Audit: Story Section

| Claim | Verdict | Issue | Suggested Fix |
|-------|---------|-------|---------------|
| "Every shoot produces hundreds of near-identical frames" | ✅ Credible | True for burst shooters. Accurate problem statement. | Keep as-is. |
| "clusters, scores, and ranks them" | ✅ Credible | Three distinct operations. Clear workflow. | Keep as-is. |
| "surfacing your strongest candidates in seconds, not hours" | ⚠️ Vague | "Seconds" on what hardware? M1? M4? Intel? 1,000 photos or 10,000? This is a performance claim that needs benchmarks. | "Clusters and ranks 10,000 RAW photos in ~90 seconds on M1 (Intel: ~4 minutes)" |

---

## Claim Audit: Features Section

| Claim | Verdict | Issue | Suggested Fix |
|-------|---------|-------|---------------|
| "Automatically groups burst sequences using image embeddings and temporal proximity" | ✅ Credible | Specific technical approach. "Embeddings" + "temporal proximity" = real clustering method. | Keep as-is. |
| "No manual tagging required" | ✅ Credible | Clear benefit statement. | Keep as-is. |
| "20+ ML models analyze sharpness, exposure, noise, aesthetics, and face quality" | ✅ Credible | Specific model count + specific metrics. This is the kind of claim I trust. | Keep as-is. |
| "to rank your best shots" | ⚠️ Vague | Rank by what algorithm? Weighted average? Learned ranking? Can I see the weights? Can I adjust them? | "Rank using weighted scoring (configurable per model in settings)" |
| "Native support for 26+ RAW formats including ARW, CR2, CR3, NEF, DNG, and more" | ✅ Credible | Specific count + specific examples. This is verifiable. | Keep as-is. |
| "Plus HEIC, HEIF, AVIF, WebP, JPEG XL" | ✅ Credible | Specific format list. Good. | Keep as-is. |
| "Detects faces and groups them by person across your entire shoot" | ⚠️ Vague | By what face recognition model? Apple Vision? Custom? What's the accuracy? Can I manually merge/split groups? | "Uses Apple Vision face detection to group faces by person — manually merge or split groups with drag-and-drop" |
| "Compare up to 4 photos simultaneously with color-accurate previews and full EXIF overlay" | ✅ Credible | Specific number (4), specific features (color-accurate, EXIF). | Keep as-is. |
| "Keep/Reject decisions, star ratings, and color labels with autosave. Nothing is ever deleted." | ✅ Credible | Clear, specific, honest. Non-destructive workflow is well-explained. | Keep as-is. |
| "Export decisions as XMP sidecars or directly to Lightroom Classic catalogs" | ✅ Credible | Specific export formats. Verifiable. | Keep as-is. |
| "Full keyboard navigation: K to keep, R to reject, 1-5 for ratings, arrows to navigate" | ✅ Credible | Specific keyboard shortcuts. This is the kind of detail that shows real product knowledge. | Keep as-is. |

---

## Claim Audit: FAQ Section

| Claim | Verdict | Issue | Suggested Fix |
|-------|---------|-------|---------------|
| "26 RAW formats (ARW, CR2, CR3, NEF, DNG, ORF, RW2, RAF, and more)" | ✅ Credible | Specific list. Verifiable. | Keep as-is. |
| "plus HEIC, HEIF, JPG, PNG, TIFF, AVIF, WebP, and JPEG XL" | ✅ Credible | Comprehensive format support. | Keep as-is. |
| "free during the beta. After launch, it will be a one-time purchase — no subscription" | ✅ Credible | Clear pricing model. Honest about beta status. | Keep as-is. |
| "macOS 14 (Sonoma) or later. Works on both Apple Silicon and Intel Macs." | ✅ Credible | Specific OS version. Both architectures supported. | Keep as-is. |
| "All ML inference runs entirely on your Mac. No photos leave your device — ever." | ✅ Credible | Strong privacy claim. Specific about ML inference. | Keep as-is. |
| "20+ models covering image quality, aesthetics, similarity embeddings, face recognition, VLM assessment, and image classification. All hot-swappable via the settings panel." | ✅ Credible | Specific model categories. "Hot-swappable" is a technical detail that shows real implementation. | Keep as-is. |
| "Export creates hard links to save disk space — your originals stay untouched." | ✅ Credible | Specific technical implementation (hard links). Shows deep knowledge of macOS. | Keep as-is. |
| "Ingest with Photo Mechanic, pre-cull with BurstPick, edit in Lightroom. It slots right into the PM → LR pipeline with full XMP compatibility." | ✅ Credible | Specific workflow positioning. Realistic integration point. | Keep as-is. |
| "Aftershoot is cloud-dependent and subscription-based. BurstPick is 100% local (no photos ever leave your Mac), one-time purchase, and purpose-built for burst sequences — not general photo culling. You also see exactly why each photo was ranked." | ⚠️ Vague | "You also see exactly why each photo was ranked" — HOW? Do you show the individual model scores? A breakdown? This is a key differentiator that needs specificity. | "You see the individual ML model scores for each photo (sharpness: 8.2/10, exposure: 9.1/10, etc.)" |

---

## Claim Audit: CTA & Footer

| Claim | Verdict | Issue | Suggested Fix |
|-------|---------|-------|---------------|
| "We built BurstPick because we were spending more time culling than shooting" | ✅ Credible | Authentic origin story. Feels real. | Keep as-is. |
| "One-time purchase. No subscription. No cloud. Your photos never leave your Mac." | ✅ Credible | Clear, specific, honest. | Keep as-is. |
| "macOS 14+ · Apple Silicon & Intel · Zero dependencies" | ✅ Credible | Specific requirements. "Zero dependencies" is a bold claim but verifiable. | Keep as-is. |
| "100% local processing. No photos leave your device — ever." | ✅ Credible | Repeated privacy claim. Consistent messaging. | Keep as-is. |
| "Native macOS app built with Swift, SwiftUI, Vision, and CoreML." | ✅ Credible | Specific tech stack. Shows real implementation. | Keep as-is. |
| "Burst photo culling, built by photographers who shoot 10K+ frames a day." | ✅ Credible | Specific claim (10K+ frames). Authentic voice. | Keep as-is. |

---

## "Built by a Photographer" Signal

**Verdict: STRONG ✅**

The landing page **clearly shows technical specificity** that only a photographer would know:

- ✅ Mentions "30fps" (sports shooter detail)
- ✅ References "Photo Mechanic → Lightroom" workflow (real professional pipeline)
- ✅ Understands "near-identical burst frames" (not just "similar photos")
- ✅ Specific keyboard shortcuts (K to keep, R to reject — workflow optimization)
- ✅ Hard links for disk space (macOS-specific optimization)
- ✅ XMP sidecar compatibility (professional metadata standard)
- ✅ Acknowledges "non-destructive" as a core value (photographers fear data loss)

**However**, the vague claims about "AI-powered" and "best candidates" undermine this credibility. A photographer would say "sharpness-ranked" not "AI-powered."

---

## Overall Credibility Score: 3.5/5

**[3] Mostly credible, few weak spots**

### Why Not Higher?

1. **"AI-powered" is lazy marketing.** Every photo app says this. It's the #1 red flag in my BS detector.
2. **"Best candidates" is undefined.** Best by what metric? Who decides?
3. **Performance claims lack benchmarks.** "Seconds, not hours" — on what hardware? With how many photos?
4. **"You see exactly why each photo was ranked" is vague.** Show me the model scores or don't claim transparency.

### Why Not Lower?

1. **Specific technical claims are solid.** 20+ models, 26+ RAW formats, hard links, XMP compatibility — these are verifiable.
2. **Workflow positioning is authentic.** Photo Mechanic → BurstPick → Lightroom is a real pipeline.
3. **Privacy claims are consistent and specific.** "No photos leave your Mac" is repeated and credible.
4. **Keyboard shortcuts show real product knowledge.** K to keep, R to reject — this is how photographers think.

---

## Top 3 Credibility Gaps

### 1. **"AI-powered" is meaningless without specificity**
   - **The Problem:** Every photo app claims "AI-powered." Aftershoot, Lightroom, Capture One, even basic phone apps.
   - **Why It Matters:** Photographers are burned out on vague AI claims. We've tested 50+ "AI photo" apps since 2022 and roasted most of them.
   - **The Fix:** Replace "AI-powered" with "20+ CoreML models scoring sharpness, exposure, noise, aesthetics, and face quality."
   - **Impact:** This single change would move credibility from 3.5 → 4.2.

### 2. **"Surfaces your best candidates" — best by what criteria?**
   - **The Problem:** "Best" is subjective. Best for what? Sharpness? Composition? Face quality? A weighted average?
   - **Why It Matters:** I need to know if the app's definition of "best" matches mine. Can I override it? Can I adjust weights?
   - **The Fix:** "Surfaces top-ranked candidates based on ML scoring (configurable weights per model). You make the final call."
   - **Impact:** This clarifies user control and transparency.

### 3. **"You also see exactly why each photo was ranked" — show the scores**
   - **The Problem:** This is a key differentiator vs. Aftershoot, but it's vague. Do you show individual model scores? A breakdown? A visualization?
   - **Why It Matters:** Transparency is a core value for photographers. If you claim transparency, prove it with specifics.
   - **The Fix:** "View individual ML model scores for each photo (e.g., Sharpness: 8.2/10, Exposure: 9.1/10, Face Quality: 7.5/10)."
   - **Impact:** This would be a major trust-builder for skeptical photographers.

---

## Bonus: What's Missing?

### Performance Benchmarks
- "Seconds, not hours" — on what hardware? M1? M4? Intel?
- "Clusters and ranks 10,000 RAW photos in ~90 seconds on M1 (Intel: ~4 minutes)" would be credible.

### Model Transparency
- You mention "20+ models" but only name 5-6 in the copy.
- List all 20 in the FAQ or a dedicated page. Photographers want to know what they're getting.

### Accuracy Metrics
- What's the face detection accuracy? (Apple Vision's is ~95% on frontal faces, lower on profiles.)
- What's the sharpness ranking accuracy? (How often does the top-ranked photo match what a photographer would pick?)

### Competitive Differentiation
- You claim "purpose-built for burst sequences" but don't explain what that means technically.
- Aftershoot also handles bursts. What's different about your clustering algorithm?

---

## Final Verdict

**Would I feature this on my channel?** Not yet. The product sounds solid, but the marketing copy needs to earn my trust with specificity. Replace "AI-powered" with actual model names. Define "best." Show the scores. Then we'll talk.

**Would I recommend it to my audience?** Yes, with caveats. The technical details are solid, the workflow positioning is authentic, and the privacy claims are credible. But I'd want to test it first and verify the performance claims.

**Credibility Grade: B+ (3.5/5)**
- Solid technical foundation
- Authentic photographer voice
- Three critical vague claims that undermine trust
- Needs specificity to move from "interesting" to "credible"

