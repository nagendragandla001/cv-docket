import { AlertOutlined, BulbOutlined, EditOutlined, FacebookFilled, FacebookOutlined, LinkedinFilled, LinkedinOutlined, MailFilled, MailOutlined, SmileOutlined, TwitterCircleFilled, TwitterOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Image, Result, Row, Space, Steps, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Link from 'next/link';
import React from 'react';
import Container from '../components/layout/container';

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;
const { Meta } = Card;

const promotors = [
    {
        key: "lakshmi",
        name: "Lakshmi K",
        designation: "Founder & CEO",
        description: "Lakshmi combines savvy and strong team drive skills as Founder and CEO."
    },
    {
        key: "siva",
        name: "Siva Reddy A",
        designation: "Co-Founder",
        description: "Head of the Marketing. Key contributor on Company strategies and setting up business"
    },
    {
        key: "nagendra",
        name: "Nagendra Gandla",
        designation: "CTO",
        description: "Nagendra is Primarly focused on driving the tech team. Owns E2E tech deliverables."
    },
    {
        key: "niranjan",
        name: "Niranjan Singh",
        designation: "Technical Architect",
        description: "Niranjan is focused on building the best platform in distributed computing and ML."
    },
];

const AboutUs = () => {
    return (
        <Container>
            <Row className="about-us">
                <Col span={24} className="m-t-2">
                    <Title level={3} className="text-primary">Our Vision</Title>
                </Col>
                <Col span={24} className="m-top-1 m-b-1">
                    <Paragraph>We believe "Necessity is mother of invention". As an active member in Interview Panel,
                    It was tough to manage the interviews due to lack of effective stack of previous round's feedback.
                    As a recruiter Scheduling interviews and manage candidature information was toughest thing.
                    And Many cases Candidate is not notifying the interview feedback mostly on rejection.
                    </Paragraph>
                </Col>
                <Col span={24} className="m-b-1">
                    <Paragraph>The above pain points are the motto to create a platform to make effective feedback system.</Paragraph>
                </Col>
                <Col span={24} className="m-t-1 m-b-1" >
                    <Title level={4}>Effective Feedback System For Recruitment Platform</Title>
                </Col>
                <Col span={24}>
                    <Row gutter={[16, 16]}>
                        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                            <ul>
                                <li>Segregation of all rounds of feedback</li>
                                <li>ML based schedulings with system generated remainders</li>
                                <li>Single platform to maintain all candidate information</li>
                            </ul>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                            <Image src="/images/status.svg" preview={false} alt="Feedback" />
                        </Col>
                    </Row>
                </Col>

            </Row>
            <Row className="m-t-2 about-us">
                <Col span={24}>
                    <Title level={3} className="text-primary">Our Core Values</Title>
                </Col>
                <Col span={24} className="m-t-1 m-b-1">
                    <Row>
                        <Col span={24}>
                            <Card className="card">
                                <Row>
                                    <Col span={24}>
                                        <Steps>
                                            <Step
                                                icon={<BulbOutlined />}
                                                title="Imagination"
                                                status="finish"
                                            />
                                            <Step
                                                icon={<AlertOutlined />}
                                                title="Analyzation"
                                                status="finish"
                                            />
                                            <Step
                                                icon={<EditOutlined />}
                                                title="Implementation"
                                                status="finish"
                                            />
                                        </Steps>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="m-t-2 about-us">
                <Col span={24}>
                    <Title level={3} className="text-primary">Our Leadership</Title>
                </Col>
                <Col span={24} className="m-t-1 m-b-1">
                    <Row gutter={[16, 16]}>
                        {
                            promotors.map(p => (
                                <Col xs={{ span: 24 }} lg={{ span: 6 }} key={p.key}>
                                    <Card className="card"
                                        hoverable={false}
                                    >
                                        <Meta
                                            title={p.name}
                                            avatar={<Avatar src={`/images/${p.key}.jpeg`} />}
                                            description={p.designation}></Meta>
                                        <Row className="m-t-2">
                                            <Col span={24}>
                                                <Paragraph className="text-small">{p.description}</Paragraph>
                                            </Col>
                                            <Col span={24} className="m-t-1 text-center">
                                                <Space>
                                                    <FacebookFilled />
                                                    <LinkedinFilled />
                                                    <TwitterCircleFilled />
                                                    <MailFilled />
                                                </Space>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            ))
                        }

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs;