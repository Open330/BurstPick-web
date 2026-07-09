"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { API_BASE_URL, APP_STORE_URL } from "@/lib/constants";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = "idle" | "loading" | "success" | "error";

export function CTASection() {
  const t = useTranslations("cta");
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setErrorMessage(t("invalidEmail"));
      setFormState("error");
      return;
    }

    setFormState("loading");
    setErrorMessage("");

    try {
      const res = await fetch(
        `${API_BASE_URL}/api/mailing-list/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmed, source: "landing" }),
        }
      );

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        if (data?.error?.toLowerCase().includes("invalid email")) {
          setErrorMessage(t("invalidEmail"));
        } else {
          setErrorMessage(t("errorMessage"));
        }
        setFormState("error");
        return;
      }

      // Treat as success only when the server confirms it. Tolerate
      // common shapes (success: true, subscribed: true, or the
      // submitted email echoed back).
      const ok =
        data === null ||
        data?.success === true ||
        data?.subscribed === true ||
        typeof data?.email === "string";
      if (!ok) {
        setErrorMessage(t("errorMessage"));
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
    <section id="download" className="bg-[#d9d8d2] py-20 text-[#151517] sm:py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeInView>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
              {t("heading")}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-[#5c5d58]">
              {t("description")}
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-md bg-[#151517] px-5 text-white transition-colors hover:bg-black"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-sm font-semibold">Mac App Store</span>
            </a>
            <p className="mt-5 text-sm text-[#6b6c66]">{t("requirements")}</p>
          </FadeInView>

          <FadeInView delay={0.05}>
            <div className="border-t border-black/20 pt-6">
              <h3 className="text-lg font-semibold">{t("notify_heading")}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5c5d58]">{t("notify_description")}</p>
              <div className="mt-6" aria-live="polite" aria-atomic="true">
                {formState === "success" ? (
                  <div className="inline-flex min-h-12 items-center gap-2 rounded-md border border-[#2f6b46]/30 bg-[#e5f1e8] px-4 text-sm font-medium text-[#245437]">
                    <CheckCircle size={18} />
                    {t("successMessage")}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                    <div className="relative flex-1">
                      <Mail size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#72736e]" />
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
                        className="min-h-12 w-full rounded-md border border-black/20 bg-white px-4 pl-11 text-base text-[#151517] placeholder:text-[#85867f] focus:border-black focus:outline-none"
                        disabled={formState === "loading"}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#151517] px-5 text-sm font-semibold text-white transition-colors hover:bg-black disabled:opacity-50"
                    >
                      {formState === "loading" ? (
                        <>
                          <Loader2 size={17} className="animate-spin" />
                          {t("subscribing")}
                        </>
                      ) : (
                        t("subscribe")
                      )}
                    </button>
                  </form>
                )}
                {formState === "error" && errorMessage && (
                  <p className="mt-3 text-sm text-[#9d2d2d]" role="alert">{errorMessage}</p>
                )}
              </div>
              <p className="mt-4 text-xs leading-5 text-[#6b6c66]">{t("privacy")}</p>
            </div>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
