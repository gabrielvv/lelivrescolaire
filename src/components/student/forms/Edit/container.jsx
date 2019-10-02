import React, { useState } from 'react'
import { loader } from "graphql.macro";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { message } from "antd";
import PropTypes from 'prop-types';

import { afterUpdate } from 'graphql/local-hack'
import EditForm from './EditForm';

const updateStudentMutation = loader(
  "graphql/updateStudent.gql"
);
const getStudentQuery = loader("graphql/getStudent.gql");

const EditFormContainer = ({ studentId, setFormVisibility, isFormVisible }) => {
  const [formRef, setFormRef] = useState();
  const { loading, error, data } = useQuery(getStudentQuery, { variables: { id: studentId } });
  const [updateStudent] = useMutation(updateStudentMutation, {
    update(
      cache,
      {
        data: { updateStudent: updatedStudentFragment }
      }
    ) {
      // DEV ONLY we rely on the graphql cache for fixtures
      afterUpdate(updatedStudentFragment)
      if (updatedStudentFragment) {
        message.success("Mise à jour réussie");
      }
    }
  });

  const onCancel = () => setFormVisibility(false);

  const onOk = () => {
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

  return data && data.student
    ? <EditForm
      wrappedComponentRef={setFormRef}
      onOk={onOk}
      onCancel={onCancel}
      student={data.student}
      isFormVisible={isFormVisible} />
    : null;
}

EditFormContainer.propTypes = {
  studentId: PropTypes.string,
  setFormVisibility: PropTypes.func.isRequired,
  isFormVisible: PropTypes.bool.isRequired
}

export default EditFormContainer;