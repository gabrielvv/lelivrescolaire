import React from 'react'
import { Form, Input, Icon, Button } from 'antd';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const CreateForm = (props) => {
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                props.onSubmit(values);
            }
        });
    };
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

    // Only show error after a field is touched.
    const lastnameError = isFieldTouched('lastname') && getFieldError('lastname');
    const firstnameError = isFieldTouched('firstname') && getFieldError('firstname');
    return (
        <Form layout="inline" onSubmit={handleSubmit}>
            <Form.Item validateStatus={lastnameError ? 'error' : ''} help={lastnameError || ''}>
                {getFieldDecorator('lastname', {
                    rules: [{ required: true, message: 'Veuillez renseigner un Nom!' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Nom"
                    />,
                )}
            </Form.Item>
            <Form.Item validateStatus={firstnameError ? 'error' : ''} help={firstnameError || ''}>
                {getFieldDecorator('firstname', {
                    rules: [{ required: true, message: 'Veuillez renseigner un Prénom!' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Prénom"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                    Soumettre
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Form.create({ name: 'student_creation_form' })(CreateForm);