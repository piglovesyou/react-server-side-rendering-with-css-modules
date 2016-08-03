const {isProduction} = require('../src/server/env');
const webpack = require('webpack');
const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssLoaderConfig = require('./_css-loader')[isProduction ? 'production' : 'develop'];
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/client/main',
  output: {
    path: Path.resolve('./public'),
    filename: 'javascripts/main.js'
  },
  devtool: isProduction ? 'nosources-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          isProduction && {loader: 'webpack-unassert-loader'},
          {
            loader: 'babel-loader',
            query: {
              'presets': ['react', 'es2015'],
              'plugins': [
                'transform-es2015-classes',
              ],
              'babelrc': false
            },
          },
        ].filter(e => !!e),
      },
      {
        // XXX: Workaround for libsass bug that doesn't recognize ":global()".
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
          cssLoaderConfig,
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: false,
              outputStyle: 'compressed'
            }
          },
        ]),
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract([
          cssLoaderConfig,
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              outputStyle: 'compressed'
            }
          },
        ])
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('stylesheets/main.css'),
    isProduction && new UglifyJSPlugin(),
  ].filter(e => !!e),
};
