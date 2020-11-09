import "../styles/globals.less";

import { Layout } from "antd";
import PublicFooter from "../components/footer.component";
import Navigator from "../components/layout/header/navigator";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const { Header, Content, Footer } = Layout;

const DefaultHead: React.FunctionComponent = () => {
  return (
    <Head>
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
      <meta key="author" name="author" content="Cvdocket" />
      <link rel="icon" href="/images/title_logo.png" />
      <title>CV Docket</title>
    </Head>
  )
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log(router);
    const authPages = ['/interviews', '/jobs', '/dashboard'];
    setLoggedIn(authPages.includes(router.pathname));
  }, [router]);

  return (
    <Layout>
      <DefaultHead />
      <Header className="layout-header">
        <Navigator />
      </Header>
      <Content className="layout-content">
        <Component {...pageProps} />
      </Content>
      {
        !loggedIn && (
          <Footer className="layout-footer">
            <PublicFooter />
          </Footer>
        )
      }
    </Layout>
  );
}

export default MyApp;
