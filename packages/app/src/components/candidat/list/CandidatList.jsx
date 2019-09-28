import React from "react";
import { Table } from "antd";

import "./CandidatList.css";
import { start, end } from './fixedColumns';

const CandidatList = ({ candidatList, candidatListDisplaySettings }) => {
  const columns = [
    ...start,
    ...candidatListDisplaySettings,
    ...end
  ];

  return <Table dataSource={candidatList} columns={columns} />;
};

export default CandidatList;
