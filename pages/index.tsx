import { NextPage } from "next";
import Head from "next/head";
import HomeComponent from "../screens/public/home.component";
import "../styles/Home.module.less";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CV Docket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeComponent />
      </main>
    </div>
  );
};

export default Home;
