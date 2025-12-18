import React from "react";
import { useTranslations } from "next-intl";
import { getMessages } from "../../lib/getMessages";

export default function kora() {
  const t = useTranslations("kora");

  return (
    <>
      <section className="bg-[#FFFDF0] p-4 lg:p-10">
<video
  className="w-full h-[260px] sm:h-[360px] lg:h-[700px] object-cover"
  src="/a-kora.mp4"
  playsInline
  controls
  preload="metadata"
/>

        <div className="maxW bg-[#FFFDF0]">
          <article className="pt-10 flex flex-col lg:flex-row lg:gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-VerdeP font-medium uppercase text-[30px] text-center">
                {t("title")}
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-black mt-4 text-lg leading-relaxed">
                {t("descriptionStart")}{" "}
                <span className="font-semibold text-black">
                  {t("highlight")}
                </span>{" "}
                {t("descriptionEnd")}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-VerdeP py-10">
        <div className="maxW flex flex-col lg:gap-30 lg:flex-row">
          <article className="lg:w-1/3">
            <h2 className="text-white font-medium uppercase text-4xl text-center mt-4 lg:mt-0 lg:text-left">
              {t("titlemissao")}
            </h2>
            <p className="text-white mt-4">{t("descmissao")}</p>
          </article>

          <article className="lg:w-1/3">
            <h2 className="text-white font-medium uppercase text-4xl text-center mt-4 lg:mt-0 lg:text-left">
              {t("titlesocial")}
            </h2>
            <p className="text-white mt-4">{t("descsocial")}</p>
          </article>

          <article className="lg:w-1/3">
            <h2 className="text-white font-medium uppercase text-4xl text-center mt-4 lg:mt-0 lg:text-left">
              {t("titlevalores")}
            </h2>
            <ul className="mt-4  text-white">
              {(t.raw("valores") as string[]).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white shrink-0" />
                  <span className="">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-[#FFFDF0] py-10">
        <div className="maxW flex flex-col-reverse gap-y-10 lg:flex-row">
          <article className="lg:w-[40%]">
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-[280px]"
                src="/logos/selo-reciclavel.svg"
                alt=""
              />
              <img
                className="w-[200px]"
                src="/logos/selo_eu-reciclo.png"
                alt=""
              />
            </div>
          </article>

          <article className="lg:w-[60%]">
            <h3 className="font-semibold text-2xl text-center lg:text-left">{t("titlepack")}</h3>
            <p className="mt-4">{t("descpack1")}</p>
            <p className="mt-2">{t("descpack2")}</p>
            <p className="mt-2 font-semibold text-center lg:text-left">{t("descpack3")}</p>

          </article>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return getMessages({}, "pt");
}
