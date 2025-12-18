import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

// helpers (os mesmos que você já usou)
function getLocaleFromPath(asPath: string): "pt" | "en" | "es" {
  const first = asPath.split("?")[0].split("#")[0].split("/")[1];
  if (first === "en" || first === "es" || first === "pt") return first;
  return "pt";
}

function withLocale(locale: string, path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${p}`;
}

export default function PackDogs() {
  const t = useTranslations("packdogs");
  const router = useRouter();
  const locale = getLocaleFromPath(router.asPath);

  return (
    <>
      <section className="bg-VerdeP py-10">
        <div className="maxW flex flex-col-reverse items-center justify-center gap-20 lg:flex-row">
          <article className="lg:w-1/2">
            <img className="rounded-2xl" src="/pack/packcaes.png" alt="" />
          </article>

          <article className="lg:w-1/2">
            <h1 className="text-white font-medium uppercase text-4xl text-center lg:text-left">
              {t("title")} <br />
              <span className="text-white"> {t("title1")}</span>
            </h1>

            <p className="text-white mt-4 text-lg text-center lg:text-left">
              {t("description")}
            </p>

            <div className="flex mt-4 justify-center lg:justify-start">
              <Link
                href={withLocale(locale, "/produtos")}
                className="bg-white px-12 py-2 rounded-2xl text-lg text-VerdeP font-medium mt-2 transition hover:opacity-90"
              >
                {t("buttondog")}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
