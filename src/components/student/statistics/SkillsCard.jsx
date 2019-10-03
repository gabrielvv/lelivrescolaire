import React from 'react'
import { Card, Row, Col, Progress } from 'antd';

import withDynamicDisplay from 'components/animations/withDynamicDisplay';

const AnimatedProgress = withDynamicDisplay(
    Progress, 
    "percent",
    5,
    withDynamicDisplay.CURVES.LINEAR
);

const SkillsCard = () => (
    <Card title="Compétences">
        <Col>
            <Row gutter={16}>
                <Col>
                    <div>Mathématiques</div>
                </Col>
                <Col>
                    <AnimatedProgress percent={25} showInfo={false} />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col>
                    <div>Français</div>
                </Col>
                <Col>
                    <AnimatedProgress percent={80} showInfo={false} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Histoire</div>
                </Col>
                <Col>
                    <AnimatedProgress percent={50} showInfo={false} />
                </Col>
            </Row>
        </Col>
    </Card>
)

export default SkillsCard;