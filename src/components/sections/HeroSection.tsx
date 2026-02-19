import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { FadeInView } from "@/components/motion/FadeInView";
import { BASE_PATH, BRAND } from "@/lib/constants";


export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Atmospheric background — splash_background asset */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/hero-bg.avif"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-primary/60 via-surface-primary/40 to-surface-primary" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(79,125,242,0.12), transparent), radial-gradient(ellipse 60% 40% at 70% 80%, rgba(123,79,242,0.08), transparent)",
          }}
        />
      </div>

      <Container className="flex flex-col items-center py-20 text-center">
        <FadeInView>
          <img
            src={`${BASE_PATH}/logo.avif`}
            alt={BRAND.name}
            width={645}
            height={618}
            className="mb-8 h-24 w-24 object-contain drop-shadow-2xl sm:h-28 sm:w-28"
          />
        </FadeInView>

        <FadeInView delay={0.1}>
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight drop-shadow-[0_0_40px_rgba(79,125,242,0.3)] sm:text-6xl lg:text-7xl">
            <GradientText>{BRAND.name}</GradientText>
          </h1>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="mb-6 max-w-2xl text-xl text-text-secondary sm:text-2xl">
            {t("tagline")}
          </p>
        </FadeInView>

        <FadeInView delay={0.3}>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-text-secondary">
            {t("description")}
          </p>
        </FadeInView>

        <FadeInView delay={0.4}>
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-start to-brand-end px-6 py-3 text-lg font-semibold text-white transition-opacity hover:opacity-90"
          >
            {t("cta_download")}
          </a>
        </FadeInView>

        {/* App mockup — accurate representation of actual BurstPick UI */}
        <FadeInView delay={0.5} className="mt-12 w-full max-w-5xl sm:mt-16">
          <div role="img" aria-label="BurstPick macOS app interface preview" className="overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0e] shadow-[0_20px_80px_-20px_rgba(79,125,242,0.15),0_0_40px_-10px_rgba(255,180,50,0.08)] sm:rounded-2xl">
            <div aria-hidden="true">
            {/* WindowToolbarView — 48px, matches real app */}
            <div className="flex h-10 items-center border-b border-white/[0.06] bg-[#161618] px-3 sm:px-4">
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] sm:h-3 sm:w-3" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e] sm:h-3 sm:w-3" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#28c840] sm:h-3 sm:w-3" />
              </div>
              {/* Left toolbar group — hidden on mobile */}
              <div className="ml-4 hidden items-center gap-1 sm:flex">
                <ToolbarIcon d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" title="Sidebar" active />
                <div className="mx-0.5 h-3.5 w-px bg-white/[0.06]" />
                <ToolbarIcon d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" title="Undo" />
                <ToolbarIcon d="M15 9l6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" title="Redo" />
                <div className="mx-0.5 h-3.5 w-px bg-white/[0.06]" />
                <div className="flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[8px] text-white/30 hover:bg-white/[0.04]">
                  <span>Default Profile</span>
                  <svg className="h-2 w-2 text-white/20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="m19 9-7 7-7-7" /></svg>
                </div>
              </div>
              {/* Center — catalog name */}
              <div className="mx-auto text-[9px] font-semibold text-white/50 sm:text-[10px]">
                Wildlife Session 2026
              </div>
              {/* Right toolbar group — hidden on mobile */}
              <div className="hidden items-center gap-1 sm:flex">
                <ToolbarIcon d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" title="Info Panel" active />
                <ToolbarIcon d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 19 6 18.375m-2.625 0V5.625m0 0A1.125 1.125 0 0 1 4.5 4.5h15a1.125 1.125 0 0 1 1.125 1.125m-17.25 0h17.25m0 12.75V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5" title="Filmstrip" active />
                <ToolbarIcon d="M12 18.75a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5ZM12 12.75V9m0 0h.008" title="Lights Out" />
                <ToolbarIcon d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" title="Full Screen" />
                <div className="mx-0.5 h-3.5 w-px bg-white/[0.06]" />
                <ToolbarIcon d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" title="Export" />
                <ToolbarIcon d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" title="AI Models" />
              </div>
            </div>

            {/* Main content — responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
            <div className="grid grid-cols-1 gap-0 md:grid-cols-[200px_1fr_200px]" style={{ minHeight: "240px" }}>
              {/* Left sidebar — hidden on mobile */}
              <div className="hidden border-r border-white/[0.06] bg-[#161618] md:block">
                {/* ProSegmentedControl — flat tabs with bottom indicator */}
                <div className="relative flex border-b border-white/[0.06]">
                  {["Photos", "Clusters", "People", "Tags", "Map"].map((tab, i) => (
                    <button
                      key={tab}
                      className={`relative flex-1 py-1.5 text-[8px] font-medium ${
                        i === 1 ? "text-white/90" : "text-white/35"
                      }`}
                    >
                      {tab}
                      {i === 1 && (
                        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#4F7DF2]" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Cluster list */}
                <div className="space-y-0.5 p-1.5">
                  {[
                    { name: "Cluster 1", count: 24, rec: 3, keep: 3, time: "14:23 – 14:25", active: false, img: `${BASE_PATH}/mockup/cluster-01.avif` },
                    { name: "Cluster 2", count: 18, rec: 2, keep: 2, time: "14:26 – 14:28", active: true, img: `${BASE_PATH}/mockup/cluster-02.avif` },
                    { name: "Cluster 3", count: 31, rec: 4, keep: 4, time: "14:30 – 14:33", active: false, img: `${BASE_PATH}/mockup/cluster-03.avif` },
                    { name: "Cluster 4", count: 12, rec: 2, keep: 1, time: "14:35 – 14:36", active: false, img: `${BASE_PATH}/mockup/cluster-04.avif` },
                    { name: "Cluster 5", count: 22, rec: 3, keep: 3, time: "14:38 – 14:40", active: false, img: `${BASE_PATH}/mockup/cluster-05.avif` },
                    { name: "Cluster 6", count: 8, rec: 1, keep: 1, time: "14:42 – 14:43", active: false, img: `${BASE_PATH}/mockup/cluster-06.avif` },
                    { name: "Cluster 7", count: 15, rec: 2, keep: 2, time: "14:45 – 14:47", active: false, img: `${BASE_PATH}/mockup/cluster-07.avif` },
                  ].map((cluster) => (
                    <div
                      key={cluster.name}
                      className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${
                        cluster.active
                          ? "bg-blue-500/15 ring-1 ring-blue-400/30"
                          : "hover:bg-white/[0.04]"
                      }`}
                    >
                      <img
                        src={cluster.img}
                        alt={cluster.name}
                        className={`h-9 w-12 flex-shrink-0 rounded object-cover ${
                          cluster.active ? "ring-1 ring-blue-400/40" : "opacity-60"
                        }`}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-semibold ${cluster.active ? "text-white/90" : "text-white/50"}`}>
                            {cluster.name}
                          </span>
                          <span className="rounded bg-green-500/20 px-1 py-px text-[7px] font-medium text-green-400/80">
                            Keep {cluster.keep}
                          </span>
                        </div>
                        <div className="text-[8px] text-white/30">
                          {cluster.count} photos · {cluster.rec} recommended
                        </div>
                        <div className="text-[7px] text-white/20">{cluster.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center — detail header + preview + thumbnail grid + filmstrip */}
              <div className="flex flex-col bg-[#0a0a0f]">
                {/* Detail header toolbar */}
                <div className="flex items-center justify-between border-b border-white/[0.06] px-2 py-1 sm:px-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-white/80 sm:text-[11px]">Cluster 2</span>
                    <span className="text-[9px] text-white/50">18 photos · 2 recommended</span>
                  </div>
                  <div className="hidden items-center gap-0.5 sm:flex">
                    <DetailIcon d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" title="Loupe" />
                    <DetailIcon d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" title="Histogram" />
                    <DetailIcon d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" title="Focus Peaking" />
                    <div className="mx-0.5 h-3 w-px bg-white/[0.06]" />
                    <DetailIcon d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" title="Zoom" />
                    <DetailIcon d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6a2.25 2.25 0 0 1-2.25-2.25v-1.5" title="Compare" />
                    <DetailIcon d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" title="Survey" />
                    <DetailIcon d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" title="Filter" />
                    <div className="mx-0.5 h-3 w-px bg-white/[0.06]" />
                    {/* Thumbnail size slider */}
                    <div className="flex items-center gap-1">
                      <div className="h-[3px] w-10 rounded-full bg-white/10">
                        <div className="h-full w-6 rounded-full bg-white/25" />
                      </div>
                    </div>
                    <span className="ml-1 text-[7px] text-white/20">Feb 16, 14:26 – 14:28</span>
                  </div>
                </div>

                {/* Main preview area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black md:aspect-auto md:flex-1">
                  <img
                    src={`${BASE_PATH}/mockup/main-preview.avif`}
                    alt="Selected photo preview"
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                  {/* Filename overlay */}
                  <div className="absolute right-2 bottom-1.5 rounded-md border border-white/10 bg-black/40 px-1.5 py-0.5 text-[8px] text-white/40 backdrop-blur-sm sm:right-3 sm:bottom-2 sm:px-2 sm:text-[9px]">
                    _DSC1427.ARW
                  </div>
                  {/* Pick badge */}
                  <div className="absolute left-2 top-2 flex items-center gap-1 rounded-md bg-green-500/40 px-1.5 py-0.5 text-[8px] font-semibold text-white backdrop-blur-sm sm:left-3 sm:top-3 sm:px-2 sm:text-[9px]">
                    <span>✓</span> PICK
                  </div>
                  {/* Score badge */}
                  <div className="absolute right-2 top-2 rounded-md bg-black/40 px-1.5 py-0.5 text-[8px] font-bold text-amber-300/80 backdrop-blur-sm sm:right-3 sm:top-3 sm:px-2 sm:text-[9px]">
                    92
                  </div>
                </div>

                {/* Thumbnail grid */}
                <div className="grid grid-cols-5 gap-px border-t border-white/[0.06] bg-[#0e0e12] p-1 sm:grid-cols-8 md:grid-cols-10">
                  {Array.from({ length: 10 }, (_, i) => {
                    const imgIdx = (i % 10) + 1;
                    const imgSrc = `${BASE_PATH}/mockup/film-${String(imgIdx).padStart(2, "0")}.avif`;
                    const isSelected = i === 3;
                    const isPicked = i === 3 || i === 7;
                    const isRejected = i === 1 || i === 6;
                    const stars = i === 3 ? 4 : i === 7 ? 3 : 0;
                    return (
                      <div
                        key={`thumb-${i}`}
                        className={`relative aspect-[4/3] overflow-hidden rounded-sm ${
                          isSelected ? "ring-2 ring-blue-400/80" : isRejected ? "opacity-35" : ""
                        }`}
                      >
                        <img src={imgSrc} alt={`Frame ${i + 1}`} className="h-full w-full object-cover" />
                        {/* Pick/Reject badge — top left */}
                        {isPicked && (
                          <div className="absolute left-0.5 top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-green-500 text-[6px] text-white">✓</div>
                        )}
                        {isRejected && (
                          <div className="absolute left-0.5 top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[6px] text-white">✗</div>
                        )}
                        {/* Star rating — top right */}
                        {stars > 0 && (
                          <div className="absolute right-0.5 top-0.5 text-[6px] text-yellow-400">
                            {"★".repeat(stars)}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Filmstrip — 72px height */}
                <div className="flex items-center gap-0.5 overflow-hidden border-t border-white/[0.06] bg-[#111113] px-1.5 py-1 sm:gap-1 sm:px-2 sm:py-1.5">
                  {Array.from({ length: 10 }, (_, i) => {
                    const imgIdx = (i % 10) + 1;
                    const imgSrc = `${BASE_PATH}/mockup/film-${String(imgIdx).padStart(2, "0")}.avif`;
                    const isSelected = i === 3;
                    const isRejected = i === 1 || i === 6;
                    const isPicked = i === 3 || i === 7;
                    return (
                      <div
                        key={`film-${i}`}
                        className={`relative h-8 w-11 flex-shrink-0 overflow-hidden rounded sm:h-10 sm:w-14 sm:rounded-md ${
                          isSelected ? "ring-2 ring-blue-400/80" : isRejected ? "opacity-40" : ""
                        }`}
                      >
                        <img src={imgSrc} alt={`Burst frame ${i + 1}`} className="h-full w-full object-cover" />
                        {isPicked && (
                          <div className="absolute bottom-0.5 left-0.5 h-1.5 w-1.5 rounded-full bg-green-400" />
                        )}
                        {isRejected && (
                          <div className="absolute bottom-0.5 left-0.5 h-1.5 w-1.5 rounded-full bg-red-400" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right info panel — hidden on mobile, visible on md+ */}
              <div className="hidden overflow-hidden border-l border-white/[0.06] bg-[#161618] md:block">
                <div className="space-y-2.5 p-3">
                  {/* Asset Info */}
                  <div>
                    <div className="text-[11px] font-semibold text-white/80">_DSC1427.ARW</div>
                    <div className="text-[9px] text-white/30">9504 × 6336 · 42.1 MB</div>
                    <div className="text-[9px] text-white/30">Feb 16, 2026 14:27</div>
                  </div>

                  {/* EXIF */}
                  <div className="flex flex-wrap gap-x-2 gap-y-0.5">
                    <span className="text-[9px] text-white/40">200mm</span>
                    <span className="text-[9px] text-white/20">·</span>
                    <span className="text-[9px] text-white/40">f/2.8</span>
                    <span className="text-[9px] text-white/40">1/1000</span>
                    <span className="text-[9px] text-white/40">ISO 800</span>
                  </div>
                  <div>
                    <div className="text-[8px] text-white/20">FE 70-200mm F2.8 GM OSS II</div>
                    <div className="text-[8px] text-white/20">ILCE-7RM5</div>
                  </div>

                  {/* Recommendation — Overall / NIMA / Aesthetic / VLM */}
                  <div>
                    <div className="mb-1 text-[9px] font-medium text-white/40">Recommendation</div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-white/80">Overall: 92</span>
                      <span className="text-[9px] text-orange-400">NIMA: 87</span>
                      <span className="text-[9px] text-purple-400">Aesthetic: 78</span>
                      <span className="text-[9px] text-teal-400">VLM: 85</span>
                    </div>
                  </div>

                  {/* VLM Assessment */}
                  <div>
                    <div className="mb-1 text-[9px] font-medium text-white/40">VLM Assessment</div>
                    <div className="space-y-1">
                      {[
                        { label: "Quality", value: 88, color: "from-green-500/60 to-green-400/40" },
                        { label: "Composition", value: 82, color: "from-blue-500/60 to-blue-400/40" },
                        { label: "Artistic", value: 79, color: "from-purple-500/60 to-purple-400/40" },
                        { label: "Moment", value: 91, color: "from-amber-500/60 to-amber-400/40" },
                      ].map(({ label, value, color }) => (
                        <div key={label}>
                          <div className="mb-0.5 flex items-center justify-between">
                            <span className="text-[8px] text-white/35">{label}</span>
                            <span className="text-[8px] font-medium text-white/50">{value}</span>
                          </div>
                          <div className="h-1 rounded-full bg-white/[0.06]">
                            <div className={`h-full rounded-full bg-gradient-to-r ${color}`} style={{ width: `${value}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-1 text-[8px] text-white/25">Wildlife · Bird in flight</div>
                  </div>

                  {/* Quality Signals */}
                  <div>
                    <div className="mb-1 text-[9px] font-medium text-white/40">Quality Signals</div>
                    <div className="space-y-1">
                      {[
                        { label: "Sharpness", value: 0.94 },
                        { label: "Exposure", value: 0.88 },
                        { label: "Noise", value: 0.91 },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <div className="mb-0.5 flex items-center justify-between">
                            <span className="text-[8px] text-white/35">{label}</span>
                            <span className="text-[8px] font-medium text-white/50">{value.toFixed(2)}</span>
                          </div>
                          <div className="h-1 rounded-full bg-white/[0.06]">
                            <div className="h-full rounded-full bg-gradient-to-r from-blue-500/70 to-purple-500/50" style={{ width: `${value * 100}%` }} />
                          </div>
                        </div>
                      ))}
                      <div className="text-[8px] text-white/35">
                        Face Detected · Eyes Open <span className="text-white/50">0.96</span>
                      </div>
                    </div>
                  </div>

                  {/* Face tiles */}
                  <div>
                    <div className="mb-1 text-[9px] font-medium text-white/40">Faces</div>
                    <div className="flex gap-1.5">
                      {["face-01", "face-02"].map((face) => (
                        <img key={face} src={`${BASE_PATH}/mockup/${face}.avif`} alt="Detected face" className="h-9 w-9 rounded-lg object-cover" />
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <div className="mb-1 text-[9px] font-medium text-white/40">Tags</div>
                    <div className="flex flex-wrap gap-1">
                      {["wildlife", "bird", "flight"].map((tag) => (
                        <span key={tag} className="rounded-md bg-teal-500/10 px-1.5 py-0.5 text-[8px] text-teal-300/60">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Decision controls — Pick / Reject / Unflag (matches DecisionControlsView) */}
                  <div className="flex items-center gap-1.5 pt-1">
                    <button className="flex items-center gap-1 rounded-md bg-green-500/20 px-3 py-1 text-[9px] font-semibold text-green-400 ring-1 ring-green-500/30">
                      <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Pick
                    </button>
                    <button className="flex items-center gap-1 rounded-md bg-white/[0.04] px-3 py-1 text-[9px] text-white/40 ring-1 ring-white/[0.06]">
                      <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      Reject
                    </button>
                    <button className="flex items-center gap-1 rounded-md bg-white/[0.04] px-3 py-1 text-[9px] text-white/30 ring-1 ring-white/[0.06]">
                      <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                      Unflag
                    </button>
                  </div>

                  {/* Star rating + Color labels */}
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className={`text-[11px] ${star <= 4 ? "text-yellow-400" : "text-white/15"}`}>★</span>
                    ))}
                    <div className="ml-2 flex gap-1">
                      {["bg-red-400", "bg-yellow-400", "bg-green-400", "bg-blue-400", "bg-purple-400"].map((c, i) => (
                        <div key={c} className={`h-2.5 w-2.5 rounded-full ${c} ${i === 2 ? "ring-1 ring-white/40" : "opacity-30"}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* StatusBarView — matches real macOS StatusBarView.swift */}
            <div className="flex items-center justify-between border-t border-white/[0.06] bg-[#111113] px-3 py-0.5 sm:px-4">
              {/* Left: filename + dimensions */}
              <div className="flex items-center gap-2 text-[8px] text-white/50 sm:text-[9px]">
                <span className="font-medium text-white/50">_DSC1427.ARW</span>
                <span className="hidden text-white/25 sm:inline">9504 × 6336</span>
              </div>
              {/* Center: Scores Ready badge */}
              <div className="hidden items-center gap-1 sm:flex">
                <svg className="h-2.5 w-2.5 text-green-400/70" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-[8px] font-medium text-white/35">Scores Ready</span>
              </div>
              {/* Right: stats with icons — photo/clusters/people | keeps/rejects (no unflag) */}
              <div className="flex items-center gap-2 text-[8px] text-white/50 sm:gap-2.5 sm:text-[9px]">
                <span className="flex items-center gap-0.5">
                  <svg className="h-2.5 w-2.5 text-white/25" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" /></svg>
                  66
                </span>
                <span className="flex items-center gap-0.5">
                  <svg className="h-2.5 w-2.5 text-white/25" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" /></svg>
                  7
                </span>
                <span className="hidden items-center gap-0.5 sm:flex">
                  <svg className="h-2.5 w-2.5 text-white/25" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>
                  3
                </span>
                <span className="text-white/10">|</span>
                <span className="flex items-center gap-0.5 text-green-400/70">
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                  12
                </span>
                <span className="flex items-center gap-0.5 text-red-400/50">
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                  8
                </span>
              </div>
            </div>
            </div>{/* end aria-hidden */}
          </div>
        </FadeInView>
      </Container>
    </section>
  );
}

function ToolbarIcon({ d, title, active }: { d: string; title: string; active?: boolean }) {
  return (
    <div
      className={`flex h-7 w-8 items-center justify-center rounded ${
        active ? "bg-[#4F7DF2]/25" : "hover:bg-white/[0.06]"
      }`}
      title={title}
    >
      <svg className={`h-3.5 w-3.5 ${active ? "text-white/70" : "text-white/30"}`} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </svg>
    </div>
  );
}

function DetailIcon({ d, title }: { d: string; title: string }) {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded hover:bg-white/[0.06]" title={title}>
      <svg className="h-3 w-3 text-white/25" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </svg>
    </div>
  );
}
