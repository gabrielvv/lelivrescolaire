import React from "react";
import { Row, Col, Card, Progress } from "antd";

import SummaryCard from "../statistics/SummaryCard";

const Summary = ({ lessonCountByStatus, exerciseCountByStatus }) => (
  <React.Fragment>
    <div style={{ padding: "30px" }}>
      <Row gutter={16}>
        <Col span={12}>
          <SummaryCard title="Leçons" {...lessonCountByStatus} />
        </Col>
        <Col span={12}>
          <SummaryCard title="Exercices" {...exerciseCountByStatus} />
        </Col>
      </Row>
    </div>
    <div className="" style={{ padding: "0 30px 30px 30px" }}>
      <Row gutter={16}>
        <Col span={12}>
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
        </Col>
        <Col span={12}></Col>
      </Row>
    </div>
  </React.Fragment>
);

export default Summary;
