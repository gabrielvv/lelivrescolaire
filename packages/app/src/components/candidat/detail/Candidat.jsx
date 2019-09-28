import React from "react";
import { Layout, Statistic, Row, Col, Card } from "antd";

import "./Candidat.css";

const { Header } = Layout;

const Candidat = ({ candidat }) => {
    const { currentSession } = candidat;

    return (
        <Layout>
            <Header className="lls-candidat--header">
                <h2>{`${candidat.lastname} ${candidat.firstname}`}</h2>
            </Header>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
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
                            >
                            </Statistic>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};

export default Candidat;