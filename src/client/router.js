// XXX: Deprecated

const React = require('react');
const {BrowserRouter, Route} = require('react-router-dom');
const Application = require('./components/application').default;

const router = (
    <BrowserRouter>
      <Route component={Application} />
    </BrowserRouter>
);

module.exports.default = router;
