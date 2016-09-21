import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './containers/App';
import About from './containers/About';
import AppIndex from './containers/AppIndex';
import Form from './containers/Form';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppIndex} />
    <Route path="about" component={About} />
    <Route path="form" component={Form}>
      <IndexRedirect to="/form/step-1" />
      <Route path="step-1" />
      <Route path="step-2" />
      <Route path="step-3" />
      <Route path="confirm" />
    </Route>
  </Route>
);
