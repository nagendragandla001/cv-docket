import { AmazonOutlined, CheckCircleFilled, CheckOutlined, ExceptionOutlined } from "@ant-design/icons";
import { Card, Carousel, Col, Image, Row, Timeline, Typography } from "antd";
import React, { useEffect } from "react";
import Container from "./layout/container";
import { isMobile } from 'react-device-detect';

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const promotors = [
  {
    key: "lakshmi",
    name: "Lakshmi K",
    description: "Founder & CEO",
  },
  {
    key: "siva",
    name: "Siva Reddy A",
    description: "Co-Founder",
  },
  {
    key: "nagendra",
    name: "Nagendra Gandla",
    description: "CTO",
  },
  {
    key: "niranjan",
    name: "Niranjan Singh",
    description: "Technical Architect",
  },
];


const HomeComponent = (): JSX.Element => {
  useEffect(() => {
    console.log('isMobile', isMobile);
  }, []);
  return (
    <>
      <div className="banner-container">
        <Container>
          <Row>
            <Col>
              <Paragraph className="banner-label">Simple, Better & <br />Effective</Paragraph>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 0 }} className="m-main-title text-center">
            <Title level={2}>Why to choose CV Docket?</Title>
          </Col>
          <Col xs={{ span: 0 }} lg={{ span: 24 }} className="d-main-title">
            <Title>Why to choose CV Docket?</Title>
          </Col>
          <Col span={24}>
            <Timeline mode="alternate">
              <Timeline.Item>
                <Row>
                  <Col span={24}>
                    <Card
                      hoverable={false}
                      bordered={false}
                      cover={
                        <Image
                          src='/images/files.svg'
                          alt='spreadsheet'
                          className="profile-pic"
                          preview={false}
                        ></Image>
                      }
                    >
                      <Meta
                        title={<Title level={3}>No more manual documents</Title>}
                        description="As a recruiter we understand the pain to manage Candidate information using excel sheets.
                        Day to day job will become tough to track or filter information. Using our platform job become more easier."></Meta>
                    </Card>
                  </Col>
                </Row>
              </Timeline.Item>
              <Timeline.Item>
                <Col span={24}>
                  <Card
                    hoverable={false}
                    bordered={false}
                    cover={
                      <Image
                        src='/images/status1.svg'
                        alt='spreadsheet'
                        className="profile-pic"
                        preview={false}
                      ></Image>
                    }
                  >
                    <Meta
                      title={<Title level={3}>Effective feedback system</Title>}
                      description="Still many companies are not liveraging entire interview rounds feedback into 
                      single platform. The communication used to happen using email chain only. Using our platform We are stacking all interview's feedback 
                      into a single platform."></Meta>
                  </Card>
                </Col>
              </Timeline.Item>
              <Timeline.Item>
                <Row>
                  <Col span={24}>
                    <Card
                      hoverable={false}
                      bordered={false}
                      cover={
                        <Image
                          src='/images/status.svg'
                          alt='spreadsheet'
                          className="profile-pic"
                          preview={false}
                        ></Image>
                      }
                    >
                      <Meta
                        title={<Title level={3}>Asynchronous Communication</Title>}
                        description="Through our platform we can schedule an interview and set remainders to the interviewer.
                         The interviewer will get notification 5min before scheduling time."></Meta>
                    </Card>
                  </Col>
                </Row>
              </Timeline.Item>
              <Timeline.Item>
                <Row>
                  <Col span={24}>
                    <Card
                      hoverable={false}
                      bordered={false}
                      cover={
                        <Image
                          src='/images/hiring.svg'
                          alt='spreadsheet'
                          className="profile-pic"
                          preview={false}
                        ></Image>
                      }
                    >
                      <Meta
                        title={<Title level={3}>High Hiring Chances</Title>}
                        description="It would be easy to take a decisition for manager and
                        recruiters with above features. The manager will get candidate performace in all rounds 
                        and based on that decision making would be more effective."></Meta>
                    </Card>
                  </Col>
                </Row>
              </Timeline.Item>
              <Timeline.Item>
                <Row>
                  <Col span={24}>
                    <Card
                      hoverable={false}
                      bordered={false}
                      cover={
                        <Image
                          src='/images/calendar_1.svg'
                          alt='spreadsheet'
                          className="profile-pic"
                          preview={false}
                        ></Image>
                      }
                    >
                      <Meta
                        title={<Title level={3}>Digital Scheduling Slots</Title>}
                        description="Slots been allocated to the interviewer through the platform
                        only. Slots are allocated by the recruiter based on
                        Interviewer's availability."></Meta>
                    </Card>
                  </Col>
                </Row>
              </Timeline.Item>
            </Timeline>
          </Col>
        </Row>
      </Container>
      <Carousel effect="fade">
        <Paragraph className="corousel">
          It's an immense pleasure to work with such an young team
            <Text className="text-bold"> - Sybriz Technologies</Text>
        </Paragraph>
        <Paragraph className="corousel">
          Kudos to the team, You made our daily life is more easier
            <Text className="text-bold"> - Recruiter - mynameisng.com</Text>
        </Paragraph>
      </Carousel>
      <Container>
        <Row className="p-top-3">
          <Col span={24}>
            <Card title="Our Four Pillers">
              <Row gutter={24}>
                {promotors.map((p) => (
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 6 }}
                    key={p.key}
                    className="m-top-1"
                  >
                    <Card
                      hoverable={false}
                      cover={
                        <Image
                          src={`/images/${p.key}.jpeg`}
                          alt={p.key}
                          className="profile-pic"
                          preview={false}

                        ></Image>
                      }
                    >
                      <Meta title={p.name} description={p.description}></Meta>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeComponent;
