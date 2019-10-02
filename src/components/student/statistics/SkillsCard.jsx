import React from 'react'
import { Card, Row, Col, Progress } from 'antd';

const SkillsCard = () => (
    <Card title="Compétences">
        <Col>
            <Row gutter={16}>
                <Col>
                    <div>Mathématiques</div>
                </Col>
                <Col>
                    <Progress percent={25} showInfo={false} />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col>
                    <div>Français</div>
                </Col>
                <Col>
                    <Progress percent={80} showInfo={false} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Histoire</div>
                </Col>
                <Col>
                    <Progress percent={50} showInfo={false} />
                </Col>
            </Row>
        </Col>
    </Card>
)

export default SkillsCard;