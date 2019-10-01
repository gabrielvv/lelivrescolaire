import ApolloClient from "apollo-boost";

import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import cache from "./cache";

const client = new ApolloClient({
  cache,
  resolvers,
  typeDefs
});

export default client;
