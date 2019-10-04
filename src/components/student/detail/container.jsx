import React from "react";
import { loader } from "graphql.macro";
import ReactRouterPropTypes from 'react-router-prop-types';

import Student from "./Student";
import { Query } from '../../../graphql';

const getStudent = loader("graphql/getStudent.gql");

const StudentContainer = ({ match }) => {
  const variables = { id: match.params.studentId };

  return (
    <Query
      query={getStudent}
      variables={variables}
      render={({ data }) => (
        <Student {...data} />
      )}
    />
  );
};

StudentContainer.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
}

export default StudentContainer;
