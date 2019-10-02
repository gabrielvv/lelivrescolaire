import React from "react";
import { Modal, Form, Input } from 'antd';

class CreateForm extends React.Component {
    render() {
        const { isFormVisible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={isFormVisible}
                title="Enregistrer un nouvel élève"
                okText="Enregistrer"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <Form.Item label="Nom">
                        {getFieldDecorator('lastname', {
                            rules: [{ required: true, message: 'Veuillez renseigner un nom' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Prénom">
                        {getFieldDecorator('firstname', {
                            rules: [{ required: true, message: 'Veuillez renseigner un prénom' }],
                        })(<Input />)}
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}

const WrappedCreateForm = Form.create({ name: 'create_student_modal' })(CreateForm)

export default WrappedCreateForm;