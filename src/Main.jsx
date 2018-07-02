import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

//Components
import App from './components/App';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    }
}

export default Main;