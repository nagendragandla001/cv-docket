import { Button, Form, Input, Modal } from 'antd';
import React from 'react';
import { useRouter } from 'next/router';

type PropsModal = {
    visible: boolean,
    onCancel: () => void
}

const AccountOpenModal = (props: PropsModal) => {
    const { visible, onCancel } = props;
    const [form] = Form.useForm();
    const router = useRouter();

    const finishHandler = async (formData): Promise<void> => {
        console.log(formData);
        router.push({
            pathname: `/account/`,
            query: { id: 123456789 },
        })
        onCancel();
    };

    return (
        <Modal
            visible={visible}
            title="Open an Account"
            footer={null}
            onCancel={onCancel}
        >
            <Form
                layout="vertical"
                onFinish={finishHandler}
                requiredMark={false}
            >
                <Form.Item
                    name="companyName"
                    label="Your Company Name"
                    rules={[
                        { required: true, message: "Company Name is Mandatory!" },
                        {
                            whitespace: true, message: 'Company name should not be empty'
                        }
                    ]}
                >
                    <Input placeholder="Please enter your company name" suffix=".cvdocket.com" />
                </Form.Item>

                <Form.Item name="pocName" label="POC Name"
                    rules={[
                        { required: true, message: "Name is Mandatory!" },
                        {
                            whitespace: true, message: 'Name should not be empty'
                        }
                    ]}
                >
                    <Input placeholder="POC Name" />
                </Form.Item>

                <Form.Item name="pocContact" label="POC Contact"
                    rules={[
                        { required: true, message: "Contact number is Required!" },
                        {
                            whitespace: true, message: 'Contact number should not be empty'
                        }
                    ]}
                >
                    <Input placeholder="POC Contact" />
                </Form.Item>
                <Form.Item name="pocEmail" label="POC Email"
                    rules={[
                        { required: true, message: "Email is Mandatory!" },
                        {
                            whitespace: true, message: 'Email should not be empty'
                        }
                    ]}
                >
                    <Input placeholder="POC Email" />
                </Form.Item>

                <Form.Item className="text-right">
                    <Button type="primary" htmlType="submit">Create</Button>
                </Form.Item>
            </Form>
        </Modal >
    )
}

export default AccountOpenModal;