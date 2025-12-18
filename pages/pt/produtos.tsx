import React from "react";
import { useTranslations } from "next-intl";
import { getMessages } from "../../lib/getMessages";
import Link from "next/link";

type ProductItem = {
  slug: string;
  image: string;
  name1: string;
  name2?: string;
  desc: string;
  kg?: string;
};

export default function Produtos() {
  const t = useTranslations("products");
  const items = (t.raw("items") as ProductItem[]) || [];

  return (
    <>
      <section className="bgProducts py-20">
        <div className="maxW">
          <article className="lg:w-1/2">
            <h2 className="text-white font-medium uppercase text-3xl lg:text-6xl">
              {t("title")}
            </h2>
          </article>
        </div>
      </section>

      <section className="bg-[#FFFDF0] py-20">
        <div className="maxW">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 justify-center">
            {items.map((p, idx) => (
              <div
                key={idx}
                className="flex flex-col text-center items-center "
              >
                <img
                  className="w-[280px] sm:w-[320px] lg:w-[360px]"
                  src={p.image}
                  alt={p.name1}
                />

                <h3 className="font-semibold text-VerdeP text-lg">{p.name1}</h3>
                {p.name2 ? (
                  <h3 className="font-semibold text-VerdeP text-lg">
                    {p.name2}
                  </h3>
                ) : null}

                <p className="text-black/80">{p.desc}</p>
                {p.kg ? (
                  <p className="font-medium text-black text-sm">{p.kg}</p>
                ) : null}

                <div className="flex mt-4">
                  <Link
                    href={`/pt/produtos/${p.slug}`}
                    className="bg-VerdeP text-white px-6 py-2 rounded-2xl"
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return getMessages({}, "pt");
}
