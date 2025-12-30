import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { getMessages } from "../lib/getMessages";

export default function NotFound() {
  const t = useTranslations("404");
  const router = useRouter();

  const localeFromPath = React.useMemo(() => {
    const first = router.asPath?.split("?")[0]?.split("/")[1];
    return first === "pt" || first === "en" || first === "es" ? first : "pt";
  }, [router.asPath]);

  return (
    <div className="py-16 bg-white">
      <main className="min-h-[70vh] flex items-center justify-center px-6 bg-gradient-to-b from-white to-[rgba(241,251,246,1)]">
        <div className="maxW w-full">
          <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col items-center">
            <div className="w-full lg:w-1/2 p-10 flex items-center justify-center bg-[url('/bgs/leaf-pattern.svg')] bg-contain bg-left">
              <div className="text-center">
                <div className="text-6xl md:text-8xl font-extrabold text-VerdeP">
                  404
                </div>
                <div className="mt-2 text-sm text-gray-600">{t("title")}</div>
              </div>
            </div>

            <div className="w-full mx-auto lg:w-1/2 p-10">
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                {t("subtitle")}
              </h2>
              <p className="mt-3 text-gray-600 text-center">{t("titlehelp")}</p>

              <div className="mt-6 flex justify-center gap-3">
                <Link
                  href={`/${localeFromPath}`}
                  className="inline-flex items-center px-5 py-3 bg-VerdeP text-white rounded-2xl font-semibold hover:opacity-90 transition"
                >
                  {t("titleback")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return getMessages({}, "pt");
}
