import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { Cpu, Monitor, ShieldCheck, Zap } from "lucide-react";

const ABOUT_ITEMS = [
  { titleKey: "native_title", descKey: "native_desc", icon: Monitor },
  { titleKey: "ondevice_title", descKey: "ondevice_desc", icon: Cpu },
  { titleKey: "silicon_title", descKey: "silicon_desc", icon: Zap },
  { titleKey: "privacy_title", descKey: "privacy_desc", icon: ShieldCheck },
] as const;

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative border-t border-white/[0.08] py-24 sm:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(79,125,242,0.06), transparent)",
        }}
      />

      <Container>
        <FadeInView className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("heading")}
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-text-secondary">
            {t("description")}
          </p>
        </FadeInView>

        <div className="grid gap-6 sm:grid-cols-2">
          {ABOUT_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeInView key={item.titleKey} delay={i * 0.1}>
                <div className="group h-full rounded-xl border border-white/[0.08] bg-surface-secondary p-6 transition-all duration-300 hover:border-brand-start/30 hover:bg-surface-tertiary sm:p-8">
                  <div className="mb-4 inline-flex rounded-lg bg-brand-start/10 p-3 text-brand-start">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
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
