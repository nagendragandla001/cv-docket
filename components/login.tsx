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
                    label="Search with official email id or mobile number"
                    name="userName"
                    rules={
                        [
                            { required: true, message: 'Required field!' },
                            { whitespace: true, message: 'Field can not be empty!!' }

                        ]}
                >
                    <Input placeholder="Official email id or Mobile number" />
                </Form.Item>
                <Form.Item className="text-right">
                    <Button type="primary" htmlType="submit">Search</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default LoginModal;