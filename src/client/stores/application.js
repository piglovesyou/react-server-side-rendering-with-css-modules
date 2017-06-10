const dispatcher = require('../dispatcher').default;
const {ReduceStore} = require('flux/utils');

class Store extends ReduceStore {
  getInitialState() {
    return {
      messages: []
    };
  }
  reduce(state, action) {
    let newState;
    switch (action.type) {
    case 'baam':
      newState = Object.assign({}, state, {
        messages: state.messages.concat(randomMessage())
      });
      console.log(newState.messages);
      break;
    }
    return newState;

    function randomMessage() {
      return state.messages[Math.floor(Math.random() * state.messages.length)];
    }
  }
}

module.exports.default = new Store(dispatcher);
