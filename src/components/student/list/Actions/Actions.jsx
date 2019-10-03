import React, { useState } from "react";
import { Divider, Button, Modal } from "antd";
// import { Link } from "react-router-dom";
import { EditForm } from "../../forms"
import PropTypes from "prop-types";

const Actions = ({ studentId, onDeleteOk }) => {
  const [isEditFormVisible, setEditFormVisibility] = useState(false);
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
    <span className="lls-student__actions" onClick={(event) => event.stopPropagation()}>
       <EditForm
        studentId={studentId}
        isFormVisible={isEditFormVisible}
        setFormVisibility={setEditFormVisibility}
      />
      {/* <Link to={`/student/${studentId}`}> */}
        <Button type="primary" ghost icon="edit" onClick={(event) => {
          event.stopPropagation();
          setEditFormVisibility(true)
        }}></Button>
      {/* </Link> */}
      <Divider type="vertical"/>
      <Button type="danger" ghost onClick={showDeleteConfirm} icon="delete"></Button>
    </span>
  );
};

Actions.propTypes = {
  studentId: PropTypes.string.isRequired,
  onDeleteOk: PropTypes.func.isRequired
}

export default Actions;