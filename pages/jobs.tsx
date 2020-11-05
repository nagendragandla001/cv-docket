import { SmileOutlined } from '@ant-design/icons';
import { Button, Card, Col, Result, Row, Input, Pagination, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';
import JobsCard from '../components/authenticated/Jobs/JobsCard';
import RecruiterFilter from '../components/filters/recruiterFilter';
import Container from '../components/layout/container';

const { Search } = Input;
const { Title } = Typography;

const Jobs = () => {
    return (
        <Container>
            <Row gutter={[16, 16]} className="m-top-1">
                <Col span={16}>
                    <JobsCard />
                </Col>
            </Row>
        </Container>
    )
}

export default Jobs;