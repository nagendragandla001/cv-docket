import "../styles/globals.less";

import { Layout } from "antd";
import PublicNav from "../components/layout/header/navigator";
import PublicFooter from "../components/footer.component";

const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header className="layout-header">
        <PublicNav />
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
