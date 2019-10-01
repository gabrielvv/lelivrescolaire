import React, { useState } from "react";
import { Table, Drawer, Button, Layout } from "antd";
import PropTypes from "prop-types";

import "./StudentList.css";
import { start, end } from "./fixedColumns";
import StudentPropType from "models/Student/propTypes";

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
      ></Drawer>
      <Layout style={{ background: "#fff" }}>
        <Layout.Header style={{ background: "#fafafa", boxShadow: "none" }}>
          <Button
            type="primary"
            onClick={() => setDrawerVisibility(true)}>
            Ajouter
          </Button>
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
  studentList: PropTypes.arrayOf(PropTypes.instanceOf(StudentPropType))
};

export default StudentList;
