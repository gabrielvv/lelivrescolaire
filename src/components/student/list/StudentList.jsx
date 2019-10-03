import React, { useState } from "react";
import { Table, Button, Layout } from "antd";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom'

import "./StudentList.css";
import { start, end } from "./FixedColumns";
import StudentShape from "models/Student/propTypes";
import { CreateForm } from "../forms";

const StudentList = ({ studentList, studentListDisplaySettings }) => {
  const [isCreateFormVisible, setCreateFormVisibility] = useState(false);

  const columns = [
    ...start,
    ...studentListDisplaySettings,
    ...end,
  ];

  const TableWithClickableRow = withRouter(({ history }) => (
    <Table
      dataSource={studentList}
      columns={columns}
      onRow={({ id }) => {
        return {
          onClick: () => history.push(`/student/${id}`),
        };
      }}
      pagination={{ pageSize: 50 }}
    />
  ));

  return (
    <React.Fragment>
      <CreateForm
        isFormVisible={isCreateFormVisible}
        setFormVisibility={setCreateFormVisibility}
      />
      <Layout className="lls-student-list__layout">
        <Layout.Header className="lls-student-list__header">
          <h2 className="lls-student-list__header-title">Mes élèves</h2>
          <div className="lls-student-list__header-right-section">
            <Button
              type="primary"
              icon="plus"
              onClick={() => setCreateFormVisibility(true)}>
              Ajouter
          </Button>
          </div>
        </Layout.Header>
        <Layout.Content>
          <TableWithClickableRow />
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
