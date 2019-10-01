import React from "react";
import { Progress } from "antd";
import lodashIsEmpty from "lodash/isEmpty";

export default ({ lessons, completion }) => (
  <Progress
    width={50}
    type="circle"
    format={percent => (lodashIsEmpty(lessons) ? "n/a" : percent + "%")}
    strokeColor={{
      "0%": "#108ee9",
      "100%": "#87d068"
    }}
    percent={completion}
  />
);
