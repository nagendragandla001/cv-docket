import { AreaChartOutlined, BarChartOutlined, BookOutlined, ExpandAltOutlined, HeartFilled, HeartOutlined, LineChartOutlined, PieChartOutlined, RadarChartOutlined, ScheduleOutlined } from '@ant-design/icons';
import { Card, Col, Row, Skeleton, Space, Table, Typography } from 'antd';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import Container from '../../layout/container';
import './Dashboard.less';

const { Title, Text } = Typography;

const DashboardComponent = () => {
    const jobsColumns = [
        {
            title: 'Job Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Created By',
            dataIndex: 'createdBy',
            key: 'createdBy'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'Total Applications',
            dataIndex: 'total',
            key: 'total'
        }
    ];

    const interviewColumns = [
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name'
        },
        {
            title: 'Job',
            key: 'job',
            dataIndex: 'job',
        },
        {
            title: 'Round',
            key: 'round',
            dataIndex: 'round'
        },
        {
            title: 'status',
            key: 'status',
            dataIndex: 'status'
        }
    ]
    const interviewData = [
        {
            name: 'Joaquin Phoenix',
            key: 'i1',
            job: 'Senior Frontend Engineer',
            round: 'Second',
            status: 'completed'
        },
        {
            name: 'Robert De Niro',
            key: 'i2',
            job: 'Senior Backend Engineer',
            round: 'Third',
            status: 'inprogress'
        },
        {
            name: 'Zazie Beetz',
            key: 'i3',
            job: 'Devops Engineer',
            round: 'Manager',
            status: 'completed'
        },
        {
            name: 'Marc Maron',
            key: 'i4',
            job: 'Senior Frontend Engineer',
            round: 'Second',
            status: 'completed'
        },
        {
            name: 'Joaquin Phoenix',
            key: 'i5',
            job: 'Senior Frontend Engineer',
            round: 'First',
            status: 'completed'
        },
        {
            name: 'Joaquin Phoenix',
            key: 'i6',
            job: 'Senior Frontend Engineer',
            round: 'Third',
            status: 'completed'
        }
    ]

    const jobsData = [
        {
            key: '1',
            name: 'Senior Frontend Engineer',
            status: 'Active',
            total: 18,
            createdBy: 'Hari'
        },
        {
            key: '2',
            name: 'Python Developer',
            status: 'Active',
            total: 10,
            createdBy: 'David Raju'
        },
        {
            key: '3',
            name: 'Senior Backend Engineer',
            status: 'Active',
            total: 18,
            createdBy: 'Hari'
        },
        {
            key: '4',
            name: 'Devops Engineer',
            status: 'Active',
            total: 10,
            createdBy: 'David Raju'
        },
        {
            key: '5',
            name: 'Wed Designer',
            status: 'Active',
            total: 18,
            createdBy: 'Hari'
        },
        {
            key: '6',
            name: 'Automation Tester',
            status: 'Active',
            total: 10,
            createdBy: 'David Raju'
        },
        {
            key: '7',
            name: 'Senior Frontend Engineer',
            status: 'Active',
            total: 18,
            createdBy: 'Hari'
        },
        {
            key: '8',
            name: 'Python Developer',
            status: 'Active',
            total: 10,
            createdBy: 'David Raju'
        },
        {
            key: '9',
            name: 'Senior Backend Engineer',
            status: 'Active',
            total: 18,
            createdBy: 'Hari'
        },
        {
            key: '10',
            name: 'Devops Engineer',
            status: 'Active',
            total: 10,
            createdBy: 'David Raju'
        },
        {
            key: '11',
            name: 'Wed Designer',
            status: 'Active',
            total: 18,
            createdBy: 'Hari'
        },
        {
            key: '12',
            name: 'Automation Tester',
            status: 'Active',
            total: 10,
            createdBy: 'David Raju'
        }
    ]

    const barchart = {
        labels: ['MS', 'Tesco', 'JP Morgan', 'TCS'],
        datasets: [{
            label: '',
            data: [60, 30, 43, 53],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 80, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    }
    return (
        <Container>
            <Row className="dashboard m-top-1" gutter={[8, 8]}>
                <Col span={24}>
                    <Row gutter={[8, 8]}>
                        <Col span={6}>
                            <Card className="dashboard-card"
                                hoverable={false}
                            >
                                <Bar
                                    data={barchart}
                                    options={{
                                        maintainAspectRatio: false
                                    }}
                                />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card className="dashboard-card"
                                hoverable={false}
                            >
                                <Text className="text-bold text-disabled">Donutchart Info</Text>
                                <Skeleton active paragraph={{ rows: 2 }} />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card className="dashboard-card"
                                hoverable={false}
                            >
                                <Space>
                                    <HeartOutlined className="text-disabled" />
                                    <Text className="text-bold text-disabled">My Favourite Jobs</Text>
                                </Space>

                                <Skeleton title={true} active paragraph={{ rows: 2 }}>
                                </Skeleton>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Table
                        columns={jobsColumns}
                        dataSource={jobsData}
                        pagination={false}
                        size="small"
                        title={() => <Space>
                            <BookOutlined className="text-disabled" />
                            <Text className="text-disabled text-medium text-bold"> All Jobs</Text>
                        </Space>}
                        scroll={{ x: '100%', y: 'calc(100vh - 400px)' }}
                    />
                </Col>
                <Col span={12}>
                    <Table
                        columns={interviewColumns}
                        dataSource={interviewData}
                        pagination={false}
                        size="small"
                        title={() => <Space>
                            <ScheduleOutlined className="text-disabled" />
                            <Text className="text-disabled text-medium text-bold"> My Scheduled Interviews</Text>
                        </Space>}
                        scroll={{ x: '100%', y: 'calc(100vh - 400px)' }}
                    />
                </Col>
            </Row>
        </Container >
    )
}

export default DashboardComponent;