const isProduction = process.env.NODE_ENV === 'production';

const webpack = require('webpack');
const Path = require('path');
const FS = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const cssLoaderConfig = require('./css-loader')[isProduction ? 'production' : 'develop'];

module.exports = {
  entry: './src/client',
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
        loader: 'babel',
        query: {
          "presets": [ "react" ],
          "plugins": [
            "transform-es2015-classes",
            "transform-async-to-generator",
            "transform-es2015-modules-commonjs",
          ],
          "babelrc": false
        },
      },
      {
        test: /\.sass$/,
        // loaders: [
        //   cssLoaderConfig,
        //   'sass',
        // ],
        loader: ExtractTextPlugin.extract([
          cssLoaderConfig,
          'sass-loader',
        ]),
      },
    ]
  },
  sassLoader: {
    indentedSyntax: true,
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
  // // It suppress error shown in console, so it has to be set to false.
  // quiet: true,
  // // It suppress everything except error, so it has to be set to false as well
  // // to see success build.
  // noInfo: true,
  // stats: {
  //   // Config for minimal console.log mess.
  //   assets: false,
  //   colors: true,
  //   version: false,
  //   hash: false,
  //   timings: false,
  //   chunks: false,
  //   chunkModules: false
  // },
};
