import React from "react";
import { Layout, Tabs, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Student.css";
import { StudentAvatar } from "../avatar/StudentAvatar";
import { withAnimation } from "../../animations/withAnimation";
import { getExerciseCountByStatus } from "models/Student/helpers";
import Summary from "./Summary";
import Info from "./Info";
import StudentPropType from "models/Student/propTypes";

const { Header } = Layout;
const { TabPane } = Tabs;

const StudentName = ({ classes, lastname, firstname }) => {
  return (
    <div className={"lls-student__header-name " + classes}>
      {`${lastname} ${firstname}`}
    </div>
  );
};

const AnimatedStudentName = withAnimation(
  StudentName,
  "lls-student__header-name--transition",
  10
);

const Student = ({ student, previousId, nextId }) => {
  const {
    successRate,
    completion,
    online,
    avatar,
    lastname,
    firstname
  } = student;
  const exerciseCountByStatus = getExerciseCountByStatus(student);
  const lessonCountByStatus = {
    ready: 3,
    inProgress: 5,
    finished: 10
  };

  return (
    <Layout>
      <Header className="lls-student__header">
        <div className="lls-student__header-avatar">
          <StudentAvatar online={online} avatar={avatar}></StudentAvatar>
        </div>
        <AnimatedStudentName lastname={lastname} firstname={firstname} />
        <div className="lls-student__header-right-area">
          <Button.Group size="large">
            <Link to={"/student/" + previousId}>
              <Button type="default">
                <Icon type="left" />
                Précédent
              </Button>
            </Link>
            <Link to={"/student/" + nextId}>
              <Button type="default">
                Suivant
                <Icon type="right" />
              </Button>
            </Link>
          </Button.Group>
        </div>
      </Header>
      <Tabs defaultActiveKey="1" style={{ background: "#FFF" }}>
        <TabPane tab="Résumé" key="1" style={{ background: "#ECECEC" }}>
          <Summary
            exerciseCountByStatus={exerciseCountByStatus}
            lessonCountByStatus={lessonCountByStatus}
          />
        </TabPane>
        <TabPane tab="Exercices" key="2" style={{ background: "#ECECEC" }}>
          <Summary
            exerciseCountByStatus={exerciseCountByStatus}
            lessonCountByStatus={lessonCountByStatus}
          />
        </TabPane>
        <TabPane tab="Informations" key="3" style={{ background: "#ECECEC" }}>
          <Info />
        </TabPane>
      </Tabs>
    </Layout>
  );
};

Student.propTypes = {
  student: PropTypes.instanceOf(StudentPropType),
  previousId: PropTypes.string,
  nextId: PropTypes.string
};

export default Student;
