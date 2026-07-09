import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { GALLERY_ITEMS } from "@/lib/constants";

export function GallerySection() {
  const t = useTranslations("gallery");

  return (
    <section
      id="screenshots"
      className="border-t border-white/[0.08] bg-surface-secondary py-24 sm:py-32"
    >
      <Container>
        <FadeInView className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{t("heading")}</h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">{t("subheading")}</p>
        </FadeInView>

        <div className="grid gap-8 md:grid-cols-3">
          {GALLERY_ITEMS.map((item, i) => (
            <FadeInView key={item.titleKey} delay={i * 0.1}>
              <div>
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-surface-primary shadow-xl shadow-black/20">
                <Image
                  src={item.screenshot}
                  alt={`${t(item.titleKey)}: ${t(item.descKey)}`}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 33vw, calc(100vw - 2rem)"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10" />
              </div>
              <h3 className="mb-1 text-sm font-semibold">{t(item.titleKey)}</h3>
              <p className="text-xs text-text-secondary sm:text-sm">{t(item.descKey)}</p>
            </div>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
