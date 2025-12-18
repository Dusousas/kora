"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function Main() {
  const t = useTranslations("main");

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
              <a
                className="bg-white rounded-2xl text-Laranja p-2 font-medium lg:mt-2 lg:px-6 lg:py-2 lg:text-lg"
                href=""
              >
                {t("buttonmain")}
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
