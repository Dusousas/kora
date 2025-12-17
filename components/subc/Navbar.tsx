"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");
  const router = useRouter();

  const currentLocale = router.locale || "pt";
  const isServicePage = router.pathname.includes("/services/[slug]");

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const navItems = [
    { id: "home", label: t("home") },
    { id: "guide", label: t("guide") },
    { id: "products", label: t("products") },
    { id: "kora", label: t("kora") },
    { id: "programa", label: t("programa") },
    { id: "contact", label: t("contact") },
  ];

  const handleNavClick = async (itemId: string) => {
    setIsOpen(false);

    const homeUrl = currentLocale === "pt" ? "/pt" : `/${currentLocale}`;

    if (isServicePage) {
      await router.push(`${homeUrl}#${itemId}`);
    }

    setTimeout(() => {
      const element = document.getElementById(itemId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300); // tempo maior para garantir renderização
  };

  const getHref = (itemId: string) => {
    const homeUrl = currentLocale === "pt" ? "/pt" : `/${currentLocale}`;
    return isServicePage ? `${homeUrl}#${itemId}` : `#${itemId}`;
  };

  return (
    <>
      {/* Desktop */}
      <nav className="hidden lg:block text-VerdeP font-semibold">
        <ul className="flex gap-6 text-lg ">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={getHref(item.id)}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
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
          className="text-3xl text-VerdeP  focus:outline-none relative z-50"
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
                  href={getHref(item.id)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
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
