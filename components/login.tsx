import { Modal, Row, Form, Input, Button, Space } from 'antd';
import React from 'react';

type PropsModal = {
    visible: boolean,
    onCancel: () => void
}

const LoginModal = (props: PropsModal) => {
    const { visible, onCancel } = props;
    const [form] = Form.useForm();

    const finishHandler = (formData) => {
        onCancel();
    }
    return (
        <Modal
            visible={visible}
            title="Login"
            onCancel={onCancel}
            onOk={onCancel}
            footer={null}
        >
            <Form
                form={form}
                layout="vertical"
                requiredMark={false}
                onFinish={finishHandler}
            >
                <Form.Item
                    label="User Name"
                    name="userName"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder="Input user name" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please inputpassword!' }]}
                >
                    <Input.Password placeholder="Input Password" />
                </Form.Item>
                <Form.Item className="text-right">
                    <Space>
                        <Button type="default" onClick={onCancel}>Cancel</Button>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Space>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default LoginModal;