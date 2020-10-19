import { NextPage } from 'next';
import Head from 'next/head'
import '../styles/Home.module.less'

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>CV Docket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>CV Docket Home page</h2>
      </main>
    </div>
  )
}

export default HomePage;
