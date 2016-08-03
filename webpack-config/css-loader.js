const common = 'css-loader?modules&camelCase&localIdentName=';

module.exports.develop = `${common}[path]_[name]_[local]`;
module.exports.production = `${common}[hash:base64:3]`;
