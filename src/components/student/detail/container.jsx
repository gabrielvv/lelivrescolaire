import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";

import Student from "./Student";
import { Query, GET_STUDENT } from "../../../graphql";

const StudentContainer = ({ match }) => {
  const variables = { id: match.params.studentId };

  return (
    <Query
      query={GET_STUDENT}
      variables={variables}
      render={({ data }) => <Student {...data} />}
    />
  );
};

StudentContainer.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default StudentContainer;
