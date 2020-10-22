import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import Link from 'next/link';
import React from 'react';

const Account = () => {

    return (
        <Result
            status="warning"
            title="Thank you for opening an account with us."
            subTitle="Development is in Progress!!!"
            extra={<Button type="primary"><Link href="/">Home</Link></Button>}
        />
    )
}

export default Account;