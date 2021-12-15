import './App.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormComponent from './components/FormComponent';
import { FormValuesTypes } from './types';

function App() {
    const [response, setResponse] = useState({ success: false, message: '' });

    const onSubmit = (e: React.FormEvent, formValues: FormValuesTypes): void => {
        e.preventDefault();
        setResponse({ success: true, message: '...sending request' });
        axios
            .post('http://localhost:8080/api/users/create', {
                name: formValues['name'].value,
                surname: formValues['surname'].value,
                email: formValues['email'].value
            })
            .then(function (response) {
                console.log(response);
                response.status === 200
                    ? setResponse({ success: true, message: 'User successfully created' })
                    : setResponse({ success: false, message: '' });
            })
            .catch(function (error) {
                console.log(error.response);
                setResponse({ success: false, message: error.response.data.message });
            });
    };

    return (
        <div className="App">
            <div className="App-header">
                <a href={'http://localhost:8080/api/users'}>List of Users</a>
                <FormComponent onSubmit={onSubmit} />
                {response.message !== '' ? (
                    <h4 className={`response ${!response.success ? 'red' : null}`}>{response.message}</h4>
                ) : null}
            </div>
        </div>
    );
}

export default App;
