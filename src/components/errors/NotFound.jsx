import React from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

export default () => (
  <Result
    status="404"
    title="404"
    subTitle="Cette page n'existe pas"
    extra={
      <Link to="/">
        <Button type="primary">Retour à l'accueil</Button>
      </Link>
    }
  />
);
