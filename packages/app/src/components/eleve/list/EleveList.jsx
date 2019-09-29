import React from "react";
import { Table } from "antd";

import "./EleveList.css";
import { start, end } from "./fixedColumns";

const EleveList = ({ eleveList, eleveListDisplaySettings }) => {
  const columns = [...start, ...eleveListDisplaySettings, ...end];

  return <Table dataSource={eleveList} columns={columns} />;
};

export default EleveList;
