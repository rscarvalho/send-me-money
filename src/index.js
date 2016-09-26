import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import Routes from './Routes';
import {Provider} from 'react-redux';
import createStore from './utils/createStore';

import './index.css';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{Routes}</Router>
  </Provider>,
  document.getElementById('root')
);
