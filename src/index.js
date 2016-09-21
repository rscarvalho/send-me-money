import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './Routes';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>{Routes}</Router>,
  document.getElementById('root')
);
