import React, { useState } from 'react';
import { FormComponentTypes, FormValuesTypes, typesOfInput } from '../types';
import InputComponent from './InputComponent';

const initFormValues: FormValuesTypes = {
    name: {
        value: '',
        error: true,
        message: 'please fill the name input'
    },
    surname: {
        value: '',
        error: true,
        message: 'please fill the surname input'
    },
    email: {
        value: '',
        error: true,
        message: 'please enter a valid email'
    }
};

function validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const validateFormObjectValue = (type: typesOfInput, value: string): boolean => {
    let result = true;
    switch (type) {
        case 'name':
            value === '' ? (result = true) : (result = false);
            break;
        case 'surname':
            value === '' ? (result = true) : (result = false);
            break;
        case 'email':
            !validateEmail(value) ? (result = true) : (result = false);
            break;
        default:
    }
    return result;
};

const FormComponent: React.FC<FormComponentTypes> = (props: FormComponentTypes) => {
    const [formValues, setFormValues] = useState<FormValuesTypes>(initFormValues);

    const handleChangeInputComponent = (type: typesOfInput, value: string): void => {
        const formValuesValidation = validateFormObjectValue(type, value);
        setFormValues({ ...formValues, [type]: { ...formValues[type], value, error: formValuesValidation } });
    };

    const handleSubmitForm = (e: React.FormEvent): void => {
        e.preventDefault();
        if (Object.keys(formValues).filter((key) => !formValues[key as typesOfInput].error))
            props.onSubmit(e, formValues);
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <InputComponent
                type="text"
                error={formValues['name'].error}
                name="name"
                message={formValues['name'].message}
                handleChange={handleChangeInputComponent}
            />
            <InputComponent
                type="text"
                error={formValues['surname'].error}
                name="surname"
                message={formValues['surname'].message}
                handleChange={handleChangeInputComponent}
            />
            <InputComponent
                type="text"
                error={formValues['email'].error}
                name="email"
                message={formValues['email'].message}
                handleChange={handleChangeInputComponent}
            />
            <button type={'submit'}>Save</button>
        </form>
    );
};

export default FormComponent;
