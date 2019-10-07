import { loader } from "graphql.macro";

const GET_STUDENT = loader("./getStudent.gql");
const GET_STUDENT_LIST_WITH_DISPLAY_SETTINGS = loader(
  "./getStudentListWithDisplaySettings.gql"
);

export { GET_STUDENT, GET_STUDENT_LIST_WITH_DISPLAY_SETTINGS };
