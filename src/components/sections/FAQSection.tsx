import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { FAQ_KEYS } from "@/lib/constants";

export function FAQSection() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <FadeInView>
            <h2 className="text-3xl font-semibold sm:text-4xl">{t("heading")}</h2>
          </FadeInView>

          <FadeInView delay={0.05}>
            <div className="border-t border-white/15">
              {FAQ_KEYS.map((key) => (
                <details key={key} className="group border-b border-white/15">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 py-4 text-left [&::-webkit-details-marker]:hidden">
                    <span className="text-base font-medium">{t(key)}</span>
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="max-w-2xl pb-5 pr-10 text-sm leading-6 text-text-secondary">
                    {t(key.replace("q", "a") as `a${string}`)}
                  </p>
                </details>
              ))}
            </div>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
