import React from "react";
import { StudentAvatar } from "../avatar/StudentAvatar";
import { withDynamicDisplay } from "../../animations/withDynamicDisplay";
import Success from "../statistics/Success";
import Completion from "../statistics/Completion";
import Actions from "./Actions";

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
    width: 200,
    dataIndex: "id",
    render: id => <Actions id={id} />
  }
];

export { start, end };
