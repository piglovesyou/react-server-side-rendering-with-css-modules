const {render} = require('react-dom');
const Store = require('./stores/application').default;
const React = require('react');
const {BrowserRouter, Route} = require('react-router-dom');
const Application = require('./components/application').default;

// XXX: Workaround for libsass bug that doesn't recognize ":global()".
require('./sass/global.scss');

// Injection point of initial data in client-side.
Object.assign(Store._state, window.__initialData);

render((
    <BrowserRouter>
      <Route component={Application} />
    </BrowserRouter>
), document.getElementById('application-container'));
