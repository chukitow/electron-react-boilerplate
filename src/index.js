import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'config/icons';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
