import React from "react";
import { Layout, Spin, Progress, Statistic, Row, Col, Card } from "antd";
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import "./Candidat.css";
import { InternalError } from "../../errors";

const { Header, Content } = Layout;
const getCandidat = loader('./getCandidat.gql');

const Candidat = ({ match }) => {
    const { loading, error, data } = useQuery(getCandidat, {
        variables: { id: match.params.candidatId }
    });

    if (loading) {
        return <Spin />;
    }

    if (error) {
        return <InternalError />
    }

    const { candidat } = data;
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