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
            <h2 className="text-white font-medium uppercase text-4xl text-center lg:text-left">
              {t("title")}
            </h2>
            <img className="w-[140px] mt-6 mx-auto lg:mx-0" src="/logos/garantia.svg" alt="" />
          </article>

          <article className="lg:w-1/2">
            <h2 className="text-white font-medium uppercase text-xl text-center lg:text-left">
              {t("subtitle")}
            </h2>

            <p className="text-white mt-4 text-lg text-center lg:text-left">{t("description")}</p>

            <ul className="mt-6 ">
              {Array.isArray(items) &&
                items.map((item, index) => (
                  <li key={index} className="text-white font-semibold">
                    • {item}
                  </li>
                ))}
            </ul>
            <p className="mt-6 text-white text-center lg:text-left">{t("sacmail")}</p>
            <p className="text-white text-center lg:text-left">{t("sacphone")}</p>
            <p className="text-white text-sm mt-6 text-center lg:text-left">{t("important")}</p>

            <div className="flex justify-center mt-4 lg:justify-start">
              <a target="_blank"
                className="bg-white px-12 py-2 rounded-2xl text-lg text-VerdeP font-medium mt-2"
                href="https://8f0d7119-d722-4d24-9912-3c97402de32e.filesusr.com/ugd/6e6eb0_1444a31f229f4b419df2a061deec715e.pdf"
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
