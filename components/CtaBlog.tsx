import React from "react";
import { useTranslations } from "next-intl";

export default function CtaBlog() {
  const t = useTranslations("ctablog");

  return (
    <>
      <section className="py-10 bg-primary">
        <div className="maxW flex flex-col justify-center items-center gap-4 lg:gap-30 lg:flex-row">
          <h2 className="text-VerdeP font-medium uppercase text-4xl text-center lg:text-left lg:w-[50%]">
            {t("title")}
          </h2>
          <div className="flex">
            <a
              className="bg-Laranja px-6 py-2 rounded-2xl text-lg text-white font-medium mt-2"
              href=""
            >
              {t("buttonblog")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
