"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
  const path = usePathname();
  const cleanPath = path.replace(/^\/(pt|en|es)(?=\/|$)/, "");


  return (
    <div className="flex gap-2">
      <Link href={`/pt${cleanPath}`}>
        <img src="/pt.png" alt="Português" className="w-6 h-6" />
      </Link>
      <Link href={`/en${cleanPath}`}>
        <img src="/us.png" alt="English" className="w-6 h-6" />
      </Link>
      <Link href={`/es${cleanPath}`}>
        <img src="/es.png" alt="Espanhol" className="w-6 h-6" />
      </Link>
    </div>
  );
}
