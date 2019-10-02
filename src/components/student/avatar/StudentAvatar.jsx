import React from "react";
import { Avatar, Badge, Skeleton } from "antd";
import useImage from "use-image";
import PropTypes from 'prop-types';
import "./StudentAvatar.css";

const StudentAvatar = ({
  isOnline,
  shouldDisplayStatus = true,
  avatar: { initials, imageSrc: src }
}) => {
  const [, status] = useImage(src);

  if (src && status !== "loaded") {
    return (
      <Badge className="ant-badge--skeleton" status={isOnline ? "success" : "warning"}>
        <Skeleton
          loading={true}
          avatar={true}
          paragraph={false}
          title={false}
          shape="square"
          size="large"
        />
      </Badge>
    );
  }

  const avatar = src ? (
    <Avatar shape="square" src={src} size="large"></Avatar>
  ) : (
    <Avatar shape="square" style={{ backgroundColor: "#87d068" }} size="large">
      {initials}
    </Avatar>
  );

  return shouldDisplayStatus 
    ? <Badge status={isOnline ? "success" : "warning"}>{avatar}</Badge>
    : avatar;
};

StudentAvatar.propTypes = {
  shouldDisplayStatus: PropTypes.bool.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.shape({
    imageSrc: PropTypes.string,
    initials: PropTypes.string.isRequired
  })
}

export default StudentAvatar;