const isProduction = process.env.NODE_ENV === 'production';

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
