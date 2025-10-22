import React, { useState } from 'react';

const ControlledField = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name ,email, password);
    }

    const handlePasswordOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
        }
        else {
            setError('')
        }
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handleNameOnChange = e => {
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" placeholder='Name'
                    defaultValue={name} onChange={handleNameOnChange} />
                <br />
                <input type="text" name='email' placeholder='Email'
                    defaultValue={email} onChange={handleEmailChange} required />
                <br />
                <input type="password" name="password" placeholder='Password'
                    defaultValue={password} onChange={handlePasswordOnChange} required />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;