import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { getMessages } from "../../../lib/getMessages";

// ✅ Importa o JSON direto no build (perfeito para export estático)
import ptMessages from "../../../messages/pt.json";

type ProductItem = {
  slug: string;
  image: string;
  name1: string;
  name2?: string;
  desc: string;
  kg?: string;
};

type Props = {
  product: ProductItem;
};

export default function ProdutoSlug({ product }: Props) {
  const t = useTranslations("products");

  return (
    <section className="bg-[#FFFDF0] py-20">
      <div className="maxW grid gap-10 lg:grid-cols-2 items-start">
        <img className="w-full max-w-[520px] rounded-2xl" src={product.image} alt={product.name1} />

        <div>
          <h1 className="text-VerdeP font-semibold text-3xl">{product.name1}</h1>
          {product.name2 ? <h2 className="text-VerdeP font-medium text-xl mt-2">{product.name2}</h2> : null}

          <p className="mt-4 text-black/80 leading-relaxed">{product.desc}</p>
          {product.kg ? <p className="mt-4 font-semibold">{product.kg}</p> : null}
        </div>
      </div>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items = (ptMessages as any).products.items as ProductItem[];

  return {
    paths: items.map((p) => ({ params: { slug: p.slug } })),
    fallback: false, // ✅ obrigatório p/ next export
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = String(ctx.params?.slug || "");
  const items = (ptMessages as any).products.items as ProductItem[];
  const product = items.find((p) => p.slug === slug);

  if (!product) return { notFound: true };

  return {
    ...(await getMessages({}, "pt")),
    props: {
      ...(await (getMessages({}, "pt") as any)).props,
      product,
    },
  };
};
