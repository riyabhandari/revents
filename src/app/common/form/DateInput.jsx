import React from 'react'
import { Form, Label } from 'semantic-ui-react';

const DateInput = ({
    input,
    width,
    placeholder,
    meta:{touched,error},
}) => {
    return (
        <Form.Field error={touched && !!error}>
        <input {...input} placeholder={placeholder} type='date'></input>
        {touched && error && <Label basic color='red'>{error}</Label>}
        </Form.Field>
    )
}

export default DateInput;