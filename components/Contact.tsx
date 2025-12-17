"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Contact() {
  const t = useTranslations("contact");

  const ABOUT_OPTIONS = t.raw("about.options") as string[];

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");

  // Dropdown
  const [about, setAbout] = useState<string>("");
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  // fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!aboutRef.current) return;
      if (!aboutRef.current.contains(e.target as Node)) setIsAboutOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // fecha no ESC
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setIsAboutOpen(false);
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <section className="bgContact py-20">
        <div className="maxW flex flex-col lg:items-end lg:justify-end">
          <form className="bg-primary p-8 rounded-2xl lg:w-[600px]" action="">
            <h3 className="text-VerdeP font-semibold text-3xl mb-6">
              {t("title")}
            </h3>

            {/* Nome */}
            <div>
              <label className="text-sm text-VerdeP">{t("fullName.label")}</label>
              <input
                className="bg-[#EBDFCB] w-full rounded-lg p-2 text-VerdeP mt-2 outline-none"
                placeholder={t("fullName.placeholder")}
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="mt-4">
              <label className="text-sm text-VerdeP">{t("email.label")}</label>
              <input
                className="bg-[#EBDFCB] w-full rounded-lg p-2 text-VerdeP mt-2 outline-none"
                placeholder={t("email.placeholder")}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Whatsapp */}
            <div className="mt-4">
              <label className="text-sm text-VerdeP">{t("phone.label")}</label>

              <div className="mt-2 phoneWrap">
                <PhoneInput
                  defaultCountry="BR"
                  international
                  countryCallingCodeEditable={false}
                  value={phone}
                  onChange={setPhone}
                  placeholder={t("phone.placeholder")}
                />
              </div>
            </div>

            {/* SOBRE - DROPDOWN */}
            <div className="mt-4" ref={aboutRef}>
              <label className="text-sm text-VerdeP">{t("about.label")}</label>

              <button
                type="button"
                onClick={() => setIsAboutOpen((v) => !v)}
                className="bg-[#EBDFCB] w-full rounded-lg p-2 text-VerdeP mt-2 outline-none flex items-center justify-between"
                aria-haspopup="listbox"
                aria-expanded={isAboutOpen}
              >
                <span className={about ? "text-VerdeP" : "text-VerdeP/60"}>
                  {about || t("about.placeholder")}
                </span>

                {/* Setinha (vira pra cima quando abre) */}
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isAboutOpen ? "rotate-180" : "rotate-0"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isAboutOpen && (
                <div className="relative">
                  <ul
                    role="listbox"
                    className="absolute z-20 mt-2 w-full bg-[#EBDFCB] rounded-lg overflow-hidden shadow-md border border-black/5"
                  >
                    {ABOUT_OPTIONS.map((item) => (
                      <li key={item}>
                        <button
                          type="button"
                          onClick={() => {
                            setAbout(item);
                            setIsAboutOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 text-VerdeP hover:bg-black/5 transition ${
                            about === item ? "font-semibold" : ""
                          }`}
                          role="option"
                          aria-selected={about === item}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* input hidden pra enviar no form (se precisar) */}
              <input type="hidden" name="about" value={about} />
            </div>

            {/* Mensagem */}
            <div className="mt-4">
              <label className="text-sm text-VerdeP">{t("message.label")}</label>
              <textarea
                className="bg-[#EBDFCB] w-full rounded-lg resize-none mt-2 p-2 text-VerdeP"
                rows={4}
                placeholder={t("message.placeholder")}
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-VerdeP cursor-pointer text-white font-semibold py-3 rounded-xl hover:opacity-95 transition"
            >
              {t("button")}
            </button>
          </form>
        </div>

        <article className="flex justify-end maxW">
          <div className="flex justify-center  bg-VerdeP text-white py-2 px-8 rounded-2xl mt-8 lg:w-[600px] lg:gap-20">
            <p>{t("contact.email")}</p>
            <p>{t("contact.phone")}</p>
          </div>
        </article>
      </section>
    </>
  );
}
