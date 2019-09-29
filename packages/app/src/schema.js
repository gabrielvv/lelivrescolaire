import { EmailAddressScalar, DateTimeScalar } from "@okgrow/graphql-scalars";

export const typeDefs = `
  ${EmailAddressScalar}
  ${DateTimeScalar}

  enum ExerciseStatusEnum {
    READY
    IN_PROGRESS
    FINISHED
  }

  type ExerciseScheduling {
    autoStartDate: DateTime
    duration: Int
  }

  type Exercise {
    name: String!,
    description: String!,
    constraints: [ConstraintEnum!]!
    status: ExerciseStatusEnum!
    successRate: Int
    scheduling: ExerciseSchedule
    timeSpent: Int
  }

  type Constraint {
    constraintType: ConstraintTypeEnum!
    ratio: Float!
  }

  type Eleve {
    id: ID!
    lastname: String!
    firstname: String!
    email: String!
  }

  type Column {
    title: String!
    dataIndex: String!
    key: String!
  }

  type Query {
    eleve(id: ID!): Eleve
    eleveList(classeId: ID!): [Eleve]
    eleveListDisplaySettings(classeId: ID!): [Column]
  }
`;
