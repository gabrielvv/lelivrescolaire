import React from "react";
import StudentAvatar from "../avatar/StudentAvatar";
import withDynamicDisplay from "../../animations/withDynamicDisplay";
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

const end = [
  {
    title: "Actions",
    key: "action",
    width: 200,
    dataIndex: "id",
    render: function ActionsCell(id) { return <Actions id={id} /> }
  }
];

export { start, end };
