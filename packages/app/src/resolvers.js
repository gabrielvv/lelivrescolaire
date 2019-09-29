import {
  EmailAddressResolver as EmailAddress,
  DateTimeResolver as DateTime
} from "graphql-scalars";
import { students as studentList, columns, images } from "fixtures/db.json";

import {
  reduceValueFromCollection,
  reduceValueFromSubCollection
} from "./utils";

export const defaults = {
  studentList: [],
  studentListDisplaySettings: []
};

export const resolvers = {
  EmailAddress,
  DateTime,
  Query: {
    next: (root, { id }) => {
      const next = studentList.find(
        ({ id: studentId }) => studentId == parseInt(id) + 1
      );
      return next ? next : studentList[0];
    },
    previous: (root, { id }) => {
      const previous = studentList.find(
        ({ id: studentId }) => studentId == parseInt(id) - 1
      );
      return previous ? previous : studentList[studentList.length - 1];
    },
    student: (root, { id }) =>
      studentList.find(({ id: studentId }) => studentId === id),
    studentList: (root, { classId }) =>
      studentList.filter(student => student.classId === classId),
    studentListDisplaySettings: (root, { classId }) =>
      columns.filter(col => col.classId === classId)
  },
  Student: {
    online: () => Math.random() > 0.5,
    avatar: ({ lastname, firstname }) => ({
      __typename: "Avatar",
      initials: `${lastname[0]}${firstname[0]}`.toUpperCase(),
      imageSrc: "https://i.pravatar.cc/150?img=" + parseInt(Math.random() * 50)
    }),
    successRate: reduceValueFromSubCollection(
      "lessons",
      "exercises",
      "successRate"
    ),
    completion: reduceValueFromSubCollection(
      "lessons",
      "exercises",
      "completion"
    )
  },
  Lesson: {
    successRate: reduceValueFromCollection("exercises", "successRate"),
    completion: reduceValueFromCollection("exercises", "completion")
  }
};
