import React from "react";
import { Divider, Button, Modal } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Actions = ({ studentId, onDeleteOk, onEdit }) => {
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
      {/* <Link to={`/student/${studentId}`}> */}
        <Button type="primary" ghost icon="edit" onClick={(event) => {
          event.stopPropagation();
          onEdit(studentId)
        }}></Button>
      {/* </Link> */}
      <Divider type="vertical"/>
      <Button type="danger" ghost onClick={showDeleteConfirm} icon="delete"></Button>
    </span>
  );
};

Actions.propTypes = {
  studentId: PropTypes.string.isRequired,
  onDeleteOk: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default Actions;