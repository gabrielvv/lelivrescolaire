import { loader } from "graphql.macro";

const DELETE_STUDENT = loader("./deleteStudent.gql");
const CREATE_STUDENT = loader("./createStudent.gql");
const UPDATE_STUDENT = loader("./updateStudent.gql");

export { DELETE_STUDENT, CREATE_STUDENT, UPDATE_STUDENT };
