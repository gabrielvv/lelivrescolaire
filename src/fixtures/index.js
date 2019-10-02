import { students, columns as studentListDisplaySettings } from './db.json';
import activityChartData from './nivo.json';
import { reduceValueFromCollection } from "utils";

const studentList = students.map(student => {
    const lessons =  student.lessons.map(lesson => ({
        ...lesson,
        successRate: reduceValueFromCollection("exercises", "successRate")(lesson),
        completion: reduceValueFromCollection("exercises", "completion")(lesson),
    }));

    return {
        ...student,
        key: student.id,
        lessons,
        avatar: {
            __typename: "Avatar",
            initials: `${student.lastname[0]}${student.firstname[0]}`.toUpperCase(),
            imageSrc: "https://i.pravatar.cc/150?img=" + parseInt(Math.random() * 50)
        },
        isOnline: Math.random() > 0.5,
        successRate: reduceValueFromCollection("lessons", "successRate")({ lessons }),
        completion: reduceValueFromCollection("lessons", "completion")({ lessons })
    };
})

export {
    studentList,
    studentListDisplaySettings,
    activityChartData
}

export default {
    studentList,
    studentListDisplaySettings,
    activityChartData
}