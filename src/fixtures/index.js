import uuidv4 from 'uuid/v4';
import {
    students,
    columns as studentListDisplaySettings
} from './db.json';
import {
    reduceValueFromCollection
} from "utils";

const studentList = students.map(student => {
    const lessons = student.lessons.map(lesson => ({
        ...lesson,
        successRate: reduceValueFromCollection("exercises", "successRate")(lesson),
        completion: reduceValueFromCollection("exercises", "completion")(lesson),
    }));

    const activity = student.activity.map(obj => ({
        ...obj,
        __typename: 'Activty'
    }))

    return {
        ...student,
        key: student.id,
        lessons,
        avatar: {
            __typename: "Avatar",
            initials: `${student.lastname[0]}${student.firstname[0]}`.toUpperCase(),
            imageSrc: `https://i.pravatar.cc/150?img=${student.id}`
        },
        isOnline: Math.random() > 0.5,
        successRate: reduceValueFromCollection("lessons", "successRate")({
            lessons
        }),
        completion: reduceValueFromCollection("lessons", "completion")({
            lessons
        }),
        skills: {
            "Histoire": parseInt(Math.random() * 100),
            "Mathématiques": parseInt(Math.random() * 100),
            "Français": parseInt(Math.random() * 100),
            "Géographie": parseInt(Math.random() * 100),
            "Physique": parseInt(Math.random() * 100)
        },
        activity
    };
})

const fixtureCreate = (input) => ({
    __typename: "Student",
    ...input,
    email: "foo@bar.com",
    id: uuidv4(),
    key: uuidv4(),
    avatar: {
        __typename: "Avatar",
        initials: `${input.lastname[0]}${input.firstname[0]}`.toUpperCase(),
        imageSrc: null
    },
    isOnline: Math.random() > 0.5,
    completion: 0,
    successRate: 0,
    lessons: [],
    classId: "1",
});

const fixtureUpdate = (input) => {
    const updatedStudent = studentList.find(student => student.id === input.id);
    return {
        ...updatedStudent,
        ...input
    }
}

export {
    studentList,
    studentListDisplaySettings,
    fixtureCreate,
    fixtureUpdate
}

export default {
    studentList,
    studentListDisplaySettings,
}