import React from "react";
import Navbar from "./subc/Navbar";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <>
      <header className="py-2 shadow-sm bg-primary">
        <div className="maxW flex justify-between items-center">
          <div>
            <a href="/pt">
              <img className="w-[110px]" src="/logos/logo_KORA.svg" alt="" />
            </a>
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
