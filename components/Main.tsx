"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

// helpers (mesmo padrão já usado em outros componentes)
function getLocaleFromPath(asPath: string): "pt" | "en" | "es" {
  const first = asPath.split("?")[0].split("#")[0].split("/")[1];
  if (first === "en" || first === "es" || first === "pt") return first;
  return "pt";
}

function withLocale(locale: string, path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${p}`;
}

export default function Main() {
  const t = useTranslations("main");
  const router = useRouter();
  const locale = getLocaleFromPath(router.asPath);

  return (
    <>
      <section className="bgMain">
        <div className="maxW flex flex-col h-full lg:justify-center">
          <article className="flex flex-col pt-30 gap-4 w-[65%] lg:pt-0 lg:w-[30%]">
            <h2 className="text-Laranja font-medium uppercase text-3xl lg:text-6xl">
              {t("title")}
            </h2>
            <p className="text-white text-[16px] lg:mt-2 lg:text-[25px] text-left">
              {t("description")}
            </p>

            <div className="flex">
              <Link
                href={withLocale(locale, "/produtos")}
                className="bg-white rounded-2xl text-Laranja p-2 font-medium lg:mt-2 lg:px-6 lg:py-2 lg:text-lg transition hover:opacity-90"
              >
                {t("buttonmain")}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
