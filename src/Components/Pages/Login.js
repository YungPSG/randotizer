import React, {useState} from 'react';

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const submitButton = "Enter maybe?"

    function handleSubmit() {
        console.log(userName + password);
    }

    function handleUserNameChange() {
        setUserName(userName);
    }

    function handlePasswordChange() {
        setPassword(password);
    }
    
    return (
        <h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleUserNameChange} value={userName}/>
                <input type="text" onChange={handlePasswordChange} value={password}/>
                <input type="submit" value={submitButton}/>
            </form>
        </h1>
    )
}