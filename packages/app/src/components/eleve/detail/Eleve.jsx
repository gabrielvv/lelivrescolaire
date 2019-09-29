import React from "react";
import { Layout, Statistic, Row, Col, Card } from "antd";

import "./Eleve.css";

const { Header } = Layout;

const Eleve = ({ eleve }) => {
  const { currentSession } = eleve;

  return (
    <Layout>
      <Header className="lls-eleve--header">
        <h2>{`${eleve.lastname} ${eleve.firstname}`}</h2>
      </Header>
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              {/* <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#108ee9',
                                    '100%': '#87d068',
                                }}
                                percent={currentSession.successRate}
                            /> */}
              <Statistic
                title="Réussite"
                value={currentSession.successRate}
                suffix="%"
              ></Statistic>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Eleve;
