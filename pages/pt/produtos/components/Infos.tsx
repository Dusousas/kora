import React from "react";

type ProductItem = {
  slug: string;
  image: string;
  name1: string;
  name2?: string;
  desc: string;
  kg?: string;

  h4slug: string;
  psabor: string;
  pdisponivel: string;
  imagegrao: string;
};

type Props = {
  product: ProductItem;
};

export default function Infos({ product }: Props) {
  return (
    <>
      <section className="py-20 bg-VerdeP/30">
        <div className="maxW flex justify-center items-center">

            <img className="w-[500px]" src="/produtos/infos/prato.png" alt="" />
       
        </div>
      </section>
    </>
  );
}
