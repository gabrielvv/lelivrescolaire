import React from "react";
import StudentAvatar from "../avatar/StudentAvatar";
import withDynamicDisplay from "../../animations/withDynamicDisplay";
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
    render: function AvatarCell(props) { return <StudentAvatar {...props} />; }
  },
  {
    title: "Réussite",
    key: "successRate",
    className: "column-session-success",
    render: function SuccessCell(props) { return <SuccessWithDynamicDisplay {...props} />; }
  },
  {
    title: "Avancement",
    key: "completion",
    render: function CompletionCell(props) { return <CompletionWithDynamicDisplay {...props} />; }
  }
];

const end = [];

export { start, end };
