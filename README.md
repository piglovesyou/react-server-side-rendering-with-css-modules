# React Server Side Rendering with CSS Modules Example [![Build Status](https://travis-ci.org/piglovesyou/react-server-side-rendering-with-css-modules.svg?branch=master)](https://travis-ci.org/piglovesyou/react-server-side-rendering-with-css-modules)

Project-template project. Bound technologies:

* React v15.2
  * Server-Side rendering
  * Reuse the DOMs on Client-Side
* React Router v4
  * On both cilent and server
* Flux
  * FlucContainer
  * ReduceStore
* Webpack
  * External CSS file with `extract-text-webpack-plugin` for fast HTML load
  * CSS Modules by `css-loader`
    * Shorten CSS className to reduce payload on `NODE_ENV=production`
  * `webpack-dev-middleware` on `express` for development use
  * `sass-loader`
* Babel
  * For development, only compile JSXs for debugging easiness
  * For production, compile all for speed

## Demo

https://react-ssr-css-modules-example.herokuapp.com/

## License

ISC
