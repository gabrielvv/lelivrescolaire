import {
  EmailAddressResolver as EmailAddress,
  DateTimeResolver as DateTime,
  JSONObjectResolver as JsonObject
} from "graphql-scalars";

import { fixtureCreate, fixtureUpdate } from '../fixtures'
import { getStudentListFromCache } from 'graphql/local-hack';

export const resolvers = {
  EmailAddress,
  DateTime,
  JsonObject,
  // DEV ONLY these resolvers are used to simulate an interaction with a real Graphql API
  Query: {
    next: (root, { id }) => {
      const { studentList } = getStudentListFromCache();
      const studentIndex = studentList.findIndex(
        ({ id: studentId }) => studentId === id
      );
      const nextIndex = studentIndex + 1;
      if (nextIndex < studentList.length) {
        return studentList[nextIndex]
      }
      return studentList[0];
    },
    previous: (root, { id }) => {
      const { studentList } = getStudentListFromCache();
      const studentIndex = studentList.findIndex(
        ({ id: studentId }) => studentId === id
      );
      const previousIndex = studentIndex - 1;
      if (previousIndex >= 0) {
        return studentList[previousIndex]
      }
      return studentList[studentList.length - 1];
    },
    student: (root, { id }) => getStudentListFromCache().studentList.find(({ id: studentId }) => studentId === id) || null,
  },
  Mutation: {
    // eslint-disable-next-line no-unused-vars
    deleteStudent: (root, { id }) => ({
      __typename: "MutationResult",
      done: true
    }),
    createStudent: (root, { input }) => fixtureCreate(input),
    updateStudent: (root, { input }) => fixtureUpdate(input),
  }
};
