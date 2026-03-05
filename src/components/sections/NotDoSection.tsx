import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { ImageOff, ArrowRightLeft, CloudOff } from "lucide-react";

const ITEMS = [
  { titleKey: "item1_title", descKey: "item1_desc", icon: ImageOff },
  { titleKey: "item2_title", descKey: "item2_desc", icon: ArrowRightLeft },
  { titleKey: "item3_title", descKey: "item3_desc", icon: CloudOff },
] as const;

export function NotDoSection() {
  const t = useTranslations("notDo");

  return (
    <section className="border-t border-white/[0.08] py-24 sm:py-32">
      <Container>
        <FadeInView className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            {t("subheading")}
          </p>
        </FadeInView>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeInView key={item.titleKey} delay={i * 0.1}>
                <div className="group h-full rounded-xl border border-white/[0.08] bg-surface-secondary p-6 text-center transition-all duration-300 hover:border-white/[0.15] hover:bg-surface-tertiary">
                  <div className="mx-auto mb-4 inline-flex rounded-lg bg-red-500/10 p-3 text-red-400">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2 text-base font-semibold">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {t(item.descKey)}
                  </p>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
