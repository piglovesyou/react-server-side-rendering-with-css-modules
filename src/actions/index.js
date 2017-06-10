const {dispatch} = require('../dispatcher');

module.exports = {
  baam(message) {
    dispatch({ type: 'baam' });
  }
};
