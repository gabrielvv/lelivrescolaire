import {
  EmailAddressResolver as EmailAddress,
  DateTimeResolver as DateTime
} from "graphql-scalars";
import { loader } from "graphql.macro";
import uuidv4 from 'uuid/v4';

import cache from './cache';

const getStudentListQuery = loader(
  "graphql/getStudentListWithDisplaySettings.gql"
);

const getStudentListFromCache = () => {
  const { studentList } = cache.readQuery({
    query: getStudentListQuery,
    variables: { classId: "1" }
  });
  return studentList;
}

export const resolvers = {
  EmailAddress,
  DateTime,
  // DEV ONLY these resolvers are used to simulate an interaction with a real Graphql API
  Query: {
    next: (root, { id }) => {
      const studentList = getStudentListFromCache();
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
      const studentList = getStudentListFromCache();
      const studentIndex = studentList.findIndex(
        ({ id: studentId }) => studentId === id
      );
      const previousIndex = studentIndex - 1;
      if (previousIndex >= 0) {
        return studentList[previousIndex]
      }
      return studentList[studentList.length - 1];
    },
    student: (root, { id }) => getStudentListFromCache().find(({ id: studentId }) => studentId === id) || null,
  },
  Mutation: {
    // eslint-disable-next-line no-unused-vars
    deleteStudent: (root, { id }) => ({
      __typename: "MutationResult",
      done: true
    }),
    createStudent: (root, { input }) => ({
      __typename: "Student",
      ...input,
      email: "foo@bar.com",
      id: uuidv4(),
      key: uuidv4(),
      avatar: {
        __typename: "Avatar",
        initials: `${input.lastname[0]}${input.firstname[0]}`.toUpperCase(),
        imageSrc: "https://i.pravatar.cc/150?img=" + parseInt(Math.random() * 50)
      },
      isOnline: Math.random() > 0.5,
      completion: 0,
      successRate: 0,
      lessons: [],
      classId: "1",
    })
  }
};
