import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { message } from "antd";
import { loader } from "graphql.macro";

import Actions from "./Actions";

const deleteStudentMutation = loader("graphql/deleteStudent.gql");
const getStudentListQuery = loader("graphql/getStudentListWithDisplaySettings.gql");

const ActionsContainer = ({ id }) => {
  const [deleteStudent] = useMutation(deleteStudentMutation, {
    // DEV ONLY we rely on the graphql cache for fixtures
    update(
      cache,
      {
        data: { deleteStudent }
      }
    ) {
      const { studentList, studentListDisplaySettings } = cache.readQuery({
        query: getStudentListQuery,
        variables: { classId: "1" }
      });
      cache.writeQuery({
        query: getStudentListQuery,
        variables: { classId: "1" },
        data: {
          studentList: studentList.filter(student => student.id !== id),
          studentListDisplaySettings
        }
      });

      if (deleteStudent.done) {
        message.success("Elève supprimé");
      }
    }
  });

  const onDeleteOk = () =>
    deleteStudent({
      variables: { id }
    });

  return <Actions id={id} onDeleteOk={onDeleteOk} />;
};

export default ActionsContainer;
