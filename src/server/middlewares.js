const FS = require('fs');
const Path = require('path');
const deepmerge = require('deepmerge');
const babelrc = JSON.parse(FS.readFileSync(Path.resolve(__dirname, '../../.babelrc')));
const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  // Applied only for JSXs in '../components'
  require('babel-register')(
      Object.assign(babelrc, {
        only: Path.resolve(__dirname, '../client/components'),
        plugins: babelrc.plugins.concat([
          ["babel-plugin-webpack-loaders", {
            "config": Path.resolve(__dirname, '../../transpile-configs/server.js'),
            "verbose": false
          }]
        ]),
        babelrc: false
      })
  );
}

const React = require('react');
const {StaticRouter, matchPath,} = require('react-router');
const {renderToString} = require('react-dom/server');

module.exports.default = isProduction
    ? defaultRouteMiddleware
    : [unloadModulesMiddleware, defaultRouteMiddleware];

// Deprecated
module.exports.defaultRouteMiddleware = defaultRouteMiddleware;
module.exports.unloadModulesMiddleware = (_, __, next) => (unloadModules_(), next());

function unloadModulesMiddleware(_, __, next) {
  unloadModules_();
  next();
}

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

