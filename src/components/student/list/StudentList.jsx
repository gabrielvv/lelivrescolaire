import React, { useState } from "react";
import { Table, Button, Layout } from "antd";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom'

import "./StudentList.css";
import { start, end } from "./FixedColumns";
import StudentShape from "models/Student/propTypes";
import { CreateForm } from "../forms";

const CreateButton = () => {
  const [isCreateFormVisible, setCreateFormVisibility] = useState(false);
  return (
    <div className="lls-student-list__header-right-section">
      <Button
        type="primary"
        icon="plus"
        onClick={() => setCreateFormVisibility(true)}>
        Ajouter
      </Button>
      <CreateForm
        isFormVisible={isCreateFormVisible}
        setFormVisibility={setCreateFormVisibility}
      />
    </div>
  );
}

const TableWithClickableRow = withRouter(({ history, ...props }) => (
  <Table
    dataSource={props.studentList}
    columns={props.columns}
    onRow={({ id }) => {
      return {
        onClick: () => history.push(`/student/${id}`),
      };
    }}
    pagination={{ pageSize: 50 }}
  />
));

const StudentList = ({ studentList, studentListDisplaySettings }) => {

  const columns = [
    ...start,
    ...studentListDisplaySettings,
    ...end,
  ];

  return (
    <React.Fragment>
      <Layout className="lls-student-list__layout">
        <Layout.Header className="lls-student-list__header">
          <h2 className="lls-student-list__header-title">Mes élèves</h2>
          <CreateButton />
        </Layout.Header>
        <Layout.Content>
          <TableWithClickableRow studentList={studentList} columns={columns} />
        </Layout.Content>
      </Layout>
    </React.Fragment>
  );
};

StudentList.propTypes = {
  studentList: PropTypes.arrayOf(StudentShape),
  studentListDisplaySettings: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dataIndex: PropTypes.string,
    render: PropTypes.func
  }))
};

export default StudentList;
