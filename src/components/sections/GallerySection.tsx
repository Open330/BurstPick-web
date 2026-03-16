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
      </Container>

      <div className="scrollbar-none flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory sm:gap-6 sm:px-6 lg:px-8">
        <div className="shrink-0 w-0 sm:w-[calc((100vw-1280px)/2+1rem)]" />
        {GALLERY_ITEMS.map((item, i) => (
          <FadeInView
            key={item.titleKey}
            direction="right"
            delay={i * 0.1}
            className="shrink-0 snap-center"
          >
            <div className="w-[calc(100vw-3rem)] sm:w-[480px]">
              <div className="mb-3 overflow-hidden rounded-lg border border-white/10 bg-surface-primary shadow-xl shadow-black/20 sm:mb-4 sm:rounded-xl">
                <Image
                  src={item.screenshot}
                  alt={t(item.titleKey)}
                  width={960}
                  height={540}
                  className="w-full"
                />
              </div>
              <h3 className="mb-1 text-sm font-semibold">{t(item.titleKey)}</h3>
              <p className="text-xs text-text-secondary sm:text-sm">{t(item.descKey)}</p>
            </div>
          </FadeInView>
        ))}
        <div className="shrink-0 w-4" />
      </div>
    </section>
  );
}
