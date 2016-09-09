import React from 'react';
import Path from 'path';
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server';

// For module reloading on dev
let layout;
let routes;
let Store;

export default reactRouter;
export const unloadModules = (_, __, next) => (unloadModules_(), next());
export const loadModules = (_, __, next) => (loadModules_(), next());

function unloadModules_() {
  var srcPath = Path.resolve(__dirname, '..');
  Object.keys(require.cache)
    .filter(m => m.startsWith(srcPath))
    .forEach(m => delete require.cache[m]);
}

function loadModules_() {
  layout = require('../layout').default;
  routes = require('../router').default;
  Store = require('../stores/application').default;
}

function reactRouter(req, res, next) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const data = {
        title: 'Express',
        messages: ['yeah!', 'baam!', 'baaa!'],
      };
      // Injection point of initial data in server-side.
      // XXX: Other way?
      Store._state = data;
      const html = renderToString(<RouterContext {...renderProps} />);
      Store._state = null;
      res.status(200).send(layout([data, html]));
    } else {
      next();
    }
  });
}
