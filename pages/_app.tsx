import type { AppProps } from "next/app";
import Head from "next/head";
import { IntlProvider } from "next-intl";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kora Natural</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/logos/logo_KORA.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logos/logo_KORA.svg" />

        {/* (opcional) ícone para iPhone/iPad */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </Head>

      <IntlProvider
        messages={pageProps.messages}
        locale={pageProps.locale}
        timeZone="America/Sao_Paulo"
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </IntlProvider>
    </>
  );
}
