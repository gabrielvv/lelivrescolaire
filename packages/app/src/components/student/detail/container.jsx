import React from "react";
import { Spin } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

import Student from "./Student";
import { InternalError, NotFound } from "../../errors";

const getStudent = loader("./getStudent.gql");

const StudentContainer = ({ match }) => {
  const { loading, error, data } = useQuery(getStudent, {
    variables: { id: match.params.studentId }
  });

  if (loading) {
    return <Spin />;
  }

  if (error) {
    console.error(error);
    return <InternalError />;
  }

  if (!data || !data.student) {
    return <NotFound />;
  }

  const props = {
    student: data.student,
    previousId: data.previous.id,
    nextId: data.next.id
  };

  return <Student {...props} />;
};

export default StudentContainer;
