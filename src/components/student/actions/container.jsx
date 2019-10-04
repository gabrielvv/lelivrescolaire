import React from "react";
import { message } from "antd";
import { loader } from "graphql.macro";
import PropTypes from 'prop-types';

import { afterDelete } from 'graphql/local-hack';
import Actions from "./Actions";
import { Mutation } from "../../../graphql";

const deleteStudentMutation = loader("graphql/deleteStudent.gql");

const ActionsContainer = ({ studentId, onDeleteOk }) => {

  const updateFn = (
    cache,
    {
      data: { deleteStudent: deletedStudent }
    }
  ) => {
    // DEV ONLY we rely on the graphql cache for fixtures
    afterDelete(studentId);
    if (deletedStudent.done) {
      onDeleteOk && onDeleteOk();
      message.success("Elève supprimé");
    }
  };

  return (
    <Mutation
      name="deleteStudent"
      mutation={deleteStudentMutation}
      render={({ deleteStudent }) => (
        <Actions studentId={studentId} onDeleteOk={() =>
          deleteStudent({
            variables: { id: studentId }
          })} />
      )}
      updateFn={updateFn}
    />
  );
};

ActionsContainer.propTypes = {
  studentId: PropTypes.string.isRequired,
  onDeleteOk: PropTypes.func
}

export default ActionsContainer;
