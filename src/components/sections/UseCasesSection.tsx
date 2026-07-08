import { Trophy, Mountain, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeInView } from "@/components/motion/FadeInView";
import { Container } from "@/components/ui/Container";

const USE_CASES = [
  { key: "sports", icon: Trophy },
  { key: "wildlife", icon: Mountain },
  { key: "events", icon: UsersRound },
] as const;

export function UseCasesSection() {
  const t = useTranslations("useCases");

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

        <div className="grid gap-6 md:grid-cols-3">
          {USE_CASES.map(({ key, icon: Icon }, index) => (
            <FadeInView key={key} delay={index * 0.08}>
              <article className="h-full rounded-xl border border-white/[0.08] bg-surface-secondary p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gold-start/10 p-2.5 text-gold-start">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 text-base font-semibold">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {t(`${key}.body`)}
                </p>
              </article>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
