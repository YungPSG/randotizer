import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Shared/Header';
import Login from './Components/Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Login />
            </>
            
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));