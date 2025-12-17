"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function Main() {
  const t = useTranslations("main");

  return (
    <>
      <section className="bgMain">
        <div className="maxW flex flex-col justify-center h-full">
          <article className="flex flex-col gap-4 lg:w-[30%]">
            <h2 className="text-Laranja text-6xl font-medium uppercase">
              {t("title")}
            </h2>
            <p className="text-white text-center mt-2 text-[25px] lg:text-left">
              {t("description")}
            </p>

            <div className="flex">
              <a
                className="bg-white px-6 py-2 rounded-2xl text-lg text-Laranja font-medium mt-2"
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
