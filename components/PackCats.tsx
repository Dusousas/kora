import React from "react";
import { useTranslations } from "next-intl";

export default function PackCats() {
  const t = useTranslations("packcats");

  return (
    <>
      <section className="bg-Azul py-10">
        <div className="maxW flex items-center justify-center gap-20">
          <article className="lg:w-1/2">
            <h1 className="text-white font-medium uppercase text-4xl">
              {t("title")} <br />
              <span className="text-white"> {t("title1")}</span>
            </h1>
            <p className="text-white mt-4 text-lg">{t("description")}</p>
            <div className="flex mt-4">
              <a
                className="bg-white px-12 py-2 rounded-2xl text-lg text-Azul font-medium mt-2"
                href=""
              >
                {t("buttoncat")}
              </a>
            </div>
          </article>
          <article className="lg:w-1/2">
            <img className="rounded-2xl" src="/pack/packcat.png" alt="" />
          </article>
        </div>
      </section>
    </>
  );
}
