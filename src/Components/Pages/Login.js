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
        <div className="login-form-wrapper">
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Username: <input type="text" onChange={handleUserNameChange} value={userName}/></label>
                <label>Password: <input type="text" onChange={handlePasswordChange} value={password}/></label>
                <input type="submit" value={submitButton}/>
            </form>
        </div>
    )
}