import React from "react";
import { loader } from "graphql.macro";
import ReactRouterPropTypes from 'react-router-prop-types';

import StudentList from "./StudentList";
import NoData from './NoData';
import { Query } from '../../../graphql'

const getStudentListWithDisplaySettings = loader(
  "graphql/getStudentListWithDisplaySettings.gql"
);

const isEmpty = (data) => !data || !data.studentList || data.studentList.length === 0;

const StudentListContainer = ({ match }) => {
  const variables = { classId: match.params.classId };
  const render = ({ data }) => (
    isEmpty(data)
    ? <NoData />
    : <StudentList {...data} />
  );
  return (
    <Query
      query={getStudentListWithDisplaySettings}
      variables={variables}
      render={render}
    />
   
  );
};

StudentListContainer.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
}

export default StudentListContainer;
