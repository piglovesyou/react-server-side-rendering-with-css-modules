const webpack = require('webpack');
const Path = require('path');
const FS = require('fs');
const babelRc = JSON.parse(FS.readFileSync('./.babelrc'));
const isProduction = process.env.NODE_ENV === 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

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
        query: babelRc,
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('stylesheets/main.css', {
      allChunks: true
    }),
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
