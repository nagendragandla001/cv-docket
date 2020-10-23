import { NextPage } from "next";
import Head from "next/head";
import HomeComponent from "../components/home.component";
import "../styles/Home.module.less";

const Home: NextPage = () => {
  return (
    <HomeComponent />
  );
};

export default Home;
