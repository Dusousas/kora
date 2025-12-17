import React from "react";
import Navbar from "./subc/Navbar";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="py-2 shadow-sm bg-primary">
        {/* MOBILE: menu esquerda | logo centro | idioma direita */}
        <div className="maxW grid grid-cols-3 items-center lg:hidden">
          <div className="flex items-center justify-start">
            <Navbar />
          </div>

          <div className="flex items-center justify-center">
            <Link href="/pt">
              <img
                className="w-[110px]"
                src="/logos/logo_KORA.svg"
                alt="KORA"
              />
            </Link>
          </div>

          <div className="flex items-center justify-end">
            <LanguageSwitcher />
          </div>
        </div>

        {/* DESKTOP: como estava */}
        <div className="maxW hidden lg:flex justify-between items-center">
          <div>
            <Link href="/pt">
              <img
                className="w-[110px]"
                src="/logos/logo_KORA.svg"
                alt="KORA"
              />
            </Link>
          </div>

          <div>
            <Navbar />
          </div>

          <div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>
    </>
  );
}
