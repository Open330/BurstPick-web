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
      className="bg-[#ecebe6] py-20 text-[#171719] sm:py-28"
    >
      <Container>
        <FadeInView className="mb-12 grid gap-4 sm:grid-cols-[0.8fr_1.2fr] sm:items-end">
          <h2 className="text-3xl font-semibold sm:text-4xl">{t("heading")}</h2>
          <p className="max-w-xl text-sm leading-6 text-[#5e5f5a] sm:justify-self-end sm:text-right">
            {t("subheading")}
          </p>
        </FadeInView>

        <div className="grid gap-y-14">
          {GALLERY_ITEMS.map((item, i) => (
            <FadeInView
              key={item.titleKey}
              delay={i * 0.05}
            >
              <article>
                <Image
                  src={item.screenshot}
                  alt={`${t(item.titleKey)}: ${t(item.descKey)}`}
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1280px) 1216px, calc(100vw - 2rem)"
                  className="block h-auto w-full bg-[#111214]"
                />
                <div className="mt-4 grid gap-1 sm:grid-cols-[auto_1fr] sm:gap-6">
                  <h3 className="text-sm font-semibold">{t(item.titleKey)}</h3>
                  <p className="text-sm leading-6 text-[#5e5f5a] sm:text-right">{t(item.descKey)}</p>
                </div>
              </article>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
