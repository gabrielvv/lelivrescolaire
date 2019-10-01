import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "graphql/client";
import "antd/dist/antd.css";
import "./index.css";
import App from "./components/app";

const ConnectedApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById("root"));
