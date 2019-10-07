import React, { useState } from "react";
import { message } from "antd";
import PropTypes from "prop-types";

import { afterCreate } from "graphql/local-state";
import CreateForm from "./CreateForm";
import { Mutation, CREATE_STUDENT } from "../../../../graphql";

const CreateFormContainer = ({ setFormVisibility, isFormVisible }) => {
  const [formRef, setFormRef] = useState();
  const updateFn = (cache, { data: { createStudent: createdStudent } }) => {
    // DEV ONLY we rely on the graphql cache for fixtures
    afterCreate(createdStudent);
    if (createdStudent) {
      message.success("Elève créé");
    }
  };

  const onCancel = () => setFormVisibility(false);

  const onCreate = createStudent => () => {
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
  };

  return (
    <Mutation
      name="createStudent"
      mutation={CREATE_STUDENT}
      render={({ createStudent }) => (
        <CreateForm
          wrappedComponentRef={setFormRef}
          onCreate={onCreate(createStudent)}
          onCancel={onCancel}
          isFormVisible={isFormVisible}
        />
      )}
      updateFn={updateFn}
    />
  );
};

CreateFormContainer.propTypes = {
  setFormVisibility: PropTypes.func.isRequired,
  isFormVisible: PropTypes.bool.isRequired
};

export default CreateFormContainer;
