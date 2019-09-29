import React from "react";
import { Spin, Empty, Button } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import lodashIsEmpty from "lodash/isEmpty";

import EleveList from "./EleveList";
import { InternalError } from "../../errors";

const getEleveListWithDisplaySettings = loader(
  "./getEleveListWithDisplaySettings.gql"
);

const EleveListContainer = () => {
  const { loading, error, data } = useQuery(getEleveListWithDisplaySettings, {
    variables: { classeId: "lls" }
  });

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <InternalError />;
  }

  if (lodashIsEmpty(data.eleveList)) {
    return (
      <Empty
        style={{ padding: 100 }}
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={"Vous n'avez pas de eleves"}
      >
        <Button type="primary">Créer</Button>
      </Empty>
    );
  }

  return <EleveList {...data} />;
};

export default EleveListContainer;
