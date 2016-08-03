const {isProduction} = require('../src/server/env');

const cssLoaderConfig = require('./_css-loader')[isProduction ? 'production' : 'develop'];

module.exports = {
  "module": {
    "loaders": [
      {
        "test": /\.sass$/,
        loaders: [
          cssLoaderConfig,
          'sass-loader'
        ]
      }
    ]
  }
};
