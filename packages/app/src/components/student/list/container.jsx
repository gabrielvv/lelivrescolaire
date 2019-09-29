import React from "react";
import { Spin, Empty, Button } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import lodashIsEmpty from "lodash/isEmpty";

import StudentList from "./StudentList";
import { InternalError } from "../../errors";

const getStudentListWithDisplaySettings = loader(
  "./getStudentListWithDisplaySettings.gql"
);

const StudentListContainer = ({ match }) => {
  const { loading, error, data } = useQuery(getStudentListWithDisplaySettings, {
    variables: { classId: match.params.classId }
  });

  if (loading) {
    return <Spin />;
  }

  if (error) {
    console.error(error);
    return <InternalError />;
  }

  if (!data || !data.studentList || lodashIsEmpty(data.studentList)) {
    return (
      <Empty
        style={{ padding: 100 }}
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={"Vous n'avez pas d'élèves"}
      >
        <Button type="primary">Créer</Button>
      </Empty>
    );
  }

  return <StudentList {...data} />;
};

export default StudentListContainer;
