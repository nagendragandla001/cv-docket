import { SmileOutlined } from '@ant-design/icons';
import { Button, Col, Result, Row } from 'antd';
import Link from 'next/link';
import React from 'react';
import Container from '../../components/layout/container';

const UserHome = () => {
    return (
        <Result
            status="warning"
            title="Page is under development"
            extra={<Button type="primary"><Link href="/">Home</Link></Button>}
        />
    )
}

export default UserHome;