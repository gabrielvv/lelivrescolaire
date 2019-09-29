import React from "react";
import { Avatar, Badge } from "antd";

export const StudentAvatar = ({
  online,
  avatar: { initials, imageSrc: src }
}) => {
  const avatar = src ? (
    <Avatar shape="square" src={src} size="large"></Avatar>
  ) : (
    <Avatar shape="square" style={{ backgroundColor: "#87d068" }} size="large">
      {initials}
    </Avatar>
  );

  return <Badge status={online ? "success" : "warning"}>{avatar}</Badge>;
};
