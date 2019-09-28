export const typeDefs = `
  enum ConstraintTypeEnum {
    ANGULAR
    ANGULARJS
    WEB_FRONT_END
    WEB_BACK_END
    FULLSTACK
    REACTJS
    VUEJS
    FUNCTIONAL_PROGRAMMING
    REACTIVE_PROGRAMMING
    DATA_SCIENCE
    IA
    MACHINE_LEARNING
    COMPUTER_VISION
    PYTHON
    JAVASCRIPT
    NODEJS
    MOBILE_DEVELOPMENT
    CLOUD_COMPUTING
    AWS
    GCP
    GRAPHQL
    NEO4J
    SQL
    MONGODB
    DBA
    ARCHITECTURE
    SPRING
    JEE
    JAVA
    KOTLIN
    SWIFT
    OCAML
    DOCKER
    KUBERNETES
    DEVOPS
    ALGORITHM
    UML
  }

  enum SessionStatusEnum {
    TO_BE_DEFINED
    DRAFT
    OPEN
    IN_PROGRESS
    FINISHED
    CLOSED
  }

  enum ExerciseStatusEnum {
    READY
    IN_PROGRESS
    FINISHED
  }

  type Exercice {
    name: String!,
    description: String!,
    constraints: [ConstraintEnum!]!
    status: ExerciseStatusEnum!
    successRate: Int
    timeLimit: Int
    timeSpent: Int
  }

  type Constraint {
    constraintType: ConstraintTypeEnum!
    ratio: Float!
  }

  type Session {
    constraints: [Constraint!]!
    status: SessionStatusEnum!
    successRate: Int
    timeSpent: Int
    exercises: [Exercice]
  }

  type Candidat {
    id: ID!
    lastname: String!
    firstname: String!
    email: String!
    currentSession: Session
    sessions: [Session!]!
    tags: [String]!
  }

  type Column {
    title: String!
    dataIndex: String!
    key: String!
  }

  type Query {
    candidat(id: ID!): Candidat
    candidatList(organisationId: ID!): [Candidat]
    candidatListDisplaySettings(organisationId: ID!): [Column]
  }
`;