import React from "react";
import { useTranslations } from "next-intl";

type ProductItem = {
  slug: string;
  image: string;
  name1: string;
  name2?: string;
  desc: string;
  kg?: string;

  h4slug: string;
  psabor: string;
  pdisponivel: string;
  imagegrao: string;
};

type Props = {
  product: ProductItem;
};

export default function Infos({ product }: Props) {
  const t = useTranslations("infos");

  // Cards do marquee no mobile
  const mobileCards = [
    { img: "/produtos/infos/sodio.svg", alt: "Info 1" },
    { img: "/produtos/infos/sodio.svg", alt: "Info 2" },
    { img: "/produtos/infos/sodio.svg", alt: "Info 3" },
    { img: "/produtos/infos/sodio.svg", alt: "Info 4" },
    { img: "/produtos/infos/sodio.svg", alt: "Info 5" },
    { img: "/produtos/infos/sodio.svg", alt: "Info 6" },
    { img: "/produtos/infos/sodio.svg", alt: "Info 7" },
  ];

  return (
    <>
      <section className="py-10 bg-VerdeP">
        <div className="max-w-[1480px] mx-auto">
          {/* ===== MOBILE (até md): prato + linha contínua ===== */}
          <div className="lg:hidden">
            <div className="flex items-center justify-center pt-10">
              <img
                className=" max-w-[350px] w-full"
                src="/produtos/infos/prato.png"
                alt=""
              />
            </div>

            <div className="overflow-hidden py-8">
              <div className="flex items-center gap-6 animate-slide">
                {Array(2)
                  .fill(0)
                  .map((_, idx) => (
                    <React.Fragment key={idx}>
                      {mobileCards.map((item, i) => (
                        <img
                          key={`${idx}-${i}`}
                          className="h-[80px] w-auto shrink-0"
                          src={item.img}
                          alt={item.alt}
                        />
                      ))}
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>

          {/* ===== MD+: seu layout original (prato + cards absolutos) ===== */}
          <div className="hidden lg:flex relative items-center justify-center py-20">
            {/* IMG PRATO PRINCPAL */}
            <img
              className="py-10 lg:max-w-[500px]"
              src="/produtos/infos/prato.png"
              alt=""
            />

            {/* IMG CARDS TOP */}
            <div>
              <img
                className=" lg:w-[230px] xl:w-[280px] absolute top-0 left-0 "
                src="/produtos/infos/sodio.svg"
                alt=""
              />
              <img
                className=" lg:w-[230px] xl:w-[280px] absolute top-0 lg:left-70 xl:left-100 "
                src="/produtos/infos/sodio.svg"
                alt=""
              />
              <img
                className=" lg:w-[230px] xl:w-[280px] absolute top-0 lg:left-135 xl:left-200"
                src="/produtos/infos/sodio.svg"
                alt=""
              />
              <img
                className=" lg:w-[230px] xl:w-[280px] absolute top-0 right-0"
                src="/produtos/infos/sodio.svg"
                alt=""
              />
            </div>

            {/* IMG CARDS LEFT */}
            <div>
              <img
                className=" lg:w-[230px] xl:w-[280px] absolute top-37 left-10"
                src="/produtos/infos/sodio.svg"
                alt=""
              />
              <img
                className=" lg:w-[230px] xl:w-[280px] absolute top-75 left-0"
                src="/produtos/infos/sodio.svg"
                alt=""
              />
              <img
                className=" lg:w-[230px] xl:w-[280px] absolute bottom-37 left-20"
                src="/produtos/infos/sodio.svg"
                alt=""
              />
              <img
                className=" lg:w-[230px] xl:w-[280px] absolute bottom-0 left-40"
                src="/produtos/infos/sodio.svg"
                alt=""
              />
            </div>

            {/* IMG CARDS RIGHT */}
            <div>
              <img
                className=" lg:w-[230px] xl:w-[280px] absolute top-37 right-10"
                src="/produtos/infos/sodio.svg"
                alt=""
              />
              <img
                className=" lg:w-[230px] xl:w-[280px] absolute top-75 right-0"
                src="/produtos/infos/sodio.svg"
                alt=""
              />
              <img
                className=" lg:w-[230px] xl:w-[280px] absolute bottom-37 right-20"
                src="/produtos/infos/sodio.svg"
                alt=""
              />
              <img
                className=" lg:w-[230px] xl:w-[280px] absolute bottom-0 right-40"
                src="/produtos/infos/sodio.svg"
                alt=""
              />
            </div>

            {/* IMG CARDS BOTTOM */}
            <div>
              <img
                className="lg:w-[230px] xl:w-[280px] absolute bottom-0 lg:right-105 xl:right-150"
                src="/produtos/infos/sodio.svg"
                alt=""
              />
            </div>
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
          animation: slide 18s linear infinite;
        }
      `}</style>
    </>
  );
}
