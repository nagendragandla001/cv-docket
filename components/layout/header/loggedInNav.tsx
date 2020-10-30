import React, { useState } from "react";
import {
    Button, Col, Row, Space, Typography, Image
} from "antd";
import Container from "../container";
import { CaretDownFilled, LoginOutlined, MenuOutlined, PlusOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import AddCandidate from "../../authenticated/Candidate/addCandidate";

const { Text, Title } = Typography;

const LoggedInNav = (): JSX.Element => {

    const [visible, setVisible] = useState(false);

    return (
        <nav>
            <Container>
                <Row align="middle" justify="space-between">
                    <Col>
                        <Space>
                            <Link href="/">
                                <Button type="link" icon={<Image src="/images/logo.png" className="logo" preview={false} alt="Logo" />} />
                            </Link>
                        </Space>
                    </Col>
                    <Col>
                        <Space>
                            <Button
                                type="primary"
                                icon={<PlusOutlined />}
                                onClick={(): void => setVisible(true)}
                            >Add Candidate</Button>
                        </Space>
                    </Col>
                </Row>
                {
                    visible && (<AddCandidate visible={visible} onCancel={(): void => setVisible(false)} />)
                }
            </Container>
        </nav>
    );
};

export default LoggedInNav;
