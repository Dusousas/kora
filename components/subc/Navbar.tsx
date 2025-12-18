"use client";

import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Link from "next/link";

type NavItem = {
  id: string;
  label: string;
  type: "section" | "page";
  pagePath?: string; // usado quando type === "page"
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");
  const router = useRouter();

  const currentLocale = (router.asPath.split("/")[1] || "pt") as "pt" | "en" | "es";
  const base = `/${currentLocale}`;

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const navItems: NavItem[] = [
    { id: "home", label: t("home"), type: "section" },
    { id: "guide", label: t("guide"), type: "section" },
    { id: "products", label: t("products"), type: "section" },

    // ✅ aqui vira página:
    { id: "kora", label: t("kora"), type: "page", pagePath: "/kora" },

    { id: "programa", label: t("programa"), type: "section" },
    { id: "contact", label: t("contact"), type: "section" },
  ];

  const goToSection = async (sectionId: string) => {
    setIsOpen(false);

    const isOnHome = router.pathname === "/[locale]" || router.asPath === base || router.asPath.startsWith(`${base}#`);

    // Se não estiver na home, primeiro vai pra home com hash
    if (!isOnHome) {
      await router.push(`${base}#${sectionId}`);
    }

    // Depois faz scroll (funciona tanto na home quanto após navegar)
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  const handleClick = async (item: NavItem) => {
    if (item.type === "page" && item.pagePath) {
      setIsOpen(false);
      await router.push(`${base}${item.pagePath}`); // ✅ /pt/kora, /en/kora...
      return;
    }

    await goToSection(item.id);
  };

  const getHref = (item: NavItem) => {
    if (item.type === "page" && item.pagePath) return `${base}${item.pagePath}`;
    return `${base}#${item.id}`; // deixa o href “real” (bom p/ SEO e fallback)
  };

  return (
    <>
      {/* Desktop */}
      <nav className="hidden lg:block text-VerdeP font-semibold">
        <ul className="flex gap-6 text-lg">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={getHref(item)}
                onClick={(e) => {
                  // evita comportamento padrão apenas para seções (porque vamos scroll suave)
                  if (item.type === "section") e.preventDefault();
                  handleClick(item);
                }}
                className="transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-VerdeP focus:outline-none relative z-50"
          aria-label="Abrir menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav
          className={`fixed top-0 right-0 h-screen w-full bg-white shadow-md z-40 flex flex-col items-center justify-center transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 text-lg uppercase">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={getHref(item)}
                  onClick={(e) => {
                    if (item.type === "section") e.preventDefault();
                    handleClick(item);
                  }}
                  className="transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
