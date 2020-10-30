import { FilePdfOutlined, FileWordOutlined, MailOutlined, PhoneOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import './candidateCard.less';

const { Text } = Typography;

const StatusLabel = {
    FR: 'First Round',
    SR: 'Second Round',
    TR: 'Third Round',
    SL: 'Selected',
    RJ: 'Rejected',
    SC: 'Scheduled'
}

const candidates = [
    {
        name: 'MS Dhoni',
        status: 'FR',
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
        status: 'SR',
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
        status: 'FR',
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
        status: 'TR',
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
        name: 'Yuvaraj Singh',
        status: 'SC',
        id: 'c5',
        job: {
            id: 'j5',
            name: 'DevOps Engineer'
        },
        contact: '5555555555',
        email: 'yuvaraj@gmail.com',
        experience: '4 years',
        interviewer: 'Niranjan Singh',
        scheduledTime: '01 Nov 2020 10:30AM',
        designation: 'Associate Devops Engineer'

    },
    {
        name: 'Harthik Pandya',
        status: 'SL',
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
        status: 'RJ',
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

]

const CandidateCard = (): JSX.Element => {

    return (
        <Row gutter={[16, 16]} className="candidate-container">
            {
                candidates.map(c => (
                    <Col span={24} key={c.id}>
                        <Card
                            className="candidate-card"
                            title={c.name}
                            extra={<Text className={c.status}>{StatusLabel[c.status]}</Text>}
                        >
                            <Row>
                                <Col span={24}>
                                    <Row>
                                        <Col span={12}>
                                            <Row>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Designation:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small text-link">{c.designation}</Text>
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
                                <Col span={24} className="text-right">
                                    <Space>
                                        <Button type="default" size="small" icon={<FileWordOutlined />}>View Resume</Button>
                                        <Button type="default" size="small" icon={<FilePdfOutlined />}>Download</Button>
                                        <Button type="default" size="small" icon={<ShareAltOutlined />}>Share</Button>
                                    </Space>
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