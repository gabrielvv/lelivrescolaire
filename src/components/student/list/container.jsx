import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";

import StudentList from "./StudentList";
import NoData from "./NoData";
import {
  Query,
  GET_STUDENT_LIST_WITH_DISPLAY_SETTINGS
} from "../../../graphql";

const isEmpty = data =>
  !data || !data.studentList || data.studentList.length === 0;

const StudentListContainer = ({ match }) => {
  const variables = { classId: match.params.classId };
  const render = ({ data }) =>
    isEmpty(data) ? <NoData /> : <StudentList {...data} />;
  return (
    <Query
      query={GET_STUDENT_LIST_WITH_DISPLAY_SETTINGS}
      variables={variables}
      render={render}
    />
  );
};

StudentListContainer.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default StudentListContainer;
