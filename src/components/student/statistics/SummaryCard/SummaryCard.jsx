import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import withDynamicDisplay from "../../../animations/withDynamicDisplay";

import './SummaryCard.css';

const StatisticWithDynamicDisplay = withDynamicDisplay(
  Statistic,
  "value",
  50,
  withDynamicDisplay.CURVES.LINEAR
);

const SummaryCard = ({ ready, inProgress, finished, title }) => (
  <Card title={title}>
    <Row>
      <Col span={8}>
        <StatisticWithDynamicDisplay
          title="En attente"
          valueStyle={{ color: "#cf1322" }}
          value={ready}
        ></StatisticWithDynamicDisplay>
      </Col>
      <Col span={8}>
        <StatisticWithDynamicDisplay
          title="En cours"
          valueStyle={{ color: "orange" }}
          value={inProgress}
        ></StatisticWithDynamicDisplay>
      </Col>
      <Col span={8}>
        <StatisticWithDynamicDisplay
          title="Terminés"
          valueStyle={{ color: "#3f8600" }}
          value={finished}
        ></StatisticWithDynamicDisplay>
      </Col>
    </Row>
  </Card>
);

export default SummaryCard;
