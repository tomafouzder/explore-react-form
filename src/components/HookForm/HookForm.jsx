import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {

    const [name, handleOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submitted', name, email, password);
  }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name' onChange={handleOnChange} defaultValue={name} />
                <br />
                <input type="email" name="email" placeholder='Email' defaultValue={email} onChange={emailOnChange} />
                <br />
                <input type="password" name="password" placeholder='Password' defaultValue={password} onChange={passwordOnChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;