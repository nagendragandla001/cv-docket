import { Card, Col, Image, Row, Typography } from "antd";
import React from "react";
import Container from "./layout/container";

const { Title, Text } = Typography;
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
  return (
    <>
      <Image className="home-banner" src="/images/4565.jpg" preview={false} alt="CV Docket" />
      <Container>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 0 }} className="m-main-title">
            <Title level={2}>Why to choose CV Docket?</Title>
          </Col>
          <Col xs={{ span: 0 }} lg={{ span: 24 }} className="d-main-title">
            <Title>Why to choose CV Docket?</Title>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 0 }}>
            <Row gutter={24}>
              <Col span={24}>
                <Image
                  className="home-illustrations"
                  src="/images/spreadsheet.svg"
                  alt="sheet"
                  preview={false}

                />
              </Col>
              <Col span={24}>
                <Title level={4}>No more excel sheet</Title>
                <Text>
                  No need to maintain any sheets for candidate's information
                </Text>
              </Col>
            </Row>
          </Col>
          <Col xs={{ span: 0 }} lg={{ span: 24 }}>
            <Row gutter={24}>
              <Col span={8}>
                <Image
                  className="home-illustrations"
                  src="/images/spreadsheet.svg"
                  alt="sheet"
                  preview={false}
                />
              </Col>
              <Col span={16}>
                <Title level={2}>No more excel sheet</Title>
                <Text>
                  No need to maintain any sheets for candidate's information
                </Text>
              </Col>
            </Row>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 0 }} className="p-top-3">
            <Row gutter={24}>
              <Col span={24}>
                <Image
                  className="home-illustrations"
                  src="/images/status1.svg"
                  alt="feedback"
                  preview={false}

                />
              </Col>
              <Col span={24}>
                <Title level={4}>
                  Single platform for entire candidate feedback system
                </Title>
                <Text>
                  Feedback will be stacked for the further rounds.
                </Text>
              </Col>
            </Row>
          </Col>

          <Col xs={{ span: 0 }} lg={{ span: 24 }} className="p-top-3">
            <Row gutter={24} justify="space-between">
              <Col span={12}>
                <Title level={2}>
                  Single platform for entire candidate feedback system
                </Title>
                <Text>
                  Feedback will be stacked for the further rounds.
                </Text>
              </Col>
              <Col span={12} className="text-center">
                <Image
                  className="home-illustrations"
                  src="/images/status1.svg"
                  alt="feedback"
                  preview={false}

                />
              </Col>
            </Row>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 0 }} className="p-top-3">
            <Row gutter={24}>
              <Col span={24}>
                <Image
                  className="home-illustrations"
                  src="/images/status.svg"
                  alt="feedback"
                  preview={false}

                />
              </Col>
              <Col span={24}>
                <Title level={4}>Asynchronous Communication</Title>
                <Text>
                  Seamless communication between Recruiter and Interviewer
                </Text>
              </Col>
            </Row>
          </Col>

          <Col xs={{ span: 0 }} lg={{ span: 24 }} className="p-top-3">
            <Row gutter={24}>
              <Col span={8}>
                <Image
                  className="home-illustrations"
                  src="/images/status.svg"
                  alt="feedback"
                  preview={false}

                />
              </Col>
              <Col span={12}>
                <Title level={2}>Asynchronous Communication</Title>
                <Text>
                  Seamless communication between Recruiter and Interviewer
                </Text>
              </Col>
            </Row>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 0 }} className="p-top-3">
            <Row gutter={24}>
              <Col span={24}>
                <Image
                  className="home-illustrations"
                  src="/images/hiring.svg"
                  alt="feedback"
                  preview={false}

                />
              </Col>
              <Col span={24}>
                <Title level={4}>High Hiring Chances</Title>
                <Text>
                  It would be easy to take a decisition for manager and
                  recruiters.
                </Text>
              </Col>
            </Row>
          </Col>

          <Col xs={{ span: 0 }} lg={{ span: 24 }} className="p-top-3">
            <Row gutter={24} justify="space-between">
              <Col span={12}>
                <Title level={2}>High Hiring Chances</Title>
                <Text>
                  It would be easy to take a decisition for manager and
                  recruiters.
                </Text>
              </Col>
              <Col span={12} className="text-center">
                <Image
                  className="home-illustrations"
                  src="/images/hiring.svg"
                  alt="feedback"
                  preview={false}
                />
              </Col>
            </Row>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 0 }} className="p-top-3">
            <Row gutter={24}>
              <Col span={24}>
                <Image
                  className="home-illustrations"
                  src="/images/calendar_1.svg"
                  alt="feedback"
                  preview={false}

                />
              </Col>
              <Col span={24}>
                <Title level={4}>Digital Sceheduling Slots</Title>
                <Text>
                  Slots been allocated to the interviewer throught the platform
                  only. Slots are allocated by the recruiter based on
                  Interviewer's availability.
                </Text>
              </Col>
            </Row>
          </Col>
          <Col xs={{ span: 0 }} lg={{ span: 24 }} className="p-top-3">
            <Row gutter={24}>
              <Col span={8}>
                <Image
                  className="home-illustrations"
                  src="/images/calendar_1.svg"
                  alt="feedback"
                  preview={false}

                />
              </Col>
              <Col span={12}>
                <Title level={2}>Digital Sceheduling Slots</Title>
                <Text>
                  Slots been allocated to the interviewer throught the platform
                  only. Slots are allocated by the recruiter based on
                  Interviewer's availability.
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
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
                      hoverable
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
