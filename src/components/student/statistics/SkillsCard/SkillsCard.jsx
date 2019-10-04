import React from 'react'
import { Card, Row, Col, Progress } from 'antd';

import withDynamicDisplay from 'components/animations/withDynamicDisplay';
import './SkillsCard.css'

const AnimatedProgress = withDynamicDisplay(
    Progress, 
    "percent",
    5,
    withDynamicDisplay.CURVES.LINEAR
);

const SkillsCard = () => (
    <Card title="Compétences">
        <Col>
            <Row>
                <Col>
                    <div>Mathématiques</div>
                </Col>
                <Col>
                    <AnimatedProgress className="lls-weak" percent={5} showInfo={false} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Physique</div>
                </Col>
                <Col>
                    <AnimatedProgress className="lls-weak" percent={25} showInfo={false} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Histoire</div>
                </Col>
                <Col>
                    <AnimatedProgress className="lls-good" percent={50} showInfo={false} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Français</div>
                </Col>
                <Col>
                    <AnimatedProgress className="lls-excellent" percent={80} showInfo={false} />
                </Col>
            </Row>
        </Col>
    </Card>
)

export default SkillsCard;