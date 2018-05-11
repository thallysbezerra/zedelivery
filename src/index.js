import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';
import registerServiceWorker from './registerServiceWorker';
import './reset.css';
import './style.css';

ReactDOM.render(<Products />, document.getElementById('root'));
registerServiceWorker();