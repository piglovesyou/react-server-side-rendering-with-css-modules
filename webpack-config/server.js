const isProduction = process.env.NODE_ENV === 'production';

const cssLoaderConfig = require('./css-loader')[isProduction ? 'production' : 'develop'];

module.exports = {
  "module": {
    "loaders": [
      {
        "test": /\.sass$/,
        loaders: [
          cssLoaderConfig,
          'sass'
        ]
      }
    ]
  }
};
