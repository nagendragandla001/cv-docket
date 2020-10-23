import "../styles/globals.less";

import { Layout } from "antd";
import PublicFooter from "../components/footer.component";
import Navigator from "../components/layout/header/navigator";
import Head from "next/head";
import { FileImageFilled } from "@ant-design/icons";

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
  return (
    <Layout>
      <DefaultHead />
      <Header className="layout-header">
        <Navigator />
      </Header>
      <Content className="layout-content">
        <Component {...pageProps} />
      </Content>
      <Footer className="layout-footer">
        <PublicFooter />
      </Footer>
    </Layout>
  );
}

export default MyApp;
