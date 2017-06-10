const dispatcher = require('../dispatcher').default;
const {ReduceStore} = require('flux/utils');
const justOnceStateInjector = require('./just-once-state-injector');

class Store extends ReduceStore {
  getInitialState() {
    return {
      title: null,
      messages: []
    };
  }
  getState() {
    return justOnceStateInjector.consume() || this._state;
  }
  reduce(state, action) {
    let newState;
    switch (action.type) {
    case 'baam':
      newState = Object.assign({}, state, {
        messages: state.messages.concat(randomMessage())
      });
      break;
    }
    return newState;

    function randomMessage() {
      return state.messages[Math.floor(Math.random() * state.messages.length)];
    }
  }
}

module.exports.default = new Store(dispatcher);
