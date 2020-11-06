import React, { useEffect, useState } from "react";
import {
    Button, Col, Row, Space, Typography, Image
} from "antd";
import Container from "../container";
import { CaretDownFilled, LoginOutlined, MenuOutlined, PlusOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import AddCandidate from "../../authenticated/Candidate/addCandidate";
import AddJob from "../../authenticated/Jobs/addJob";

const { Text, Title } = Typography;

type PageModel = {
    page: string
}

const LoggedInNav = (props: PageModel): JSX.Element => {
    const { page } = props;

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
                            <AddJob />
                            <Button
                                type="default"
                                onClick={(): void => setVisible(true)}
                            >Add a Candidate</Button>
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
