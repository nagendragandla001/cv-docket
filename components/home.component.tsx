import { AmazonOutlined, CheckCircleFilled, CheckOutlined, DeploymentUnitOutlined, ExceptionOutlined, FileOutlined, GlobalOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Carousel, Col, Image, Row, Tabs, Timeline, Typography } from "antd";
import React, { useEffect } from "react";
import Container from "./layout/container";
import { isMobile } from 'react-device-detect';

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;
const { TabPane } = Tabs;


const HomeComponent = (): JSX.Element => {
  const MobileTimelines = (): JSX.Element => (
    <Timeline mode="left">
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
  );

  const DesktopTimelines = (): JSX.Element => (
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
  )
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
            {
              isMobile ? <MobileTimelines /> : <DesktopTimelines />
            }
          </Col>
        </Row>
        <Row>
          <Col span={24} className="text-center m-top-1 m-bottom-1">
            <Title level={2} className="m-bottom-1">What Our Clients Say</Title>
            <Tabs defaultActiveKey="2" centered type="card">
              <TabPane key="2" tab={<Button type="link"><GlobalOutlined /> Cyberbiz Technologies </Button>}>
                <Card className="client">
                  <Avatar style={{ marginBottom: '0.5em' }} size={80} icon={<UserOutlined />}></Avatar>
                  <Paragraph className="font-size-large p-bottom-1">"It's an immense pleasure to work with such an young team. We see CV Docket significantly
                  reduce the time and efforts of our recruiters."</Paragraph>
                  <Text>Mr.Gajendra, CEO, Sybriz Technologies</Text>
                </Card>
              </TabPane>
              <TabPane key="3" tab={<Button type="link"><DeploymentUnitOutlined /> NetworkingKKR Solutions </Button>}>
                <Card className="client">
                  <Avatar style={{ marginBottom: '0.5em' }} size={80} icon={<UserOutlined />}></Avatar>
                  <Paragraph className="font-size-large p-bottom-1">"Kudos to the team, You made our daily life is more easier. We see CV Docket significantly
                  reduce the time and efforts of our recruiters."</Paragraph>
                  <Text>Mr.Kiran Reddy, CEO, NetworkingKKR Solutions</Text>
                </Card>
              </TabPane>
              <TabPane key="4" tab={<Button type="link"><FileOutlined /> MyNameIsNG Solutions </Button>}>
                <Card className="client">
                  <Avatar style={{ marginBottom: '0.5em' }} size={80} icon={<UserOutlined />}></Avatar>
                  <Paragraph className="font-size-large p-bottom-1">"It's an immense pleasure to work with such an young team. We see CV Docket significantly
                  reduce the time and efforts of our recruiters."</Paragraph>
                  <Text>Mr.Aravind, Head of the Talent Acquisitions, MyNameIsNG Solutions</Text>
                </Card>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeComponent;
