import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { message } from "antd";
import { loader } from "graphql.macro";
import PropTypes from 'prop-types';

import { afterDelete } from 'graphql/local-hack';
import Actions from "./Actions";

const deleteStudentMutation = loader("graphql/deleteStudent.gql");

const ActionsContainer = ({ studentId, onDeleteOk }) => {
  const [deleteStudent] = useMutation(deleteStudentMutation, {
    update(
      cache,
      {
        data: { deleteStudent: deletedStudent }
      }
    ) {
      // DEV ONLY we rely on the graphql cache for fixtures
      afterDelete(studentId);
      if (deletedStudent.done) {
        onDeleteOk && onDeleteOk();
        message.success("Elève supprimé");
      }
    }
  });

  return <Actions studentId={studentId} onDeleteOk={() =>
    deleteStudent({
      variables: { id: studentId }
    })} />;
};

ActionsContainer.propTypes = {
  studentId: PropTypes.string.isRequired,
  onDeleteOk: PropTypes.func
}

export default ActionsContainer;
