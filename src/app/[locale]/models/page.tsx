import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";

type Model = {
  name: string;
  id: string;
  params: string;
  input: string;
  license: string;
  download: string;
  memory: string;
  description: string;
  bundled?: boolean;
};

const CATEGORIES: {
  key: string;
  models: Model[];
}[] = [
  {
    key: "imageQuality",
    models: [
      {
        name: "Heuristic (Laplacian + Luma)",
        id: "heuristic",
        params: "0",
        input: "4096px",
        license: "Built-in",
        download: "None",
        memory: "0 MB",
        description:
          "Instant scoring using Accelerate vDSP/vImage. Measures sharpness, exposure, noise, and eye closure. Cannot judge composition or semantic quality. Best for fast initial culling passes.",
        bundled: true,
      },
      {
        name: "TOPIQ NR",
        id: "topiq-nr",
        params: "45.2M",
        input: "224px",
        license: "Apache 2.0",
        download: "83 MB",
        memory: "100 MB",
        description:
          "No-reference IQA using ResNet50 backbone. Good general-purpose technical quality scores. Good balanced option for quality assessment.",
      },
      {
        name: "MUSIQ (KonIQ)",
        id: "musiq-koniq",
        params: "27M",
        input: "224px",
        license: "Apache 2.0",
        download: "50 MB",
        memory: "110 MB",
        description:
          "Multi-scale transformer trained on KonIQ-10k real-world distortions. Strong on natural photos with better perceptual alignment than TOPIQ.",
      },
      {
        name: "MANIQA",
        id: "maniqa",
        params: "135.7M",
        input: "224px",
        license: "Apache 2.0",
        download: "248 MB",
        memory: "140 MB",
        description:
          "NTIRE 2022 IQA Challenge winner. Multi-dimension attention captures fine perceptual differences. Most accurate but largest in category.",
      },
      {
        name: "NIMA (MobileNet)",
        id: "nima-mobilenet",
        params: "4.2M",
        input: "224px",
        license: "Apache 2.0",
        download: "14 MB",
        memory: "20 MB",
        description:
          "Neural Image Assessment trained on AVA (250K aesthetic ratings). Outputs 10-class probability distribution. Compact MobileNet backbone \u2014 fastest aesthetic quality model.",
      },
    ],
  },
  {
    key: "aestheticScore",
    models: [
      {
        name: "LAION Aesthetic v1",
        id: "laion-aesthetic-v1",
        params: "513",
        input: "CLIP",
        license: "MIT",
        download: "Bundled",
        memory: "340 MB",
        description:
          "Lightweight linear probe on CLIP embeddings \u2014 near-zero overhead if CLIP is loaded. Trained on LAION aesthetic ratings. Good default aesthetic scorer.",
        bundled: true,
      },
      {
        name: "ViT-B/16 Aesthetic",
        id: "vit-aesthetic",
        params: "86M",
        input: "224px",
        license: "Apache 2.0",
        download: "156 MB",
        memory: "350 MB",
        description:
          "Standalone ViT-B/16 fine-tuned on AVA dataset (250K human aesthetic ratings). More nuanced aesthetic judgment than LAION probe. Independent of CLIP.",
      },
    ],
  },
  {
    key: "imageEmbedding",
    models: [
      {
        name: "Apple Vision FeaturePrint",
        id: "vision-featureprint",
        params: "System",
        input: "1024px",
        license: "Apple",
        download: "None",
        memory: "System",
        description:
          "Built into macOS \u2014 zero download, instant availability. Good general-purpose scene similarity. Best for speed-first workflows.",
        bundled: true,
      },
      {
        name: "DINOv2 ViT-S/14",
        id: "dinov2-vits14",
        params: "22.1M",
        input: "224px",
        license: "Apache 2.0",
        download: "40 MB",
        memory: "88 MB",
        description:
          "State-of-the-art self-supervised features (Meta, LVD-142M). Excellent visual similarity and scene structure. Recommended balanced choice.",
      },
      {
        name: "CLIP ViT-B/32",
        id: "clip-vitb32",
        params: "86M",
        input: "224px",
        license: "MIT / Apache 2.0",
        download: "161 MB",
        memory: "340 MB",
        description:
          "Rich semantic understanding from multimodal training. Groups photos by content meaning. Required by LAION Aesthetic scorer. Best for diverse libraries.",
      },
    ],
  },
  {
    key: "faceEmbedding",
    models: [
      {
        name: "EdgeFace-XS",
        id: "edgeface-xs",
        params: "1.77M",
        input: "112px",
        license: "Apache 2.0",
        download: "4 MB",
        memory: "8 MB",
        description:
          "Fastest option \u2014 lightweight 4 MB download. Good face grouping for most photos (LFW 99.73%). Best when speed is the priority.",
      },
      {
        name: "EdgeFace-S",
        id: "edgeface-s",
        params: "3.65M",
        input: "112px",
        license: "Apache 2.0",
        download: "7 MB",
        memory: "16 MB",
        description:
          "Good balance of speed and accuracy (LFW 99.82%, IJB-B 94.38%). Small download. Handles varied lighting well. Recommended balanced choice.",
      },
      {
        name: "AdaFace IR-18",
        id: "adaface-ir18",
        params: "24M",
        input: "112px",
        license: "MIT",
        download: "Bundled",
        memory: "48 MB",
        description:
          "Strong on low-quality and challenging face crops via adaptive margin (CVPR 2022). LFW 99.82%. Good mid-tier choice.",
        bundled: true,
      },
      {
        name: "AdaFace IR-50",
        id: "adaface-ir50",
        params: "44M",
        input: "112px",
        license: "MIT",
        download: "80 MB",
        memory: "90 MB",
        description:
          "Top-tier accuracy (LFW 99.82%, IJB-B 95.67%). Excels on difficult poses and low-quality crops. Best when face grouping precision is critical.",
      },
      {
        name: "AuraFace v1",
        id: "auraface-v1",
        params: "65M",
        input: "112px",
        license: "Apache 2.0",
        download: "119 MB",
        memory: "125 MB",
        description:
          "Large ResNet-100 backbone with permissive Apache 2.0 license. Choose mainly for licensing requirements.",
      },
      {
        name: "GhostFaceNets",
        id: "ghostface-nets",
        params: "~2M",
        input: "112px",
        license: "Apache 2.0",
        download: "2 MB",
        memory: "10 MB",
        description:
          "SOTA 2025 lightweight face recognition model. High performance with minimal computational overhead.",
      },
    ],
  },
  {
    key: "vlmAssessment",
    models: [
      {
        name: "Heuristic Estimate",
        id: "vlm-placeholder",
        params: "0",
        input: "512px",
        license: "Built-in",
        download: "None",
        memory: "0 MB",
        description:
          "Built-in fallback using heuristic image analysis (sharpness, exposure, noise, faces). No download required. Replace with a real VLM for improved results.",
        bundled: true,
      },
      {
        name: "SmolVLM2 256M",
        id: "smolvlm2-256m",
        params: "256M",
        input: "384px",
        license: "Apache 2.0",
        download: "465 MB",
        memory: "300 MB",
        description:
          "Smallest VLM \u2014 fastest inference with minimal memory. Basic scene recognition and quality commentary. Best for quick screening on constrained hardware.",
      },
      {
        name: "SmolVLM2 2.2B",
        id: "smolvlm2-2b",
        params: "2.2B",
        input: "384px",
        license: "Apache 2.0",
        download: "3.9 GB",
        memory: "2.2 GB",
        description:
          "Full-size SmolVLM with strong scene understanding and quality reasoning. More capable but slower than 256M variant.",
      },
      {
        name: "FastVLM 0.5B",
        id: "fastvlm-0.5b",
        params: "0.5B",
        input: "512px",
        license: "Apache 2.0",
        download: "1.4 GB",
        memory: "600 MB",
        description:
          "Apple FastVLM with FastViTHD hybrid encoder. Optimized for on-device speed with solid scene recognition. Recommended balanced VLM choice.",
      },
      {
        name: "FastVLM 1.5B",
        id: "fastvlm-1.5b",
        params: "1.5B",
        input: "768px",
        license: "Apache 2.0",
        download: "3.5 GB",
        memory: "1.5 GB",
        description:
          "Largest and most capable VLM. Deep scene understanding, nuanced quality reasoning, and detailed descriptions. Best when VLM quality is the top priority.",
      },
    ],
  },
  {
    key: "imageClassification",
    models: [
      {
        name: "Apple Vision Classification",
        id: "apple-vision-classify",
        params: "System",
        input: "Auto",
        license: "Apple",
        download: "None",
        memory: "System",
        description:
          "Built-in macOS image classification using VNClassifyImageRequest. Fast, no download required. Provides scene and object tags for filtering.",
        bundled: true,
      },
    ],
  },
];

export default async function ModelsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ModelsContent />;
}

function ModelsContent() {
  const t = useTranslations("modelsPage");

  return (
    <main className="px-0 pt-28 pb-20 sm:pt-32 sm:pb-24">
      <Container className="max-w-6xl">
        <article className="rounded-2xl border border-white/10 bg-surface-secondary/80 p-6 shadow-2xl shadow-black/30 sm:p-10">
          <header className="mb-10 border-b border-white/[0.08] pb-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("title")}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-text-secondary">
              {t("intro")}
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs">
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-400 ring-1 ring-emerald-500/20">
                {t("badgeLocal")}
              </span>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-blue-400 ring-1 ring-blue-500/20">
                {t("badgeOpen")}
              </span>
              <span className="rounded-full bg-purple-500/10 px-3 py-1 text-purple-400 ring-1 ring-purple-500/20">
                {t("badgeNeural")}
              </span>
            </div>
          </header>

          <div className="space-y-12">
            {CATEGORIES.map((category) => (
              <section key={category.key}>
                <h2 className="mb-1 text-xl font-semibold text-text-primary sm:text-2xl">
                  {t(`categories.${category.key}.title`)}
                </h2>
                <p className="mb-5 text-sm text-text-muted">
                  {t(`categories.${category.key}.description`)}
                </p>

                <div className="space-y-4">
                  {category.models.map((model) => (
                    <div
                      key={model.id}
                      className="rounded-xl border border-white/[0.06] bg-surface-primary/50 p-5 transition-colors hover:border-white/[0.12]"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-base font-semibold text-text-primary">
                            {model.name}
                          </h3>
                          {model.bundled && (
                            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 ring-1 ring-emerald-500/20">
                              {t("bundled")}
                            </span>
                          )}
                        </div>
                        <span className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-mono text-text-muted">
                          {model.license}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {model.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-text-muted">
                        <span>
                          <span className="text-text-secondary">{t("labelParams")}:</span>{" "}
                          {model.params}
                        </span>
                        <span>
                          <span className="text-text-secondary">{t("labelInput")}:</span>{" "}
                          {model.input}
                        </span>
                        <span>
                          <span className="text-text-secondary">{t("labelDownload")}:</span>{" "}
                          {model.download}
                        </span>
                        <span>
                          <span className="text-text-secondary">{t("labelMemory")}:</span>{" "}
                          {model.memory}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <footer className="mt-12 border-t border-white/[0.08] pt-6">
            <p className="text-sm text-text-muted">{t("footer")}</p>
          </footer>
        </article>
      </Container>
    </main>
  );
}
