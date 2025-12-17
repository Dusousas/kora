"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { FaInstagram } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-6 bg-VerdeP">
      <div className="maxW">
        <article className="flex flex-col justify-center gap-8 w-full items-center lg:flex-row lg:gap-30">
          <div className="lg:w-1/6">
            <img className="w-[160px]" src="/logos/logowhite.svg" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:w-1/6">
            <div className="h-10 w-10 bg-white flex justify-center items-center rounded-full">
              <MdOutlinePhone className="text-VerdeP text-xl" />
            </div>
            <p className="text-white uppercase font-semibold mt-2">
              {t("titlecontact")}
            </p>
            <p className="text-white">{t("emailcontact")}</p>
            <p className="text-white">(19) 99944-8710</p>
          </div>

          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:w-1/6">
            <div className="h-10 w-10 bg-white flex justify-center items-center rounded-full">
              <a className="" href="">
                <FaInstagram className="text-VerdeP text-xl" />
              </a>
            </div>
            <p className="text-white uppercase font-semibold mt-2 text-center lg:text-left">
              {t("titlesocial")}
            </p>
            <p className="text-white font-semibold">@kora.natural</p>
          </div>
        </article>
        <article className="mt-10">
          <p className="text-center text-white">
            {t.rich("rights", {
              brand: (chunks) => (
                <span className="uppercase font-semibold">{chunks}</span>
              ),
            })}
          </p>
        </article>
      </div>
    </footer>
  );
}
