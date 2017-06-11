const isProduction = process.env.NODE_ENV === 'production';

const webpack = require('webpack');
const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const cssLoaderConfig = require('./_css-loader')[isProduction ? 'production' : 'develop'];

module.exports = {
  entry: './src/client/main',
  output: {
    path: Path.resolve('./public'),
    filename: 'javascripts/main.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          "presets": ["react"],
          "plugins": [
            "transform-es2015-classes",
          ],
          "babelrc": false
        },
      },
      {
        // XXX: Workaround for libsass bug that doesn't recognize ":global()".
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          cssLoaderConfig,
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: false,
            }
          },
        ]),
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract([
          cssLoaderConfig,
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
            }
          },
        ]),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('stylesheets/main.css'),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ],
};
