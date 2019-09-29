import React from "react";
import { Table } from "antd";

import "./StudentList.css";
import { start, end } from "./fixedColumns";

const StudentList = ({ studentList, studentListDisplaySettings }) => {
  const columns = [...start, ...studentListDisplaySettings, ...end];

  return (
    <Table
      dataSource={studentList}
      columns={columns}
      pagination={{ pageSize: 50 }}
    />
  );
};

export default StudentList;
