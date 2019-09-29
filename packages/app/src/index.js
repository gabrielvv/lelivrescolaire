import React from "react";
import ReactDOM from "react-dom";

import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import "antd/dist/antd.css";
import "./index.css";
import App from "./components/main";
import { defaults, resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  resolvers,
  typeDefs
});

cache.writeData({
  data: defaults
});

const ConnectedApp = () => (
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById("root"));

