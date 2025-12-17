import React from "react";
import { useTranslations } from "next-intl";

export default function ToBuy() {
  const t = useTranslations("tobuy");

  return (
    <>
      <section className="bgBuy py-20">
        <div className="maxW">
          <h2 className="text-VerdeP font-medium uppercase text-4xl">
            {t("title")}
          </h2>

          <p className="text-Azul mt-4 text-lg max-w-[400px]">
            {t.rich("description", {
              brand: (chunks) => (
                <span className="uppercase font-semibold">{chunks}</span>
              ),
            })}
          </p>

          <p className="text-Azul mt-2 text-lg font-semibold max-w-[400px]">
            {t("description1")}
          </p>

          <div className="flex">
            <a
              className="bg-VerdeP px-6 py-2 rounded-2xl text-lg text-white font-medium mt-4"
              href=""
            >
              {t("buttonbuy")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
