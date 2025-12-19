import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { getMessages } from "../../../lib/getMessages";

import ptMessages from "../../../messages/pt.json";
import Infos from "./components/Infos";

type ProductTheme = {
  cardTop: string;     // fundo do bloco topo
  cardBottom: string;  // fundo do bloco inferior
  chip: string;        // fundo do “chip” do grão
};

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

  // ✅ tema opcional por produto
  theme?: ProductTheme;
};

type Props = {
  product: ProductItem;
};

export default function ProdutoSlug({ product }: Props) {
  const t = useTranslations("products");

  // ✅ fallback caso algum item não tenha theme
  const theme: ProductTheme = product.theme ?? {
    cardTop: "#BB5013",
    cardBottom: "#EA5B1B",
    chip: "#BB5013",
  };

  return (
    <>
      <section
        className="bgSlug"
        style={
          {
            ["--cardTop" as any]: theme.cardTop,
            ["--cardBottom" as any]: theme.cardBottom,
            ["--chip" as any]: theme.chip,
          } as React.CSSProperties
        }
      >
        <div className="max-w-[1200px] mx-auto flex flex-col h-full w-full justify-center items-center lg:flex-row">
          {/* COLUNA ESQUERDA */}
          <article className="lg:w-1/2 flex flex-col items-center">
            {/* CARD TOPO */}
            <div
              className="text-primary px-6 py-14 rounded-2xl lg:w-[445px] z-20 relative"
              style={{ backgroundColor: "var(--cardTop)" }}
            >
              {/* IMGS TOPO */}
              <div className="flex gap-4 absolute -top-20 left-10">
                <img className="w-[110px]" src="/logos/superfoods.png" alt="" />
                <img className="w-[110px]" src="/logos/transgenicos.png" alt="" />
                <img className="w-[110px]" src="/logos/110.png" alt="" />
              </div>

              <h3 className="uppercase text-5xl font-semibold mt-4">
                {product.name1}
              </h3>

              {product.name2 ? (
                <h3 className="text-2xl font-semibold mt-2">{product.name2}</h3>
              ) : null}

              <h4 className="uppercase text-sm">{product.h4slug}</h4>
            </div>

            {/* CARD BASE */}
            <div
              className="text-primary px-6 py-8 rounded-b-2xl w-[445px] relative -top-4"
              style={{ backgroundColor: "var(--cardBottom)" }}
            >
              <div className="flex gap-4">
                <div className="w-[80%]">
                  <p className="uppercase">{product.psabor}</p>
                  <p className="font-semibold text-xl uppercase">{product.desc}</p>
                </div>

                {/* CHIP GRÃO */}
                <div
                  className="w-[20%] p-2 rounded-xl"
                  style={{ backgroundColor: "var(--chip)" }}
                >
                  <img src={product.imagegrao} alt="" />
                  <p className="text-[9px] text-center uppercase">
                    Tamanho e formato apropriados
                  </p>
                </div>
              </div>

              <p className="uppercase text-sm mt-10">{product.pdisponivel}</p>
            </div>
          </article>

          {/* COLUNA DIREITA */}
          <article className="lg:w-1/2 flex flex-col items-center relative">
            <img
              className="w-full max-w-[550px] rounded-2xl"
              src={product.image}
              alt={product.name1}
            />

            <div className="absolute right-10 top-20 w-[200px] flex flex-col justify-center items-center">
              <img src="/logos/selo-reciclavel.svg" alt="" />
              <img className="w-[150px]" src="/logos/eureciclo.png" alt="" />
            </div>
          </article>
        </div>
      </section>
      <Infos product={product}  />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items = (ptMessages as any).products.items as ProductItem[];

  return {
    paths: items
      .filter((p) => typeof p.slug === "string" && p.slug.trim().length > 0)
      .map((p) => ({ params: { slug: p.slug } })),
    fallback: false, 
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = String(ctx.params?.slug || "");
  const items = (ptMessages as any).products.items as ProductItem[];
  const product = items.find((p) => p.slug === slug);

  if (!product) return { notFound: true };

  const base = await getMessages({}, "pt");

  return {
    props: {
      ...(base as any).props,
      product,
    },
  };
};
