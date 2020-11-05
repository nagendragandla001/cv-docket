import { EditOutlined, FilePdfOutlined, FileWordOutlined, MailOutlined, PhoneOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import './jobsCard.less';

const { Text, Paragraph } = Typography;


const jobs = [
    {
        name: 'Technical Architech',
        id: 'ta123456',
        interviews: {
            total: 20,
            selected: 5,
            rejected: 10,
            inprogress: 3,
            onhold: 2
        },
        postedBy: 'Hari',
        postedOn: '12 Aug 2020'
    },
    {
        name: 'Fullstack Developer',
        id: 'fd1717',
        interviews: {
            total: 10,
            selected: 2,
            rejected: 6,
            inprogress: 2,
            onhold: 0
        },
        postedBy: 'Teja',
        postedOn: '20 Oct 2020'
    },
    {
        name: 'Senior Frontend Engineer',
        id: 'sfe1919',
        interviews: {
            total: 5,
            selected: 1,
            rejected: 3,
            inprogress: 1,
            onhold: 0
        },
        postedBy: 'Geetha Kumari',
        postedOn: '12 May 2020'
    },
    {
        name: 'Backend Developer',
        id: 'ta123456',
        interviews: {
            total: 16,
            selected: 1,
            rejected: 10,
            inprogress: 4,
            onhold: 1
        },
        postedBy: 'Hari',
        postedOn: '12 Jun 2020'
    },
]

const JobsCard = (): JSX.Element => {

    return (
        <Row gutter={[16, 16]} className="jobs-container">
            {
                jobs.map(c => (
                    <Col span={24} key={c.id}>
                        <Card
                            className="jobs-card"
                            actions={[
                                <Row>
                                    <Col span={12} className="text-left">
                                        <Space>
                                            <Button type="link" icon={<EditOutlined />}>Edit</Button>
                                        </Space>
                                    </Col>
                                    <Col span={12} className="m-v-auto text-left">
                                        <Text className="text-disabled text-small">Posted on {c.postedOn} by {c.postedBy}</Text>
                                    </Col>
                                </Row>
                            ]}
                        >
                            <Row gutter={[16, 16]}>
                                <Col span={10}>
                                    <Row gutter={[8, 8]}>
                                        <Col span={24}>
                                            <Paragraph className="text-bold">{c.name}</Paragraph>
                                        </Col>
                                        <Col span={24}>
                                            <Text className="text-disabled">Total Applications: <span className="text-bold">{c.interviews.total}</span></Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={14}>
                                    <Row gutter={[8, 8]}>
                                        <Col span={6}>
                                            <Button className="stats">
                                                <Row>
                                                    <Col span={24}>In Progress</Col>
                                                    <Col span={24} className="count">{c.interviews.inprogress}</Col>
                                                </Row>
                                            </Button>
                                        </Col>
                                        <Col span={6}>
                                            <Button className="stats">
                                                <Row>
                                                    <Col span={24}>Selected</Col>
                                                    <Col span={24} className="count">{c.interviews.selected}</Col>
                                                </Row>
                                            </Button>
                                        </Col>
                                        <Col span={6}>
                                            <Button className="stats">
                                                <Row>
                                                    <Col span={24}>On Hold</Col>
                                                    <Col span={24} className="count">{c.interviews.onhold}</Col>
                                                </Row>
                                            </Button>
                                        </Col>
                                        <Col span={6}>
                                            <Button className="stats">
                                                <Row>
                                                    <Col span={24}>Rejected</Col>
                                                    <Col span={24} className="count">{c.interviews.rejected}</Col>
                                                </Row>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default JobsCard;