import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import ReactRouterPropTypes from 'react-router-prop-types';

import Student from "./Student";
import withLoadingErrorData from '../../hoc/withLoadingErrorData';

const getStudent = loader("graphql/getStudent.gql");

const StudentWithDataFetching = withLoadingErrorData(Student)

const StudentContainer = ({ match }) => {
  const { loading, error, data } = useQuery(getStudent, {
    variables: { id: match.params.studentId }
  });

  const props = {
    extractPropsFromData: (data) => ({
      student: data.student,
      previousId: data.previous.id,
      nextId: data.next.id,
    }),
    nilCheck: (data) => !data.student,
    loading,
    error,
    data,
  };

  return <StudentWithDataFetching {...props} />;
};

StudentContainer.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
}

export default StudentContainer;
