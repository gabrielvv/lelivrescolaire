import React, { useState } from "react";
import { Table, Drawer, Button } from "antd";
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
      <div className="add-student-btn-container">
        <Button
          type="primary"
          className="add-student-btn"
          onClick={() => setDrawerVisibility(true)}
        >
          Ajouter
        </Button>
      </div>
      <Table
        dataSource={studentList}
        columns={columns}
        pagination={{ pageSize: 50 }}
      />
    </React.Fragment>
  );
};

StudentList.propTypes = {
  studentList: PropTypes.arrayOf(PropTypes.instanceOf(StudentPropType))
};

export default StudentList;
