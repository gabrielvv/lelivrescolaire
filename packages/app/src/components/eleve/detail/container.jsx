import React from "react";
import { Spin } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

import Eleve from "./Eleve";
import { InternalError } from "../../errors";

const getEleve = loader("./getEleve.gql");

const EleveContainer = ({ match }) => {
  const { loading, error, data } = useQuery(getEleve, {
    variables: { id: match.params.eleveId }
  });

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <InternalError />;
  }

  return <Eleve {...data} />;
};

export default EleveContainer;
