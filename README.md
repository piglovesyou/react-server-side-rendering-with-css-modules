# React Server Side Rendering with CSS Modules Example [![Build Status](https://travis-ci.org/piglovesyou/react-server-side-rendering-with-css-modules.svg?branch=master)](https://travis-ci.org/piglovesyou/react-server-side-rendering-with-css-modules)

Project-template project. Bound technologies:

* React
  * Server-Side rendering
  * Mounting it on Client-Side
  * `react-router` on both cilent and server
* Flux
  * FlucContainer
  * ReduceStore
* Webpack
  * External CSS file with `extract-text-webpack-plugin`
  * CSS Modules by `css-loader`
    * Shorten CSS className to reduce payload on `NODE_ENV=production`
  * `webpack-dev-middleware` for `express` on `NODE_ENV=develop`
  * `sass-loader`
* Babel
  * Precompile all and no `babel-node` on `NODE_ENV=production`

## Demo

https://react-ssr-css-modules-example.herokuapp.com/

## License

ISC

## Acknowledgments

* baa
* baa
* baa
