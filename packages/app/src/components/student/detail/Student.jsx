import React from "react";
import { Layout, Statistic, Row, Col, Card, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";

import "./Student.css";
import { StudentAvatar } from "../avatar/StudentAvatar";
import { withAnimation } from "../../animations/withAnimation";

const { Header } = Layout;

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
  50
);

const Student = ({ student, previousId, nextId }) => {
  const { successRate } = student;
  return (
    <Layout>
      <Header className="lls-student__header">
        <div className="lls-student__header-avatar">
          <StudentAvatar
            online={student.online}
            avatar={student.avatar}
          ></StudentAvatar>
        </div>
        <AnimatedStudentName
          lastname={student.lastname}
          firstname={student.firstname}
        />
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
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              {/* <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#108ee9',
                                    '100%': '#87d068',
                                }}
                                percent={currentSession.successRate}
                            /> */}
              <Statistic
                title="Réussite"
                value={successRate}
                suffix="%"
              ></Statistic>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Student;
