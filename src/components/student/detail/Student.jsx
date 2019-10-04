import React from "react";
import { Layout, Tabs, Icon, Button } from "antd";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./Student.css";
import StudentAvatar from "../avatar/StudentAvatar";
import withAnimation from "../../animations/withAnimation";
import { getExerciseCountByStatus } from "models/Student/helpers";
import Summary from "./Summary";
import StudentShape from "models/Student/propTypes";
import Actions from "../actions";
import StudentName from './StudentName';

const { Header } = Layout;
const { TabPane } = Tabs;

const AnimatedStudentName = withAnimation(
  StudentName,
  "lls-student__header-name--transition",
  10
);

const ActionsWithRedirectOnDelete = withRouter(({ 
  history, ...props 
}) => <Actions studentId={props.studentId} onDeleteOk={() => history.push(`/`)}/>);

const Student = ({ student, next: { id: nextId }, previous: { id: previousId } }) => {
  const { 
    id, 
    isOnline, 
    avatar, 
    lastname, 
    firstname, 
    activity,
    skills
  } = student;
  const exerciseCountByStatus = getExerciseCountByStatus(student);
  const lessonCountByStatus = {
    ready: 3,
    inProgress: 5,
    finished: 10
  };

  return (
    <Layout className="lls-student">
      <Header className="lls-student__header">
        <div className="lls-student__header-avatar">
          <StudentAvatar isOnline={isOnline} avatar={avatar} shouldDisplayStatus={true}></StudentAvatar>
        </div>
        <AnimatedStudentName isOnline={isOnline} lastname={lastname} firstname={firstname} />
        <div className="lls-student__header-right-area">
          <div>
            <Button.Group size="large" style={{ minWidth: 100 }}>
              <Link to={"/student/" + previousId}>
                <Button type="default">
                  <Icon type="left" />
                  <span className="lls-student-selector__text">Précédent</span>
                </Button>
              </Link>
              <Link to={"/student/" + nextId}>
                <Button type="default">
                  <span className="lls-student-selector__text">Suivant</span>
                  <Icon type="right" />
                </Button>
              </Link>
            </Button.Group>
          </div>
          <ActionsWithRedirectOnDelete studentId={id} />
        </div>
      </Header>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Résumé" key="1">
          <Summary
            exerciseCountByStatus={exerciseCountByStatus}
            lessonCountByStatus={lessonCountByStatus}
            activity={activity}
            skills={skills}
          />
        </TabPane>
        <TabPane disabled tab="Exercices" key="2">
        </TabPane>
      </Tabs>
    </Layout>
  );
};

Student.propTypes = {
  student: StudentShape,
  previous: PropTypes.object.isRequired,
  next: PropTypes.object.isRequired
};

export default Student;
