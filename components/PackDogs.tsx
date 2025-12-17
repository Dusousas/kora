import React from "react";
import { useTranslations } from "next-intl";

export default function PackDogs() {
  const t = useTranslations("packdogs");

  return (
    <>
      <section className="bg-VerdeP py-10">
        <div className="maxW flex items-center justify-center gap-20">
          <article className="lg:w-1/2">
            <img className="rounded-2xl" src="/pack/packcaes.png" alt="" />
          </article>

          <article className="lg:w-1/2">
            <h1 className="text-white font-medium uppercase text-4xl">
              {t("title")} <br />
              <span className="text-white"> {t("title1")}</span>
            </h1>
            <p className="text-white mt-4 text-lg">{t("description")}</p>
            <div className="flex mt-4">
              <a
                className="bg-white px-12 py-2 rounded-2xl text-lg text-VerdeP font-medium mt-2"
                href=""
              >
                {t("buttondog")}
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
