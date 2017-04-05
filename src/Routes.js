import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import HomeContainer from './containers/Home/HomeContainer';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
);

export default Routes;