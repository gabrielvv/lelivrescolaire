import React, { useState } from "react";
import { Table, Drawer, Button, Layout } from "antd";
import PropTypes from "prop-types";

import "./StudentList.css";
import { start, end } from "./FixedColumns";
import StudentShape from "models/Student/propTypes";
import CreateForm from "../forms";

const StudentList = ({ studentList, studentListDisplaySettings }) => {
  const [drawerIsVisible, setDrawerVisibility] = useState(false);
  const columns = [...start, ...studentListDisplaySettings, ...end];
  const onClose = () => setDrawerVisibility(false);

  return (
    <React.Fragment>
      <Drawer
        title="Ajouter un élève"
        width={720}
        onClose={onClose}
        visible={drawerIsVisible}
      >
        <CreateForm onSubmit={() => onClose()}/>
      </Drawer>
      <Layout style={{ background: "#fff" }}>
        <Layout.Header className="header">
          <h2 className="header__title">Mes élèves</h2>
          <div className="header__right-section">
            <Button
              type="primary"
              icon="plus"
              onClick={() => setDrawerVisibility(true)}>
              Ajouter
          </Button>
          </div>
        </Layout.Header>
        <Layout.Content>
          <Table
            dataSource={studentList}
            columns={columns}
            pagination={{ pageSize: 50 }}
          />
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
