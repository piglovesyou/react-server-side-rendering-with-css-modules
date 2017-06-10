const {Dispatcher} = require('flux');

const instance = new Dispatcher();

module.exports.default = instance;
module.exports.dispatch = instance.dispatch.bind(instance);
