import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import "antd/dist/antd.css";
import "./index.css";
import App from "./components/app";
import { defaults, resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "https://dog-graphql-api.glitch.me/graphql",
  cache,
  resolvers,
  typeDefs
});

cache.writeData({
  data: defaults
});


ReactDOM.render(<App />, document.getElementById("root"));
