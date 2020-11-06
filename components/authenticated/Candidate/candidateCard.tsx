import { FilePdfOutlined, FileWordOutlined, MailOutlined, PhoneOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Steps, Typography } from 'antd';
import { getRedirectStatus } from 'next/dist/lib/load-custom-routes';
import React from 'react';
import './candidateCard.less';

const { Text } = Typography;
const { Step } = Steps;

const StatusLabel = {
    FR: 'First Round',
    SR: 'Second Round',
    TR: 'Third Round',
    MR: 'Manager Round'
}

const candidates = [
    {
        name: 'MS Dhoni',
        status: 'selected',
        round: 'FR',
        id: 'c1',
        job: {
            id: 'j1',
            name: 'Frontend Engineer'
        },
        contact: '9999999999',
        email: 'msdhoni@gmail.com',
        experience: '8 years',
        interviewer: 'Niranjan Singh',
        scheduledTime: '01 Nov 2020 10:30AM',
        designation: 'Junior Engineer'
    },
    {
        name: 'Virat Kohli',
        status: 'inprogress',
        round: 'SR',
        id: 'c2',
        job: {
            id: 'j2',
            name: 'Backend Engineer'
        },
        contact: '8888888888',
        email: 'viratkohli@gmail.com',
        experience: '8 years',
        interviewer: 'Niranjan Singh',
        scheduledTime: '01 Nov 2020 10:30AM',
        designation: 'Software Engineer'
    },
    {
        name: 'Suresh Raina',
        status: 'inprogress',
        round: 'FR',
        id: 'c3',
        job: {
            id: 'j3',
            name: 'Fullstack Developer'
        },
        contact: '7777777777',
        email: 'sureshraina@gmail.com',
        experience: '10.6 years',
        interviewer: 'Niranjan Singh',
        scheduledTime: '01 Nov 2020 10:30AM',
        designation: 'SDE-II'
    },
    {
        name: 'Sikhar Dhavan',
        status: 'rejected',
        round: 'TR',
        id: 'c4',
        job: {
            id: 'j4',
            name: 'Marketing Manager'
        },
        contact: '6666666666',
        email: 'sikhardhavan@gmail.com',
        experience: '11 years',
        interviewer: 'Niranjan Singh',
        scheduledTime: '01 Nov 2020 10:30AM',
        designation: 'Senior Software Engineer'

    },
    {
        name: 'Harthik Pandya',
        status: 'selected',
        round: 'SR',
        id: 'c6',
        job: {
            id: 'j6',
            name: 'Web Designer'
        },
        contact: '4444444444',
        email: 'pandya@gmail.com',
        experience: '8.6 years',
        interviewer: 'Niranjan Singh',
        scheduledTime: '01 Nov 2020 10:30AM',
        designation: 'Team Lead'

    },
    {
        name: 'David Warner',
        status: 'rejected',
        round: 'MR',
        id: 'c7',
        job: {
            id: 'j7',
            name: 'Digital Marketing'
        },
        contact: '3333333333',
        email: 'davidwarner@gmail.com',
        experience: '3.8 years',
        interviewer: 'Niranjan Singh',
        scheduledTime: '01 Nov 2020 10:30AM',
        designation: 'Marketing Lead'
    },

];

const steps = [
    {
        title: 'First Round',
        value: 1,
        key: 'FR'
    },
    {
        title: 'Second Round',
        value: 2,
        key: 'SR'
    },
    {
        title: 'Third Round',
        value: 3,
        key: 'TR'
    },
    {
        title: 'Manager Round',
        value: 4,
        key: 'MR'
    }
]

const mappedSteps = {
    FR: 0,
    SR: 1,
    TR: 2,
    MR: 3
}

const CandidateCard = (): JSX.Element => {

    const getCurrentStep = (id) => {
        return mappedSteps[id]
    }

    const getRedirectStatus = (status) => {
        if (status === 'selected') {
            return 'finish'
        } else if (status === 'rejected') {
            return 'error';
        } else if (status === 'onhold') {
            return 'wait';
        }
        return 'process';
    }

    return (
        <Row gutter={[16, 16]} className="candidate-container">
            {
                candidates.map(c => (
                    <Col span={24} key={c.id}>
                        <Card
                            className="candidate-card"
                            actions={[
                                <Row justify="end" key={Math.random()}>
                                    <Col>
                                        <Space>
                                            <Button type="default" size="small" icon={<FileWordOutlined />}>View Resume</Button>
                                            <Button type="default" size="small" icon={<FilePdfOutlined />}>Download</Button>
                                            <Button type="default" size="small" icon={<ShareAltOutlined />}>Share</Button>
                                        </Space>
                                    </Col>
                                </Row>
                            ]}
                        >
                            <Row gutter={[16, 16]}>
                                <Col span={24}>
                                    <Row justify="space-between">
                                        <Col>
                                            <Text className="text-bold">{c.name}</Text>
                                        </Col>
                                        <Col>
                                            <Text className={`card-extra ${c.round}`}>{StatusLabel[c.round]}</Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row>
                                        <Col span={12}>
                                            <Row>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Designation:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small">{c.designation}</Text>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Applied to:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small text-link">{c.job.name}</Text>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Experience:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small">{c.experience}</Text>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Contact Number:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small">{c.contact}</Text>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Email:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small">{c.email}</Text>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col span={12}>
                                            <Row>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Interviewer:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small">{c.interviewer}</Text>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Scheduled Time:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small">{c.scheduledTime}</Text>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Steps
                                        size="small"
                                        current={mappedSteps[c.round]}
                                        status={getRedirectStatus(c.status)}
                                    >
                                        {
                                            steps.map(step => (
                                                <Step
                                                    key={step.value}
                                                    title={step.title}
                                                    description={c.round === step.key ? c.status : ''}
                                                ></Step>
                                            ))
                                        }
                                    </Steps>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default CandidateCard;