import { NextPage } from "next";
import Head from "next/head";
import dynamic from 'next/dynamic';
// import HomeComponent from "../components/home.component";
import "../styles/Home.module.less";

const HomeComponent = dynamic(() => import('../components/home.component'), { ssr: false });

const Home: NextPage = () => {
  return (
    <HomeComponent />
  );
};

export default Home;
