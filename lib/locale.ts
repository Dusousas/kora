export type Locale = "pt" | "en" | "es";

export function getLocaleFromPath(asPath: string): Locale {
  const first = asPath.split("?")[0].split("#")[0].split("/")[1];
  if (first === "en" || first === "es" || first === "pt") return first;
  return "pt";
}

export function withLocale(locale: Locale, path: string) {
  // garante que path começa com /
  const p = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${p}`;
}
