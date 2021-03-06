import {
  EmailAddressTypeDefinition as EmailAddressScalar,
  DateTimeTypeDefinition as DateTimeScalar,
  JSONObjectDefinition as JSONObject
} from "graphql-scalars";

export const typeDefs = `
  ${EmailAddressScalar}
  ${DateTimeScalar}
  ${JSONObject}

  enum ExerciseStatusEnum {
    READY
    IN_PROGRESS
    STAND_BY
    FINISHED
  }

  enum SubjectEnum {
    HISTOIRE
    PHYSIQUE
    MATHEMATIQUES
    GEOGRAPHIE
    ART
    MUSIQUE
    SPORT
    ECONOMIE
    INFORMATIQUE
    SCIENCES_SOCIALES
  }

  enum TraitTypeEnum {
    OPERATIONS
    ALGORITHME
    DEVELOPEMMENT_PERSONNEL
    BOUGER
    JOUER
    COMPTER
    CREATIVITE
    LOGIQUE
    ALGEBRE_RELATIONNEL
    FONCTIONS
    EQUATION
    STATISTIQUE
    LECTURE
    ECRITURE
    ORAL
  }

  type ExerciseSchedule {
    autoStartDate: DateTime
    maxDuration: Int
    isTimeboxed: Boolean
  }

  type Exercise {
    exerciseId: ID!
    name: String!
    completion: Int!
    description: String!
    timeSpent: Int
    startedAt: DateTime
    finishedAt: DateTime
    status: ExerciseStatusEnum!
    successRate: Int
    schedule: ExerciseSchedule
  }

  type Trait {
    traitType: TraitTypeEnum!
    ratio: Float!
  }

  type Lesson {
    completion: Int!
    successRate: Int!
    exercises: [Exercise!]!
  }

  type Avatar {
    imageSrc: String
    initials: String
  }

  type Activity {
    x: DateTime!
    y: Float!
  }

  type Student {
    id: ID!
    isOnline: Boolean
    classId: String!
    lastname: String!
    firstname: String!
    email: String!
    lessons: [Lesson]!
    completion: Int!
    successRate: Int!
    avatar: Avatar
    activity: [Activity!]!
    skills: JSONObject
  }

  type Column {
    classId: String!
    title: ID!
    dataIndex: String!
    key: String!
  }

  type MutationStatus {
    done: Boolean
  }

  type Query {
    student(id: ID!): Student
    next(id: ID!): Student
    previous(id: ID!): Student
    studentList(classId: ID!): [Student]
    studentListDisplaySettings(classId: ID!): [Column]
  }

  input CreateStudentInput {
    lastname: String!
    firstname: String!
    classId: ID!
  }

  input UpdateStudentInput {
    lastname: String!
    firstname: String!
    id: ID!
  }

  type Mutation {
    deleteStudent(id: ID!): MutationStatus
    createStudent(input: CreateStudentInput): Student
    updateStudent(input: UpdateStudentInput): Student
  }

`;
