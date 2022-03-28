import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Shared/Header';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/site.css';

export default function App (){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activePage, setActivePage] = useState("is-active");
    
    return (
        <>
            <Header />
            <div className="content">
                { isLoggedIn ? <Home /> : <Login /> }
            </div>
        </>
        
    );
}

ReactDOM.render(<App />, document.getElementById('root'));