import React from "react";
import { Divider, Button, Modal } from "antd";
import { Link } from "react-router-dom";

export default ({ id, onDeleteOk }) => {
  const showDeleteConfirm = () => {
    Modal.confirm({
      title: "Êtes vous sûr de vouloir supprimer cet élève?",
      content: "",
      okText: "Oui",
      okType: "danger",
      cancelText: "Non",
      onOk: onDeleteOk
    });
  };

  return (
    <span>
      <Link to={`/student/${id}`}>Editer</Link>
      <Divider type="vertical" />
      <Button type="link" onClick={showDeleteConfirm}>
        Supprimer
      </Button>
    </span>
  );
};
