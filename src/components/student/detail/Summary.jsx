import React from "react";
import { Row, Col } from "antd";
import PropTypes from 'prop-types'

import { SummaryCard, SkillsCard, ActivityCard } from "../statistics";

const Summary = ({ skills, activity, lessonCountByStatus, exerciseCountByStatus }) => (
  <div className="lls-student__summary-section">
    <Row gutter={24}>
      <Col xs={24} sm={24} md={12} xl={12} className="lls-student__summary-sub-section">
        <SummaryCard title="Leçons" {...lessonCountByStatus} />
      </Col>
      <Col xs={24} sm={24} md={12} xl={12} className="lls-student__summary-sub-section">
        <SummaryCard title="Exercices" {...exerciseCountByStatus} />
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xs={24} sm={24} md={12} xl={12} className="lls-student__summary-sub-section">
        <SkillsCard skills={skills}/>
      </Col>
      <Col xs={24} sm={24} md={12} xl={12} className="lls-student__summary-sub-section">
        <ActivityCard activity={activity}/>
      </Col>
    </Row>
  </div>
);

Summary.propTypes = {
  skills: PropTypes.object.isRequired
}

export default Summary;
