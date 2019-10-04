import React, { useState } from 'react'
import { loader } from "graphql.macro";
import { message } from "antd";
import PropTypes from 'prop-types';

import { afterUpdate } from 'graphql/local-hack'
import EditForm from './EditForm';
import { Query, Mutation } from '../../../../graphql';

const updateStudentMutation = loader(
  "graphql/updateStudent.gql"
);
const getStudentQuery = loader("graphql/getStudent.gql");

const EditFormContainer = ({ studentId, setFormVisibility, isFormVisible }) => {
  const [formRef, setFormRef] = useState();

  const updateFn = (
    cache,
    {
      data: { updateStudent: updatedStudentFragment }
    }
  ) => {
    // DEV ONLY we rely on the graphql cache for fixtures
    afterUpdate(updatedStudentFragment)
    if (updatedStudentFragment) {
      message.success("Mise à jour réussie");
    }
  }

  const onCancel = () => setFormVisibility(false);

  const onOk = (updateStudent) => () => {
    const { form } = formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      updateStudent({
        variables: {
          input: {
            ...values,
            id: studentId
          }
        }
      });
      form.resetFields();
      setFormVisibility(false);
    });
  }

  return (
    <Query
      query={getStudentQuery}
      variables={{ id: studentId }}
      render={({ data: { student } }) => (
        <Mutation
          name="updateStudent"
          mutation={updateStudentMutation}
          updateFn={updateFn}
          render={({ updateStudent }) => (
            <EditForm
              wrappedComponentRef={setFormRef}
              onOk={onOk(updateStudent)}
              onCancel={onCancel}
              student={student}
              isFormVisible={isFormVisible} />
          )}
        />
      )}
    />
  );
}

EditFormContainer.propTypes = {
  studentId: PropTypes.string,
  setFormVisibility: PropTypes.func.isRequired,
  isFormVisible: PropTypes.bool.isRequired
}

export default EditFormContainer;