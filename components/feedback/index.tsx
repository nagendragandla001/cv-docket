import { Col, Modal, Rate, Row, Typography, Collapse, Button, Divider } from 'antd';
import React, { useEffect } from 'react';
import './feedback.less';

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

type PropsModel = {
    feedback: Array<any>,
    visible: boolean,
    onClose: () => void
}

const StatusLabel = {
    FR: 'First Round',
    SR: 'Second Round',
    TR: 'Third Round',
    MR: 'Manager Round'
}

const Feedback = (props: PropsModel): JSX.Element => {
    const { feedback, visible, onClose } = props;
    useEffect(() => {
        console.log(feedback);
    }, [feedback]);
    return (
        <Modal
            visible={visible}
            title="Feedback"
            onCancel={onClose}
            className="feedback-modal"
            footer={<Button type="primary" size="small" onClick={onClose} >OK</Button>}
            style={{ top: 0 }}
        >
            <Row gutter={[8, 8]}>
                {
                    feedback.map(step => (
                        <Col span={24} key={Math.random()}>
                            <Divider orientation="left">{StatusLabel[step.round]}</Divider>
                            <Row>
                                <Col span={24}>
                                    <Collapse bordered={false}>
                                        {
                                            step.skills.map(s => (
                                                <Panel
                                                    key={Math.random()}
                                                    header={s.skill}
                                                    extra={
                                                        <>
                                                            <Rate count={5} value={s.rating} disabled />
                                                            <Text className="text-small text-disabled m-l-1">{s.rating}/5 </Text>
                                                        </>}
                                                >
                                                    {
                                                        s.questions.map(q => (
                                                            <Row gutter={[8, 8]} key={Math.random()}>
                                                                <Col span={24}>
                                                                    <Text className="text-small text-disabled">{q.question}</Text>
                                                                    <Text className="text-small" style={{ fontStyle: 'italic' }}> - {q.answer}</Text>
                                                                </Col>
                                                            </Row>
                                                        ))
                                                    }

                                                </Panel>
                                            ))
                                        }
                                    </Collapse>
                                </Col>
                            </Row>
                        </Col>
                    ))
                }
            </Row>
        </Modal>
    )
};

export default Feedback;