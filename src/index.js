import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './style.css';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'
import Routing from './routes.js'

ReactDOM.render(
    <BrowserRouter>
        <Routing />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();