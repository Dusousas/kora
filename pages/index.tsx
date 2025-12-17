import CtaAbout from "@/components/CtaAbout";
import CtaBlog from "@/components/CtaBlog";
import Main from "@/components/Main";
import PackDogs from "@/components/PackDogs";
import PackCats from "@/components/PackCats";
import Satisfaction from "@/components/Satisfaction";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
      <Main />
      <CtaBlog />
      <PackDogs />
      <PackCats />
      <CtaAbout />
      <Satisfaction />
      <Contact />

    </>
  );
}
