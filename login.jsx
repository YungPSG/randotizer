import React from 'react';

export class Login extends React.Component {
    render() {
        return (
            <h1>
                Login Page
                <input type="text">Username:</input>
                <input type="text">Password:</input>
                <button>Submit</button>
            </h1>
        );
    }
}