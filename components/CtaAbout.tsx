import React from "react";
import { useTranslations } from "next-intl";

export default function CtaAbout() {
  const t = useTranslations("ctaabout");

  return (
    <>
      <section className="py-20 bgAbout">
        <div className="maxW flex justify-end">
          <article className="lg:w-1/2 pl-20">
            <h2 className="text-white font-medium uppercase text-4xl">
              {t("title")}
            </h2>
            <p className="text-white mt-4 text-lg">{t("description")}</p>
            <p className="text-white text-lg">{t("description1")}</p>
            <div className="flex mt-4">
              <a
                className="bg-Laranja px-12 py-2 rounded-2xl text-lg text-white font-medium mt-2"
                href=""
              >
                {t("buttonabout")}
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
