import { SmileOutlined } from '@ant-design/icons';
import { Button, Card, Col, Result, Row, Input, Pagination } from 'antd';
import Link from 'next/link';
import React from 'react';
import CandidateCard from '../../components/authenticated/Candidate/candidateCard';
import RecruiterFilter from '../../components/filters/recruiterFilter';
import Container from '../../components/layout/container';

const { Search } = Input;

const UserHome = () => {
    return (
        <Container>
            <Row gutter={[16, 16]} className="m-top-1">
                <Col span={8}>
                    <RecruiterFilter />
                </Col>
                <Col span={16}>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>
                            <Row justify="space-between">
                                <Col span={12}>
                                    <Search
                                        placeholder="Search with Name or Mobile Number"
                                    ></Search>
                                </Col>
                                <Col span={10} style={{ margin: 'auto 0' }}>
                                    <Pagination total={50} size="small" />
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}><CandidateCard /></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default UserHome;