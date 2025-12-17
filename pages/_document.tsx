import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        <meta
          name="description"
          content="Dermatologia com tecnologia de ponta, tratamentos naturais e personalizados com atendimento em São Paulo e Torrinha. Cuide da sua pele com excelência médica."
        />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="dermatologista São Paulo, dermatologista Torrinha, tratamentos dermatológicos, estética facial, rejuvenescimento, botox, peeling, CO2 fracionado, cuidados com a pele, clínica dermatológica, dermatologia SP, dermatologia interior SP"
        />
        <meta name="author" content="Agência You on" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Kora Natural"
        />
        <meta
          property="og:description"
          content="Tratamentos dermatológicos modernos com resultados naturais em São Paulo e Torrinha. Agende sua consulta com Dr. Leonardo Martinelli."
        />
        <meta property="og:url" content="https://www.seusite.com.br" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:locale" content="pt_BR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kora Natural"
        />
        <meta
          name="twitter:description"
          content="Tratamentos dermatológicos modernos com resultados naturais em São Paulo e Torrinha. Agende sua consulta com Dr. Leonardo Martinelli."
        />
        <meta name="twitter:image" content="/logo.png" />


<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com"  />
<link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Red+Rose:wght@300..700&display=swap" rel="stylesheet" />

      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
