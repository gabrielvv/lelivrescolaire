import React, { useState } from 'react'
import { loader } from "graphql.macro";
import { useMutation } from "@apollo/react-hooks";
import { message } from "antd";
import PropTypes from 'prop-types';

import { afterCreate } from 'graphql/local-hack';
import CreateForm from './CreateForm';

const createStudentMutation = loader(
  "graphql/createStudent.gql"
);

const CreateFormContainer = ({ setFormVisibility, isFormVisible }) => {
  const [formRef, setFormRef] = useState();
  const [createStudent] = useMutation(createStudentMutation, {
    update(
      cache,
      {
        data: { createStudent: createdStudent }
      }
    ) {
      // DEV ONLY we rely on the graphql cache for fixtures
      afterCreate(createdStudent);
      if (createdStudent) {
        message.success("Elève créé");
      }
    }
  });

  const onCancel = () => setFormVisibility(false);

  const onCreate = () => {
    const { form } = formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      createStudent({
        variables: {
          input: {
            ...values
          }
        }
      });
      form.resetFields();
      setFormVisibility(false);
    });
  }

  return <CreateForm
    wrappedComponentRef={setFormRef}
    onCreate={onCreate}
    onCancel={onCancel}
    isFormVisible={isFormVisible} />
}

CreateFormContainer.propTypes = {
  setFormVisibility: PropTypes.func.isRequired,
  isFormVisible: PropTypes.bool.isRequired
}

export default CreateFormContainer;