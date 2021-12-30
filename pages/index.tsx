import type { NextPage } from "next";
import Head from "next/head";
import { Main } from "../components/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kieran Allen - CV</title>
        <meta name="description" content="Kieran Allen CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
};

export default Home;
