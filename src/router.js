import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import Application from './components/application';
import About from './components/about';
import Home from './components/home';
import Toolbar from './components/toolbar';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="about" component={About}></Route>
    </Route>
  </Router>
);

export default router;
