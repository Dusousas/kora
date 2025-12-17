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