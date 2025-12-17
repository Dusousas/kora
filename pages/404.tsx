import React from "react";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <section className="flex items-center justify-center h-[calc(100vh-260px)] bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-lg text-gray-600">
          {t("message")}
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {t("backButton")}
        </a>
      </div>
    </section>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  // Define locale padrão e lista de locales suportados
  const defaultLocale = 'pt';
  const supportedLocales = ['pt', 'en'];
  
  // Usa locale se válido, senão usa o padrão
  const currentLocale = locale && supportedLocales.includes(locale) 
    ? locale 
    : defaultLocale;
  
  return {
    props: {
      messages: (await import(`../messages/${currentLocale}.json`)).default
    }
  };
}