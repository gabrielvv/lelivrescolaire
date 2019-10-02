import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import lodashIsEmpty from "lodash/isEmpty";
import ReactRouterPropTypes from 'react-router-prop-types';

import StudentList from "./StudentList";
import withLoadingErrorData from '../../hoc/withLoadingErrorData';

const getStudentListWithDisplaySettings = loader(
  "graphql/getStudentListWithDisplaySettings.gql"
);

const StudentListWithDataFetching = withLoadingErrorData(StudentList);

const StudentListContainer = ({ match }) => {
  const { loading, error, data } = useQuery(getStudentListWithDisplaySettings, {
    variables: { classId: match.params.classId }
  });

  const props =  {
    loading, 
    error, 
    data,
    emptyCheck: (data) => lodashIsEmpty(data.studentList),
    extractPropsFromData: (data) => ({
      ...data
    })
  }

  return <StudentListWithDataFetching {...props} />;
};

StudentListContainer.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
}

export default StudentListContainer;
