import { EyeOutlined, FilePdfOutlined, FileWordOutlined, MailOutlined, PhoneOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Steps, Typography } from 'antd';
import React, { useState } from 'react';
import Feedback from '../../feedback';
import './candidateCard.less';

const { Text } = Typography;
const { Step } = Steps;

const StatusLabel = {
    FR: 'First Round',
    SR: 'Second Round',
    TR: 'Third Round',
    MR: 'Manager Round'
}

const candidates = [
    {
        name: 'MS Dhoni',
        status: 'completed',
        round: 'FR',
        id: 'c1',
        job: {
            id: 'j1',
            name: 'Frontend Engineer'
        },
        contact: '9999999999',
        email: 'msdhoni@gmail.com',
        experience: '8 years',
        interviewer: 'Niranjan Singh',
        scheduledTime: '01 Nov 2020 10:30AM',
        designation: 'Junior Engineer',
        feedback: [
            {
                round: 'FR',
                proposedStatus: 'completed',
                skills: [
                    {
                        skill: 'HTML5',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Semantic Elements',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What kind of Web Storages do we have?',
                                answer: 'Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'CSS3',
                        rating: 4,
                        questions: [
                            {
                                question: 'What is Preprocessors',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What are Position Properties?',
                                answer: 'Got Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: 'Need to improve css styles'
                    },
                    {
                        skill: 'Javascript',
                        rating: 5,
                        questions: [
                            {
                                question: 'What are Data Types',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Arrow Functions?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'How to handle Asynchronous Events?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'Angular',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Single Page Application?',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Observable and Subject?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'Tree Shaking in Angular?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: 'Good in Angular',
                        suggestions: 'No Suggestions Required'
                    }
                ]
            }

        ]
    },
    {
        name: 'Virat Kohli',
        status: 'inprogress',
        round: 'SR',
        id: 'c2',
        job: {
            id: 'j2',
            name: 'Backend Engineer'
        },
        contact: '8888888888',
        email: 'viratkohli@gmail.com',
        experience: '8 years',
        interviewer: 'Niranjan Singh',
        scheduledTime: '01 Nov 2020 10:30AM',
        designation: 'Software Engineer',
        feedback: [
            {
                round: 'FR',
                proposedStatus: 'completed',
                skills: [
                    {
                        skill: 'HTML5',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Semantic Elements',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What kind of Web Storages do we have?',
                                answer: 'Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'CSS3',
                        rating: 4,
                        questions: [
                            {
                                question: 'What is Preprocessors',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What are Position Properties?',
                                answer: 'Got Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: 'Need to improve css styles'
                    },
                    {
                        skill: 'Javascript',
                        rating: 5,
                        questions: [
                            {
                                question: 'What are Data Types',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Arrow Functions?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'How to handle Asynchronous Events?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'Angular',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Single Page Application?',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Observable and Subject?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'Tree Shaking in Angular?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: 'Good in Angular',
                        suggestions: 'No Suggestions Required'
                    }
                ]
            }

        ]
    },
    {
        name: 'Suresh Raina',
        status: 'inprogress',
        round: 'FR',
        id: 'c3',
        job: {
            id: 'j3',
            name: 'Fullstack Developer'
        },
        contact: '7777777777',
        email: 'sureshraina@gmail.com',
        experience: '10.6 years',
        interviewer: 'Niranjan Singh',
        scheduledTime: '01 Nov 2020 10:30AM',
        designation: 'SDE-II',
        feedback: []
    },
    {
        name: 'Sikhar Dhavan',
        status: 'rejected',
        round: 'TR',
        id: 'c4',
        job: {
            id: 'j4',
            name: 'Marketing Manager'
        },
        contact: '6666666666',
        email: 'sikhardhavan@gmail.com',
        experience: '11 years',
        interviewer: 'Niranjan Singh',
        scheduledTime: '01 Nov 2020 10:30AM',
        designation: 'Senior Software Engineer',
        feedback: [
            {
                round: 'FR',
                proposedStatus: 'completed',
                skills: [
                    {
                        skill: 'HTML5',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Semantic Elements',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What kind of Web Storages do we have?',
                                answer: 'Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'CSS3',
                        rating: 4,
                        questions: [
                            {
                                question: 'What is Preprocessors',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What are Position Properties?',
                                answer: 'Got Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: 'Need to improve css styles'
                    },
                    {
                        skill: 'Javascript',
                        rating: 5,
                        questions: [
                            {
                                question: 'What are Data Types',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Arrow Functions?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'How to handle Asynchronous Events?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'Angular',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Single Page Application?',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Observable and Subject?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'Tree Shaking in Angular?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: 'Good in Angular',
                        suggestions: 'No Suggestions Required'
                    }
                ]
            },
            {
                round: 'SR',
                proposedStatus: 'completed',
                skills: [
                    {
                        skill: 'HTML5',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Semantic Elements',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What kind of Web Storages do we have?',
                                answer: 'Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'CSS3',
                        rating: 4,
                        questions: [
                            {
                                question: 'What is Preprocessors',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What are Position Properties?',
                                answer: 'Got Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: 'Need to improve css styles'
                    },
                    {
                        skill: 'Javascript',
                        rating: 5,
                        questions: [
                            {
                                question: 'What are Data Types',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Arrow Functions?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'How to handle Asynchronous Events?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'Angular',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Single Page Application?',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Observable and Subject?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'Tree Shaking in Angular?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: 'Good in Angular',
                        suggestions: 'No Suggestions Required'
                    }
                ]
            },
            {
                round: 'TR',
                proposedStatus: 'completed',
                skills: [
                    {
                        skill: 'HTML5',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Semantic Elements',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What kind of Web Storages do we have?',
                                answer: 'Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'CSS3',
                        rating: 4,
                        questions: [
                            {
                                question: 'What is Preprocessors',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What are Position Properties?',
                                answer: 'Got Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: 'Need to improve css styles'
                    },
                    {
                        skill: 'Javascript',
                        rating: 5,
                        questions: [
                            {
                                question: 'What are Data Types',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Arrow Functions?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'How to handle Asynchronous Events?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'Angular',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Single Page Application?',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Observable and Subject?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'Tree Shaking in Angular?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: 'Good in Angular',
                        suggestions: 'No Suggestions Required'
                    }
                ]
            }

        ]

    },
    {
        name: 'Harthik Pandya',
        status: 'completed',
        round: 'SR',
        id: 'c6',
        job: {
            id: 'j6',
            name: 'Web Designer'
        },
        contact: '4444444444',
        email: 'pandya@gmail.com',
        experience: '8.6 years',
        interviewer: 'Niranjan Singh',
        scheduledTime: '01 Nov 2020 10:30AM',
        designation: 'Team Lead',
        feedback: [
            {
                round: 'FR',
                proposedStatus: 'completed',
                skills: [
                    {
                        skill: 'HTML5',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Semantic Elements',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What kind of Web Storages do we have?',
                                answer: 'Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'CSS3',
                        rating: 4,
                        questions: [
                            {
                                question: 'What is Preprocessors',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What are Position Properties?',
                                answer: 'Got Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: 'Need to improve css styles'
                    },
                    {
                        skill: 'Javascript',
                        rating: 5,
                        questions: [
                            {
                                question: 'What are Data Types',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Arrow Functions?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'How to handle Asynchronous Events?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'Angular',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Single Page Application?',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Observable and Subject?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'Tree Shaking in Angular?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: 'Good in Angular',
                        suggestions: 'No Suggestions Required'
                    }
                ]
            },
            {
                round: 'SR',
                proposedStatus: 'completed',
                skills: [
                    {
                        skill: 'HTML5',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Semantic Elements',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What kind of Web Storages do we have?',
                                answer: 'Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'CSS3',
                        rating: 4,
                        questions: [
                            {
                                question: 'What is Preprocessors',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What are Position Properties?',
                                answer: 'Got Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: 'Need to improve css styles'
                    },
                    {
                        skill: 'Javascript',
                        rating: 5,
                        questions: [
                            {
                                question: 'What are Data Types',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Arrow Functions?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'How to handle Asynchronous Events?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'Angular',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Single Page Application?',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Observable and Subject?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'Tree Shaking in Angular?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: 'Good in Angular',
                        suggestions: 'No Suggestions Required'
                    }
                ]
            }
        ]
    },
    {
        name: 'David Warner',
        status: 'rejected',
        round: 'MR',
        id: 'c7',
        job: {
            id: 'j7',
            name: 'Digital Marketing'
        },
        contact: '3333333333',
        email: 'davidwarner@gmail.com',
        experience: '3.8 years',
        interviewer: 'Niranjan Singh',
        scheduledTime: '01 Nov 2020 10:30AM',
        designation: 'Marketing Lead',
        feedback: [
            {
                round: 'FR',
                proposedStatus: 'completed',
                skills: [
                    {
                        skill: 'HTML5',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Semantic Elements',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What kind of Web Storages do we have?',
                                answer: 'Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'CSS3',
                        rating: 4,
                        questions: [
                            {
                                question: 'What is Preprocessors',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What are Position Properties?',
                                answer: 'Got Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: 'Need to improve css styles'
                    },
                    {
                        skill: 'Javascript',
                        rating: 5,
                        questions: [
                            {
                                question: 'What are Data Types',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Arrow Functions?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'How to handle Asynchronous Events?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'Angular',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Single Page Application?',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Observable and Subject?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'Tree Shaking in Angular?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: 'Good in Angular',
                        suggestions: 'No Suggestions Required'
                    }
                ]
            },
            {
                round: 'SR',
                proposedStatus: 'completed',
                skills: [
                    {
                        skill: 'HTML5',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Semantic Elements',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What kind of Web Storages do we have?',
                                answer: 'Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'CSS3',
                        rating: 4,
                        questions: [
                            {
                                question: 'What is Preprocessors',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What are Position Properties?',
                                answer: 'Got Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: 'Need to improve css styles'
                    },
                    {
                        skill: 'Javascript',
                        rating: 5,
                        questions: [
                            {
                                question: 'What are Data Types',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Arrow Functions?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'How to handle Asynchronous Events?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'Angular',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Single Page Application?',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Observable and Subject?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'Tree Shaking in Angular?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: 'Good in Angular',
                        suggestions: 'No Suggestions Required'
                    }
                ]
            },
            {
                round: 'TR',
                proposedStatus: 'completed',
                skills: [
                    {
                        skill: 'HTML5',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Semantic Elements',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What kind of Web Storages do we have?',
                                answer: 'Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'CSS3',
                        rating: 4,
                        questions: [
                            {
                                question: 'What is Preprocessors',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What are Position Properties?',
                                answer: 'Got Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: 'Need to improve css styles'
                    },
                    {
                        skill: 'Javascript',
                        rating: 5,
                        questions: [
                            {
                                question: 'What are Data Types',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Arrow Functions?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'How to handle Asynchronous Events?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'Angular',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Single Page Application?',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Observable and Subject?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'Tree Shaking in Angular?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: 'Good in Angular',
                        suggestions: 'No Suggestions Required'
                    }
                ]
            },
            {
                round: 'MR',
                proposedStatus: 'completed',
                skills: [
                    {
                        skill: 'HTML5',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Semantic Elements',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What kind of Web Storages do we have?',
                                answer: 'Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'CSS3',
                        rating: 4,
                        questions: [
                            {
                                question: 'What is Preprocessors',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What are Position Properties?',
                                answer: 'Got Proficient Answer'
                            }
                        ],
                        comments: '',
                        suggestions: 'Need to improve css styles'
                    },
                    {
                        skill: 'Javascript',
                        rating: 5,
                        questions: [
                            {
                                question: 'What are Data Types',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Arrow Functions?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'How to handle Asynchronous Events?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: '',
                        suggestions: ''
                    },
                    {
                        skill: 'Angular',
                        rating: 3,
                        questions: [
                            {
                                question: 'What is Single Page Application?',
                                answer: 'Answered Well'
                            },
                            {
                                question: 'What is Observable and Subject?',
                                answer: 'Proficient Answer'
                            },
                            {
                                question: 'Tree Shaking in Angular?',
                                answer: 'Answered Well'
                            }
                        ],
                        comments: 'Good in Angular',
                        suggestions: 'No Suggestions Required'
                    }
                ]
            }

        ]
    },

];

const steps = [
    {
        title: 'First Round',
        value: 1,
        key: 'FR'
    },
    {
        title: 'Second Round',
        value: 2,
        key: 'SR'
    },
    {
        title: 'Third Round',
        value: 3,
        key: 'TR'
    },
    {
        title: 'Manager Round',
        value: 4,
        key: 'MR'
    }
]

const mappedSteps = {
    FR: 0,
    SR: 1,
    TR: 2,
    MR: 3
}

const CandidateCard = (): JSX.Element => {

    const [visibleFeedback, setVisibleFeedback] = useState(false);
    const [currentFeedback, setCurrentFeedback] = useState([]);

    const getCurrentStep = (id) => {
        return mappedSteps[id]
    }

    const getRedirectStatus = (status) => {
        if (status === 'completed') {
            return 'finish'
        } else if (status === 'rejected') {
            return 'error';
        } else if (status === 'onhold') {
            return 'wait';
        }
        return 'process';
    }

    const onFeedback = (feedback) => {
        setCurrentFeedback(feedback);
        setVisibleFeedback(true);
    }

    return (
        <Row gutter={[16, 16]} className="candidate-container">
            {
                candidates.map(c => (
                    <Col span={24} key={c.id}>
                        <Card
                            className="candidate-card"
                            actions={[
                                <Row justify="space-between" key={Math.random()} style={{ cursor: 'default' }}>
                                    <Col>
                                        {
                                            c.feedback && c.feedback.length > 0 ? (
                                                <>
                                                    <Button
                                                        type="link"
                                                        className="p-all-0"
                                                        icon={<EyeOutlined />}
                                                        onClick={(): void => onFeedback(c.feedback)}
                                                    >Feedback
                                                    </Button>
                                                    {
                                                        visibleFeedback && (
                                                            <Feedback
                                                                feedback={currentFeedback}
                                                                visible={visibleFeedback}
                                                                onClose={(): void => setVisibleFeedback(false)}
                                                            />
                                                        )
                                                    }
                                                </>
                                            ) : null
                                        }
                                    </Col>
                                    <Col>
                                        <Space>
                                            <Button type="default" size="small" icon={<FileWordOutlined />}>View Resume</Button>
                                            <Button type="default" size="small" icon={<FilePdfOutlined />}>Download</Button>
                                            <Button type="default" size="small" icon={<ShareAltOutlined />}>Share</Button>
                                        </Space>
                                    </Col>
                                </Row>
                            ]}
                        >
                            <Row gutter={[16, 16]}>
                                <Col span={24}>
                                    <Row justify="space-between">
                                        <Col>
                                            <Text className="text-bold">{c.name}</Text>
                                        </Col>
                                        <Col>
                                            <Text className={`card-extra ${c.round}`}>{StatusLabel[c.round]}</Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row>
                                        <Col span={12}>
                                            <Row>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Designation:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small">{c.designation}</Text>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Applied to:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small text-link">{c.job.name}</Text>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Experience:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small">{c.experience}</Text>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Contact Number:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small">{c.contact}</Text>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Email:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small">{c.email}</Text>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col span={12}>
                                            <Row>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Interviewer:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small">{c.interviewer}</Text>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={24} className="text-small m-b-8">
                                                    <Row>
                                                        <Col span={8} className="text-primary text-semibold">Scheduled Time:</Col>
                                                        <Col span={16}>
                                                            <Text className="text-small">{c.scheduledTime}</Text>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Steps
                                        size="small"
                                        current={mappedSteps[c.round]}
                                        status={getRedirectStatus(c.status)}
                                    >
                                        {
                                            steps.map(step => (
                                                <Step
                                                    key={step.value}
                                                    title={step.title}
                                                    description={c.round === step.key ? c.status : ''}
                                                ></Step>
                                            ))
                                        }
                                    </Steps>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default CandidateCard;