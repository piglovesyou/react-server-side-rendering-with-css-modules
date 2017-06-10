const React = require('react');
const Path = require('path');
const {StaticRouter, matchPath,} = require('react-router');
const {renderToString} = require('react-dom/server');

// For module reloading on dev
let layout;
let Store;
let Application;
loadModules_();

module.exports.defaultRouteMiddleware = defaultRouteMiddleware;
module.exports.unloadModulesMiddleware = (_, __, next) => (unloadModules_(), next());
module.exports.loadModulesMiddleware = (_, __, next) => (loadModules_(), next());

function defaultRouteMiddleware(req, res) {
  const data = {
    title: 'Express',
    messages: ['yeah!', 'baam!', 'baaa!'],
  };

  Store._state = data;
  const html = renderToString(React.createElement(StaticRouter, {
    location: req.url,
    context: {}
  }, React.createElement(Application, data)));
  Store._state = null;

  // TODO: Handling redirect and 404
  res.status(200).send(layout([data, html]));
}

function unloadModules_() {
  const srcPath = Path.resolve(__dirname, '..');
  Object.keys(require.cache)
      .filter(m => m.startsWith(srcPath))
      .forEach(m => delete require.cache[m]);
}

function loadModules_() {
  layout = require('../client/layout').default;
  Store = require('../client/stores/application').default;
  require('babel-register'); // For only JSXs in '../components'
  Application = require('../client/components/application').default;
}

