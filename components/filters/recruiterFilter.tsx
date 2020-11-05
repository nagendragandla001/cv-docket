import { ClearOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Checkbox, Col, Radio, Row, Select, Space, Typography } from 'antd';
import React from 'react';
import Container from '../../components/layout/container';
import './recruiterFilter.less';

const { Option } = Select;
const { Paragraph, Title, Text } = Typography;

const RecruiterFilter = (): JSX.Element => {
    return (
        <Card title="Filter by" extra={<Button type="link" size="small" className="p-all-0 h-auto">Clear all</Button>} className="filter-container" bordered={false}>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Space>
                        <Radio.Group buttonStyle="outline">
                            <Radio.Button value="all">All</Radio.Button>
                            <Radio.Button value="me">Only Me</Radio.Button>
                        </Radio.Group>
                    </Space>
                </Col>
                <Col span={24}>
                    <Select
                        showSearch
                        placeholder="Select a Recruiter"
                        style={{ width: '100%' }}
                    >
                        <Option value="nagendra">Nagendra Gandla</Option>
                        <Option value="kiran">Kiran Reddy</Option>
                        <Option value="nagendra">Sivalinga Reddy</Option>
                        <Option value="nagendra">Niranjan Singh</Option>
                        <Option value="nagendra">Chandra Sekhar</Option>
                    </Select>
                </Col>
                <Col span={24}>
                    <Select
                        showSearch
                        placeholder="Select a Job"
                        style={{ width: '100%' }}
                    >
                        <Option value="frontend">Frontend Engineer</Option>
                        <Option value="devops">DevOps Team Lead</Option>
                        <Option value="marketing">Marketing Manager</Option>
                        <Option value="backend">Backend Engineer</Option>
                        <Option value="operations">Operations Head</Option>
                    </Select>
                </Col>
                <Col span={24}><Checkbox value="interviewer">Interviewer</Checkbox></Col>
                <Col span={24}>
                    <Checkbox value="reschedule">Reschedule</Checkbox>
                </Col>
            </Row>
        </Card>
    )
};

export default RecruiterFilter;