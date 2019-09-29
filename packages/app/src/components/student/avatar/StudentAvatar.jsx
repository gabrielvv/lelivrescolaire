import React from "react";
import { Avatar, Badge, Skeleton } from "antd";
import useImage from "use-image";
import "./StudentAvatar.css";

export const StudentAvatar = ({
  online,
  avatar: { initials, imageSrc: src }
}) => {
  const [image, status] = useImage(src);

  if (status !== "loaded") {
    return (
      <Skeleton
        loading={true}
        avatar={true}
        paragraph={false}
        title={false}
        shape="square"
        size="large"
      />
    );
  }

  const avatar = src ? (
    <Avatar shape="square" src={src} size="large"></Avatar>
  ) : (
    <Avatar shape="square" style={{ backgroundColor: "#87d068" }} size="large">
      {initials}
    </Avatar>
  );

  return <Badge status={online ? "success" : "warning"}>{avatar}</Badge>;
};
