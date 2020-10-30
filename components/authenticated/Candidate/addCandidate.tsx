import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, DatePicker, Form, Input, message, Row, Select, Upload } from 'antd';
import React from 'react';
import moment from 'moment';

const { Option } = Select;
const { RangePicker } = DatePicker;

type PropsModel = {
    visible: boolean,
    onCancel: () => void
}

const AddCandidate = (props: PropsModel) => {
    const { visible, onCancel } = props;

    const [form] = Form.useForm();

    const uploadProps = {
        name: 'file',
        action: '',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    function onSearch(val) { }
    function onChange(val) { }

    return (
        <Drawer
            visible={visible}
            title="Add a New Candidate"
            footer={null}
            onClose={onCancel}
            width='auto'
            maskClosable={false}
        >
            <Form
                form={form}
                layout="vertical"
                requiredMark={false}
            >
                <Row gutter={16}>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <Form.Item
                            name="name"
                            label="Name"
                            rules={[{ required: true, message: 'Enter name' }]}
                        >
                            <Input placeholder="Enter name" />
                        </Form.Item>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <Form.Item
                            name="contact"
                            label="Contact Number"
                            rules={[{ required: true, message: 'Enter contact number' }]}
                        >
                            <Input placeholder="Contact number" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[{ required: true, message: 'Enter Email' }]}
                        >
                            <Input placeholder="Enter Email" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <Form.Item
                            name="job"
                            label="Job"
                            rules={[{ required: true, message: 'Select a Job' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a Job"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="job-1">Senior Software Engineer</Option>
                                <Option value="job-2">Fullstack Developer</Option>
                                <Option value="job-3">Front-end Engineer</Option>
                                <Option value="job-4">Backend Developer</Option>
                                <Option value="job-4">Testing Engineer</Option>
                                <Option value="job-4">DevOps Engineer</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <Form.Item
                            name="interviewer"
                            label="Interviewer"
                            rules={[{ required: true, message: 'Select an Interviewer' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Select an INterviewer"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="nagendra">Nagendra Gandla</Option>
                                <Option value="niranjan">Niranjan Singh</Option>
                                <Option value="kiran">Kiran Reddy</Option>
                                <Option value="Siva">Siva Reddy A</Option>
                                <Option value="chandu">Chandra Sekhar</Option>
                                <Option value="rahul">Rahul Gandhi</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item name="schedule" label="Schedule Time">
                            <RangePicker
                                showTime
                                format="YYYY/MM/DD HH:mm A"
                                onChange={onChange}
                                minuteStep={15}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item name="resume">
                            <Upload {...uploadProps}>
                                <Button icon={<UploadOutlined />}>Upload Resume</Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button type="primary" block htmlType="submit">Add</Button>
                </Form.Item>

            </Form>

        </Drawer>
    )
}

export default AddCandidate;