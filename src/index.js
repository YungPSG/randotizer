import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Shared/Header';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/site.css';

export default function App() {
  /* uncomment this when we're ready to set it; linting complains that
   * setIsLoggedIn was not used
   */
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isLoggedIn = true;

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
