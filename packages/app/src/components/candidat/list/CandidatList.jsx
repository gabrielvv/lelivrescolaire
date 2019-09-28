import React from "react";
import { Table, Spin, Empty, Button } from "antd";
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import lodashIsEmpty from 'lodash/isEmpty';

import "./CandidatList.css";
import { start, end } from './fixedColumns';
import { InternalError } from '../../errors';

const getCandidatListWithDisplaySettings = loader('./getCandidatListWithDisplaySettings.gql');

const CandidatList = () => {
  const { loading, error, data } = useQuery(getCandidatListWithDisplaySettings, {
    variables: { organisationId: "lls" }
  });

  if (loading) {
    return <Spin/>;
  }

  if (error) {
    return <InternalError/>
  }
  
  if (lodashIsEmpty(data.candidatList)) {
    return (
      <Empty 
        style={{ padding: 100 }}
        image={Empty.PRESENTED_IMAGE_SIMPLE} 
        description={"Vous n'avez pas de candidats"}>
        <Button type="primary">Créer</Button>
      </Empty>
    );
  }

  const columns = [
    ...start,
    ...data.candidatListDisplaySettings,
    ...end
  ];

  return <Table dataSource={data.candidatList} columns={columns} />;
};

export default CandidatList;
