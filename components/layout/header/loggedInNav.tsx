import React, { useState } from "react";
import {
    Button,
    Col,
    Row,
    Space,
    Typography,
} from "antd";
import Container from "../container";
import { CaretDownFilled, LoginOutlined, MenuOutlined, PlusOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import AddCandidate from "../../Candidate";

const { Text, Title } = Typography;

const LoggedInNav = (): JSX.Element => {

    const [visible, setVisible] = useState(false);

    return (
        <nav>
            <Container>
                <Row align="middle" justify="space-between">
                    <Col>
                        <Space>
                            <Title level={3} className="text-primary text-bold">
                                <Link href="/">CV DOCKET</Link>
                            </Title>
                        </Space>
                    </Col>
                    <Col>
                        <Space>
                            <Button
                                type="primary"
                                icon={<PlusOutlined />}
                                onClick={(): void => setVisible(true)}
                            >Add Candidate</Button>
                            {/* <Button type="link" icon={<SmileOutlined style={{ fontSize: '24px' }} />}>
                                <CaretDownFilled style={{ fontSize: '24px' }} />
                            </Button> */}
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
