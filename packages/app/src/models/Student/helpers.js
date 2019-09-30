export const getExerciseCountByStatus = student => {
  const exerciseList = student.lessons.reduce((acc, lesson) => {
    lesson.exercises.forEach(exercise => acc.push(exercise));
    return acc;
  }, []);

  return exerciseList.reduce(
    (countByStatus, exercise) => {
      switch (exercise.status) {
        case "IN_PROGRESS":
          countByStatus.inProgress++;
          break;
        case "READY":
          countByStatus.ready++;
          break;
        case "FINISHED":
          countByStatus.finished++;
          break;
      }
      return countByStatus;
    },
    { finished: 0, inProgress: 0, ready: 0 }
  );
};
