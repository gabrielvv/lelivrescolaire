import React from "react";
import { Modal, Form, Input, Row } from 'antd';
import PropTypes from 'prop-types';

import StudentShape from 'models/Student/propTypes';
import StudentAvatar from "../../avatar/StudentAvatar";
import './EditForm.css'

class EditForm extends React.Component {
    render() {
        const { isFormVisible, onCancel, onOk, form, student } = this.props;
        const { getFieldDecorator, resetFields } = form;
        return (
            <Modal
                visible={isFormVisible}
                okText="Enregistrer"
                onCancel={() => {
                    resetFields();
                    onCancel();
                }}
                onOk={onOk}
            >
                <div className="lls-edit-form__header">
                    <StudentAvatar 
                        shouldDisplayStatus={false}
                        isOnline={student.isOnline} 
                        avatar={student.avatar} 
                    />
                </div>
                <Form layout="vertical">
                    <Form.Item label="Nom">
                        {getFieldDecorator('lastname', {
                            rules: [{ required: true, message: 'Veuillez renseigner un nom' }],
                            initialValue: student.lastname
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Prénom">
                        {getFieldDecorator('firstname', {
                            rules: [{ required: true, message: 'Veuillez renseigner un prénom' }],
                            initialValue: student.firstname
                        })(<Input />)}
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}

EditForm.propTypes = {
    student: StudentShape,
    onCancel: PropTypes.func.isRequired,
    onOk: PropTypes.func.isRequired,
    isFormVisible: PropTypes.bool.isRequired
}

const WrappedCreateForm = Form.create({ name: 'edit_student_modal' })(EditForm)

export default WrappedCreateForm;