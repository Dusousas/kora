import type { GetStaticPropsContext } from "next";

export async function getMessages(ctx: GetStaticPropsContext, locale: "pt" | "en" | "es") {
  // Se você usa messages/pt.json, messages/en.json, messages/es.json
  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    props: {
      messages,
    },
  };
}
