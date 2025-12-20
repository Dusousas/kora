import React from "react";
import { useTranslations } from "next-intl";

type InfosCardDesktop = {
  img: string;
  alt?: string;
  className: string;
};

type InfosCardMobile = {
  img: string;
  alt?: string;
};

type ProductInfosCards = {
  sectionBg?: string; // ✅ novo (bg da SECTION)
  plateImage: string;
  desktop: InfosCardDesktop[];
  mobileMarquee?: InfosCardMobile[];
  speedSeconds?: number;
};

type ProductItem = {
  slug: string;
  image: string;
  name1: string;
  name2?: string;
  desc: string;
  kg?: string;

  h4slug?: string;
  psabor?: string;
  pdisponivel?: string;
  imagegrao?: string;

  infosCards?: ProductInfosCards;
};

type Props = {
  product: ProductItem;
};

export default function Infos({ product }: Props) {
  const t = useTranslations("");

  const infos = product?.infosCards;
  if (!infos) return null;

  const desktop = infos.desktop;
  if (!Array.isArray(desktop) || desktop.length === 0) return null;

  const plateImage = infos.plateImage;

  const mobileList: InfosCardMobile[] =
    infos.mobileMarquee && infos.mobileMarquee.length > 0
      ? infos.mobileMarquee
      : desktop.map((d) => ({ img: d.img, alt: d.alt }));

  const duration = Math.max(8, infos.speedSeconds ?? 18);

  // ✅ bg da section vem do JSON (fallback: Verde)
  const sectionBg = infos.sectionBg ?? "bg-VerdeP";

  return (
    <>
      <section className={`lg:py-10 ${sectionBg}`}>
        <div className="max-w-[1480px] mx-auto">
          {/* ===== MOBILE (até lg) ===== */}
          <div className="lg:hidden">
            <div className="flex items-center justify-center pt-10">
              <img
                className="max-w-[350px] w-full"
                src={plateImage}
                alt="Prato"
              />
            </div>

            <div className="overflow-hidden py-8">
              <div
                className="flex items-center gap-6 animate-slide"
                style={{ ["--marquee-duration" as any]: `${duration}s` }}
              >
                {Array(2)
                  .fill(0)
                  .map((_, idx) => (
                    <React.Fragment key={idx}>
                      {mobileList.map((item, i) => (
                        <img
                          key={`${idx}-${i}`}
                          className="h-[80px] w-auto shrink-0"
                          src={item.img}
                          alt={item.alt || `Info ${i + 1}`}
                        />
                      ))}
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>

          {/* ===== DESKTOP (lg+) ===== */}
          <div className="hidden lg:flex relative items-center justify-center py-20">
            {/* Prato */}
            <img
              className="py-10 lg:max-w-[500px]"
              src={plateImage}
              alt="Prato"
            />

            {/* Cards */}
            {desktop.map((card, idx) => {
              if (!card?.img || !card?.className) return null;

              return (
                <img
                  key={`${product.slug}-card-${idx}`}
                  className={card.className}
                  src={card.img}
                  alt={card.alt || `Card ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          width: max-content;
          animation: slide var(--marquee-duration) linear infinite;
        }
      `}</style>
    </>
  );
}
