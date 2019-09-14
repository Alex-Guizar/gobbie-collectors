import './custom.scss';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App />, document.querySelector('#root')
);
