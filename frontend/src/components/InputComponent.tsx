import React, { useState } from 'react';
import { typesOfInput } from '../types';

type InputComponentTypes = {
    type: string;
    name: typesOfInput;
    handleChange: (type: typesOfInput, value: string) => void;
    error: boolean;
    message: string;
};

const InputComponent: React.FC<InputComponentTypes> = (props: InputComponentTypes) => {
    const [inputVal, setInputVal] = useState<string>('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setInputVal(value);
        props.handleChange(props.name, value);
    };
    return (
        <div>
            <label>{props.name}</label>
            <input type={props.type} onChange={onChange} value={inputVal} />
            {props.error ? <p className="error">{props.message}</p> : null}
        </div>
    );
};

export default InputComponent;
