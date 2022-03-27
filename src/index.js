import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Shared/Header';

export class App extends React.Component {
    render() {
        return (
            <>
            hello world
                <Header />
            </>
            
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));