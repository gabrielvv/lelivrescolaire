import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import { withDynamicDisplay } from "../../animations/withDynamicDisplay";

const StatisticWithDynamicDisplay = withDynamicDisplay(
  Statistic,
  "value",
  50,
  "linear"
);

const SummaryCard = ({ ready, inProgress, finished, title }) => (
  <Card title={title}>
    <Row gutter={15}>
      <Col span={5}>
        <StatisticWithDynamicDisplay
          title="En attente"
          valueStyle={{ color: "#cf1322" }}
          value={ready}
        ></StatisticWithDynamicDisplay>
      </Col>
      <Col span={5}>
        <StatisticWithDynamicDisplay
          title="En cours"
          valueStyle={{ color: "orange" }}
          value={inProgress}
        ></StatisticWithDynamicDisplay>
      </Col>
      <Col span={5}>
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
