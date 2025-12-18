import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PackCats() {
  const t = useTranslations("packcats");
  const router = useRouter();
  const locale = router.locale || "pt"; // pega o idioma atual, ou pt como fallback

  // caminho de produtos por idioma
  const productsPath = `/${locale}/produtos`; // ajuste se sua rota tiver outro nome

  return (
    <>
      <section className="bg-Azul py-10">
        <div className="maxW flex flex-col items-center justify-center gap-20 lg:flex-row">
          <article className="lg:w-1/2">
            <h1 className="text-white font-medium uppercase text-4xl text-center lg:text-left">
              {t("title")} <br />
              <span className="text-white"> {t("title1")}</span>
            </h1>
            <p className="text-white mt-4 text-lg text-center lg:text-left">{t("description")}</p>
            <div className="flex mt-4 justify-center lg:justify-start">
              <Link
                href={productsPath}
                className="bg-white px-12 py-2 rounded-2xl text-lg text-Azul font-medium mt-2"
              >
                {t("buttoncat")}
              </Link>
            </div>
          </article>
          <article className="lg:w-1/2">
            <img className="rounded-2xl" src="/pack/packcat.png" alt="" />
          </article>
        </div>
      </section>
    </>
  );
}
