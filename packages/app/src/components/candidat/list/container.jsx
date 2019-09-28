import React from "react";
import { Spin, Empty, Button } from "antd";
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import lodashIsEmpty from 'lodash/isEmpty';

import CandidatList from './CandidatList';
import { InternalError } from '../../errors';

const getCandidatListWithDisplaySettings = loader('./getCandidatListWithDisplaySettings.gql');

const CandidatListContainer = () => {
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

  return <CandidatList {...data}/>;
};

export default CandidatListContainer;
