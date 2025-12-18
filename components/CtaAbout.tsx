import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

// helpers (mesmo padrão dos outros componentes)
function getLocaleFromPath(asPath: string): "pt" | "en" | "es" {
  const first = asPath.split("?")[0].split("#")[0].split("/")[1];
  if (first === "en" || first === "es" || first === "pt") return first;
  return "pt";
}

function withLocale(locale: string, path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${p}`;
}

export default function CtaAbout() {
  const t = useTranslations("ctaabout");
  const router = useRouter();
  const locale = getLocaleFromPath(router.asPath);

  return (
    <>
      <section className="py-20 bgAbout">
        <div className="maxW flex justify-end">
          <article className="lg:w-1/2 pl-20">
            <h2 className="text-white font-medium uppercase text-4xl">
              {t("title")}
            </h2>

            <p className="text-white mt-4 text-lg">{t("description")}</p>
            <p className="text-white text-lg">{t("description1")}</p>

            <div className="flex mt-4">
              <Link
                href={withLocale(locale, "/kora")}
                className="bg-Laranja px-12 py-2 rounded-2xl text-lg text-white font-medium mt-2 transition hover:opacity-90"
              >
                {t("buttonabout")}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
