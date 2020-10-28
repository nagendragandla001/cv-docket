import { Col, Row, Space } from "antd";
import React from "react";
import Container from "./layout/container";
import {
  CopyrightOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

const PublicFooter: React.FunctionComponent = () => {
  return (
    <Container>
      <Row gutter={16} justify="space-between" align="middle">
        <Col xs={{ span: 12 }} lg={{ span: 8 }} className="m-bottom-1">
          Terms and Conditions
          </Col>
        <Col xs={{ span: 12 }} lg={{ span: 8 }} className="m-bottom-1">
          Copyrights <CopyrightOutlined /> CV Docket 2020
          </Col>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 8 }}
          className="m-bottom-1 text-center"
        >
          Follow us on &nbsp;
            <Space>
            <FacebookFilled />
            <TwitterCircleFilled />
            <InstagramFilled />
            <LinkedinFilled />
          </Space>
        </Col>
      </Row>
    </Container>
  );
};

export default PublicFooter;
