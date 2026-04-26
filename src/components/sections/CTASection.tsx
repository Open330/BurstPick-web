"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { APP_STORE_URL, BASE_PATH, BRAND, SALES } from "@/lib/constants";
import { ShieldCheck, Mail, CheckCircle, Loader2, MessageCircle } from "lucide-react";

const DISCORD_URL = SALES.discordUrl;

type FormState = "idle" | "loading" | "success" | "error";

export function CTASection() {
  const t = useTranslations("cta");
  const td = useTranslations("discord");
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@") || !trimmed.includes(".")) {
      setErrorMessage(t("invalidEmail"));
      setFormState("error");
      return;
    }

    setFormState("loading");
    setErrorMessage("");

    try {
      const res = await fetch(
        "https://api.burstpick.app/api/mailing-list/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmed, source: "landing" }),
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        if (data?.error?.toLowerCase().includes("invalid email")) {
          setErrorMessage(t("invalidEmail"));
        } else {
          setErrorMessage(t("errorMessage"));
        }
        setFormState("error");
        return;
      }

      setFormState("success");
    } catch {
      setErrorMessage(t("errorMessage"));
      setFormState("error");
    }
  };

  return (
    <section
      id="download"
      className="relative overflow-hidden border-t border-white/[0.08] py-24 sm:py-32"
    >
      {/* Atmospheric background — welcome_hero asset */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/cta-bg.avif"
          alt=""
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-primary via-surface-primary/80 to-surface-primary/60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(79,125,242,0.1), transparent)",
          }}
        />
      </div>

      <Container className="text-center">
        <FadeInView>
          <img
            src={`${BASE_PATH}/logo.avif`}
            alt={BRAND.name}
            width={645}
            height={618}
            className="mx-auto mb-8 h-20 w-20 object-contain drop-shadow-2xl"
          />
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("heading")}
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="mx-auto mb-8 max-w-xl text-lg text-text-secondary">
            {t("description")}
          </p>
        </FadeInView>

        <FadeInView delay={0.25}>
          <div className="mb-4 flex flex-col items-center gap-2">
            <p className="text-base font-semibold text-text-primary">{t("notify_heading")}</p>
            <p className="mx-auto max-w-sm text-sm text-text-secondary">{t("notify_description")}</p>
          </div>
          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* macOS — App Store link */}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-text-secondary transition-colors hover:border-white/40 hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] font-medium leading-none">{t("download_mac")}</div>
                <div className="text-xl font-semibold leading-tight">Mac App Store</div>
              </div>
            </a>
            {/* Windows — Coming Soon */}
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 text-text-muted cursor-default">
              <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="currentColor">
                <path d="M3 5.548l7.066-.966v6.822H3V5.548zm7.066 6.655v6.868L3 18.129v-5.926h7.066zm.87-7.753L21 3v8.404h-10.064V4.45zm10.064 7.1V21L10.936 19.48v-7.93H21z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] font-medium leading-none">{t("download_windows")}</div>
                <div className="text-xl font-semibold leading-tight">Windows</div>
              </div>
            </div>
          </div>
        </FadeInView>

        <FadeInView delay={0.3}>
          {formState === "success" ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-8 py-4 text-lg font-semibold text-green-400">
              <CheckCircle size={20} />
              {t("successMessage")}
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (formState === "error") {
                      setFormState("idle");
                      setErrorMessage("");
                    }
                  }}
                  placeholder={t("emailPlaceholder")}
                  className="w-full rounded-xl border border-white/20 bg-white/5 py-3.5 pl-11 pr-4 text-base text-text-primary placeholder:text-text-muted focus:border-brand-start focus:outline-none focus:ring-1 focus:ring-brand-start"
                  disabled={formState === "loading"}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={formState === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-start to-brand-end px-6 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    {t("subscribing")}
                  </>
                ) : (
                  t("subscribe")
                )}
              </button>
            </form>
          )}
          {formState === "error" && errorMessage && (
            <p className="mt-3 text-sm text-red-400">{errorMessage}</p>
          )}
        </FadeInView>

        <FadeInView delay={0.4}>
          <p className="mt-6 text-sm text-text-muted">{t("requirements")}</p>
        </FadeInView>

        <FadeInView delay={0.5}>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-text-muted">
            <ShieldCheck size={14} className="text-green-400" />
            {t("privacy")}
          </div>
        </FadeInView>

        {/* Discord Community */}
        <FadeInView delay={0.6}>
          <div className="mx-auto mt-16 max-w-md rounded-xl border border-white/[0.08] bg-surface-secondary/50 p-6 text-center backdrop-blur-sm">
            <div className="mx-auto mb-3 inline-flex rounded-lg bg-[#5865F2]/10 p-3 text-[#5865F2]">
              <MessageCircle size={24} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{td("title")}</h3>
            <p className="mb-4 text-sm text-text-secondary">{td("description")}</p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#5865F2] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle size={16} />
              {td("button")}
            </a>
          </div>
        </FadeInView>
      </Container>
    </section>
  );
}
