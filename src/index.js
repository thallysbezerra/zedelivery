import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import './reset.css';
import './style.css';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();