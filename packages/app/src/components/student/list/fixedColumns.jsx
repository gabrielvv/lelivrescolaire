import React from "react";
import { Divider, Progress } from "antd";
import { Link } from "react-router-dom";
import { StudentAvatar } from "../avatar/StudentAvatar";
import { withDynamicDisplay } from "../../animations/withDynamicDisplay";
import Success from "../statistics/Success";
import Completion from "../statistics/Completion";

const SuccessWithDynamicDisplay = withDynamicDisplay(Success, "successRate");
const CompletionWithDynamicDisplay = withDynamicDisplay(
  Completion,
  "completion"
);

const start = [
  {
    title: "",
    key: "avatar",
    render: props => <StudentAvatar {...props} />
  },
  {
    title: "Réussite",
    key: "successRate",
    className: "column-session-success",
    render: props => <SuccessWithDynamicDisplay {...props} />
  },
  {
    title: "Avancement",
    key: "completion",
    render: props => <CompletionWithDynamicDisplay {...props} />
  }
  // {
  //   title: "Leçons",
  //   key: "lessons",
  //   dataIndex: "lessons",
  //   render: ({ lessons }) => (
  //     <Statistic
  //   )
  // }
];

const end = [
  {
    title: "Actions",
    key: "action",
    dataIndex: "id",
    render: (id, record) => (
      <span>
        <Link to={`/student/${id}`}>Edit</Link>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    )
  }
];

export { start, end };
