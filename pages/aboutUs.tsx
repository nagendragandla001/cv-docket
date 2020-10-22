import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
    return (
        <Result
            icon={<SmileOutlined />}
            title="We just started our journey, You will get some interesting story about us in soon."
            extra={<Button type="primary"><Link href="/">Home</Link></Button>}
        />
    )
}

export default AboutUs;