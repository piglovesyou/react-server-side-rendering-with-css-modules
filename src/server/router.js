require('babel-register'); // For only JSXs in '../components'

const React = require('react');
const Path = require('path');
const {StaticRouter, matchPath,} = require('react-router');
const {renderToString} = require('react-dom/server');

module.exports.defaultRouteMiddleware = defaultRouteMiddleware;
module.exports.unloadModulesMiddleware = (_, __, next) => (unloadModules_(), next());

function defaultRouteMiddleware(req, res) {
  const data = {
    title: 'Express',
    messages: ['yeah!', 'baam!', 'baaa!'],
  };

  require('../client/stores/just-once-state-injector').set(data);
  const html = renderToString(React.createElement(StaticRouter, {
    location: req.url,
    context: {}
  }, React.createElement(require('../client/components/application').default, data)));

  // TODO: Handling redirect and 404
  res.status(200).send(require('../client/layout').default([data, html]));
}

function unloadModules_() {
  const srcPath = Path.resolve(__dirname, '../client');
  Object.keys(require.cache)
      .filter(m => m.startsWith(srcPath))
      .forEach(m => delete require.cache[m]);
}

