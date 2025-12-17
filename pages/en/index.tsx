import Home from "../index";
import { GetStaticProps } from "next";

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      messages: (await import(`../../messages/en.json`)).default,
      locale: "en",
    },
  };
};
