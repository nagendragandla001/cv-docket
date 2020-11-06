import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const { Text } = Typography;
const { Option } = Select;

const AddJob = (): JSX.Element => {
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const onCancel = () => {
        setVisible(false);
    }

    const expYears = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    return (
        <>
            <Button type="default" onClick={(): void => setVisible(true)}>Add Job</Button>

            {
                visible && (
                    <Drawer
                        visible={visible}
                        title="Add a Job"
                        footer={null}
                        onClose={onCancel}
                        width='40em'
                        maskClosable={false}
                        destroyOnClose={true}
                        forceRender
                    >
                        <Form
                            form={form}
                            layout="vertical"
                            requiredMark={false}
                            initialValues={{
                                roles: [""]
                            }}
                        >
                            <Row gutter={[12, 12]}>
                                <Col span={24}>
                                    <Form.Item
                                        name="title"
                                        label="Title"
                                        rules={[{ required: true, message: 'Enter Job Title' }]}
                                    >
                                        <Input placeholder="Enter Job Title" />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        name="location"
                                        label="Job Location"
                                        rules={[{ required: true, message: 'Enter Job Location' }]}
                                    >
                                        <Input placeholder="Job Location" />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        name="experience"
                                        label="Experience Criteria"
                                        rules={[{ required: true, message: 'Enter Experience Criteria' }]}
                                    >
                                        <Select
                                            placeholder="Minimum Years"
                                            options={expYears.map(yr => ({ value: yr, label: `${yr} years` }))}
                                            style={{ width: '200px' }}>
                                        </Select>
                                        <Text style={{ padding: '0 1em' }}>To</Text>
                                        <Select
                                            placeholder="Maximum Years"
                                            options={expYears.map(yr => ({ value: yr, label: `${yr} years` }))}
                                            style={{ width: '200px' }}>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item
                                        name="description"
                                        label="Job Description"
                                        rules={[{ required: true, message: 'Enter Job Description' }]}
                                    >
                                        <Input.TextArea rows={3} placeholder="Enter Job Description" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[12, 12]}>
                                <Col span={24}><Text>Roles and Responsibilities</Text></Col>
                                <Col span={24}>
                                    <Form.List
                                        name="roles"
                                        rules={[
                                            {
                                                validator: async (_, roles) => {
                                                    if (!roles || roles.length < 2) {
                                                        return Promise.reject(new Error('At least 2 roles to be added!!!'))
                                                    }
                                                }
                                            }
                                        ]}
                                    >
                                        {(fields, { add, remove }, { errors }) => (
                                            <>
                                                {
                                                    fields.map((field, index) => (
                                                        <Form.Item
                                                            required={false}
                                                            key={field.key}
                                                            style={{ marginBottom: '1em' }}
                                                        >
                                                            <Form.Item
                                                                {...field}
                                                                noStyle
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'Please fill the Role'
                                                                    },
                                                                    {
                                                                        whitespace: true,
                                                                        message: 'Role can not be empty'
                                                                    }
                                                                ]}
                                                            >
                                                                <Input placeholder="Enter a Role" style={{ width: '90%' }} />
                                                            </Form.Item>
                                                            {fields.length > 1 ? (
                                                                <MinusCircleOutlined style={{ marginLeft: '10px' }} onClick={(): void => remove(field.name)} />
                                                            ) : null}
                                                        </Form.Item>
                                                    ))
                                                }
                                                <Form.Item>
                                                    <Button
                                                        type="link"
                                                        size="small"
                                                        onClick={(): void => add()}
                                                        icon={<PlusOutlined />}
                                                    >Add another Role</Button>
                                                    <Form.ErrorList errors={errors} />
                                                </Form.Item>
                                            </>
                                        )}
                                    </Form.List>
                                </Col>
                            </Row>

                            <Form.Item>
                                <Button type="primary" block htmlType="submit">Add</Button>
                            </Form.Item>

                        </Form>

                    </Drawer>

                )
            }
        </>
    )
}

export default AddJob;