import cache from "./cache";
import { GET_STUDENT_LIST_WITH_DISPLAY_SETTINGS } from "./queries";

const getStudentListFromCache = () =>
  cache.readQuery({
    query: GET_STUDENT_LIST_WITH_DISPLAY_SETTINGS,
    variables: {
      classId: "1"
    }
  });

const writeStudentListToCache = (studentList, studentListDisplaySettings) =>
  cache.writeQuery({
    query: GET_STUDENT_LIST_WITH_DISPLAY_SETTINGS,
    variables: {
      classId: "1"
    },
    data: {
      studentList,
      studentListDisplaySettings
    }
  });

const afterUpdate = updatedStudentFragment => {
  const { studentList, studentListDisplaySettings } = getStudentListFromCache();
  const index = studentList.findIndex(
    student => student.id === updatedStudentFragment.id
  );
  studentList[index] = {
    ...studentList[index],
    ...updatedStudentFragment
  };
  writeStudentListToCache(studentList, studentListDisplaySettings);
};

const afterCreate = createdStudent => {
  const { studentList, studentListDisplaySettings } = getStudentListFromCache();

  writeStudentListToCache(
    [...studentList, createdStudent],
    studentListDisplaySettings
  );
};

const afterDelete = deletedStudentId => {
  const { studentList, studentListDisplaySettings } = getStudentListFromCache();
  writeStudentListToCache(
    studentList.filter(student => student.id !== deletedStudentId),
    studentListDisplaySettings
  );
};

export {
  afterUpdate,
  afterCreate,
  afterDelete,
  getStudentListFromCache,
  writeStudentListToCache
};
