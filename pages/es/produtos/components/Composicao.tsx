"use client";

import React, { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

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

  infosTabs?: {
    composicao?: { label?: string; text?: string };
    enriquecimento?: { label?: string; text?: string };
    garantia?: { label?: string; text?: string };
  };
};

type Props = {
  product: ProductItem;
};

type TabKey = "composicao" | "enriquecimento" | "garantia";

export default function Infos({ product }: Props) {
  const t = useTranslations("");

  const tabs = useMemo(() => {
    const composicaoLabel = product?.infosTabs?.composicao?.label || "Composição Básica";
    const enriquecimentoLabel = product?.infosTabs?.enriquecimento?.label || "Enriquecimento";
    const garantiaLabel = product?.infosTabs?.garantia?.label || "Níveis de Garantia";

    return [
      { key: "composicao" as const, label: composicaoLabel },
      { key: "enriquecimento" as const, label: enriquecimentoLabel },
      { key: "garantia" as const, label: garantiaLabel },
    ];
  }, [product]);

  const content = useMemo<Record<TabKey, string>>(
    () => ({
      composicao: product?.infosTabs?.composicao?.text || "Exemplo 1, Exemplo 2, Exemplo 3",
      enriquecimento:
        product?.infosTabs?.enriquecimento?.text || "Exemplo 1, Exemplo 2, Exemplo 3",
      garantia: product?.infosTabs?.garantia?.text || "Exemplo 1, Exemplo 2, Exemplo 3",
    }),
    [product]
  );

  // ✅ Aba inicial: a primeira que tiver texto, senão "composicao"
  const initialTab: TabKey = (() => {
    if (product?.infosTabs?.composicao?.text) return "composicao";
    if (product?.infosTabs?.enriquecimento?.text) return "enriquecimento";
    if (product?.infosTabs?.garantia?.text) return "garantia";
    return "composicao";
  })();

  const [active, setActive] = useState<TabKey>(initialTab);

  // ✅ Se não tiver infosTabs no produto, você pode ocultar o componente inteiro
  if (!product?.infosTabs) return null;

  return (
    <>
      <section className="py-20">
        <div className="maxW">
          {/* Abas */}
          <div className="border-b border-black/20">
            <div className="grid grid-cols-3">
              {tabs.map((tab) => {
                const isActive = active === tab.key;

                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActive(tab.key)}
                    className={[
                      "relative py-4 text-center cursor-pointer",
                      "text-sm md:text-base",
                      "transition-colors",
                      isActive ? "text-VerdeP" : "text-black/70 hover:text-black",
                      "outline-none",
                    ].join(" ")}
                    aria-selected={isActive}
                    role="tab"
                  >
                    {tab.label}

                    {/* Linha ativa */}
                    <span
                      className={[
                        "absolute left-0 right-0 -bottom-[1px] h-[2px] bg-VerdeP",
                        "transition-opacity",
                        isActive ? "opacity-100" : "opacity-0",
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Conteúdo */}
          <div className="pt-10">
            <p className="text-black/90 leading-relaxed text-base md:text-lg">
              {content[active]}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
