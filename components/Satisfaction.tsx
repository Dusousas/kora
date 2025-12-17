import React from "react";
import { useTranslations } from "next-intl";

export default function Satisfaction() {
  const t = useTranslations("satisfaction");

  const items = t.raw("items") as string[];

  return (
    <>
      <section className="bg-VerdeP py-20">
        <div className="maxW flex flex-col gap-10 lg:flex-row">
          <article className="lg:w-1/2">
            <h2 className="text-white font-medium uppercase text-4xl">
              {t("title")}
            </h2>
            <img className="w-[140px] mt-6" src="/logos/garantia.svg" alt="" />
          </article>

          <article className="lg:w-1/2">
            <h2 className="text-white font-medium uppercase text-xl">
              {t("subtitle")}
            </h2>

            <p className="text-white mt-4 text-lg">{t("description")}</p>

            <ul className="mt-6 ">
              {Array.isArray(items) &&
                items.map((item, index) => (
                  <li key={index} className="text-white font-semibold">
                    • {item}
                  </li>
                ))}
            </ul>
            <p className="mt-6 text-white">{t("sacmail")}</p>
            <p className="text-white">{t("sacphone")}</p>
            <p className="text-white text-sm mt-6">{t("important")}</p>

            <div className="flex mt-4">
              <a
                className="bg-white px-12 py-2 rounded-2xl text-lg text-VerdeP font-medium mt-2"
                href=""
              >
                {t("buttonsatsfaction")}
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
