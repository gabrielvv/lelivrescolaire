export const typeDefs = `
  type Candidat {
    isLiked: Boolean
  }

  type Query {
    candidatList: [Candidat]
  }
`;