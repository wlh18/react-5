import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import HashRouter
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    // Wrap App with HashRouter
    <HashRouter>
        <App />
    </HashRouter>, 
document.getElementById('root'));