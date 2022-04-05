import React, { useState } from 'react';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const submitButton = 'Submit';

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
      <form className="login-form nav-text-solar" onSubmit={handleSubmit}>
        <h1 className="login-title">Create an Account: </h1>
        <label htmlFor="username">
          Username:
          <input type="text" className="login-input" onChange={handleUserNameChange} value={userName} id="username" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="text" className="login-input" onChange={handlePasswordChange} value={password} id="password" />
        </label>
        <div className="login-button-wrapper">
          <input type="submit" value={submitButton} />
        </div>
      </form>
    </div>
  );
}
