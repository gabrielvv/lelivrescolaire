import React from 'react'
import { loader } from "graphql.macro";
import { useMutation } from "@apollo/react-hooks";
import { message } from "antd";

import CreateForm from './CreateForm';

const createStudentMutation = loader(
  "graphql/createStudent.gql"
);
const getStudentListQuery = loader("graphql/getStudentListWithDisplaySettings.gql");

const CreateFormContainer = (props) => {
  const [createStudent] = useMutation(createStudentMutation, {
    // DEV ONLY we rely on the graphql cache for fixtures
    update(
      cache,
      {
        data: { createStudent: newStudent }
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
          studentList: [...studentList, newStudent],
          studentListDisplaySettings
        }
      });

      if (newStudent) {
        message.success("Elève créé");
      }
    }
  });

  const onSubmit = ({ lastname, firstname }) => {
    props.onSubmit();
    createStudent({
      variables: {
        input: {
          lastname,
          firstname,
        }
      }
    });
  }

  return <CreateForm onSubmit={onSubmit} />
}

export default CreateFormContainer;