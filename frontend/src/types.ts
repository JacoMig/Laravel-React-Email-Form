import React from 'react';

export type FormComponentTypes = {
    onSubmit: (e: React.FormEvent, formValues: FormValuesTypes) => void;
};

export type FormValueTypes = {
    value: string;
    error: boolean;
    message: string;
};

export type FormValuesTypes = {
    name: FormValueTypes;
    surname: FormValueTypes;
    email: FormValueTypes;
};

export type typesOfInput = 'name' | 'surname' | 'email';
