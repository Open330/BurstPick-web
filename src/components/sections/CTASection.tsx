"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { BASE_PATH, BRAND } from "@/lib/constants";
import { ShieldCheck, Mail, CheckCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export function CTASection() {
  const t = useTranslations("cta");
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
      </Container>
    </section>
  );
}
