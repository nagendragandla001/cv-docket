import React, { useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  Image,
  Menu,
  Row,
  Space,
  Typography,
} from "antd";
import Container from "../container";
import { MenuOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const PublicNav = (): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const onMenuClose = (): void => {
    setVisible(false);
  };
  const onMenuClick = (): void => {
    setVisible(!visible);
  };
  const menuItem = ({ mode, className }): JSX.Element => {
    return (
      <Menu mode={mode} className={`common-menu ${className}`}>
        <Menu.Item key="1" onClick={onMenuClose}>
          <Button type="link" block className="text-primary">
            About Us
          </Button>
        </Menu.Item>
        <Menu.Item key="2" onClick={onMenuClose}>
          <Button type="primary" block>
            Create FREE Account
          </Button>
        </Menu.Item>
        <Menu.Item key="3" onClick={onMenuClose}>
          <Button type="default" block>
            Login
          </Button>
        </Menu.Item>
      </Menu>
    );
  };
  const menu = (
    <Menu>{menuItem({ mode: "vertical", className: "mobile-menu" })}</Menu>
  );
  return (
    <nav>
      <Container>
        <Row align="middle" justify="space-between">
          <Col xs={{ span: 24 }} lg={{ span: 0 }}>
            <Space>
              <Dropdown overlay={menu}>
                <Button
                  type="link"
                  onClick={onMenuClick}
                  className="text-primary"
                  icon={<MenuOutlined />}
                ></Button>
              </Dropdown>
              <Title level={3} className="text-primary text-bold">
                CV DOCKET
              </Title>
            </Space>
          </Col>
          <Col xs={{ span: 0 }} lg={{ span: 16 }}>
            <Title level={3} className="text-primary text-bold">
              CV DOCKET
            </Title>
          </Col>
          <Col xs={{ span: 0 }} lg={{ span: 8 }}>
            <Space>
              <Button type="link" className="text-primary">
                About Us
              </Button>
              <Button type="primary">Create FREE Account</Button>
              <Button type="default">Login</Button>
            </Space>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default PublicNav;
