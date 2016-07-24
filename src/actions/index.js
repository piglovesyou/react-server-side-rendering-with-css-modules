import {dispatch} from '../dispatcher';

export default {
  baam(message) {
    dispatch({ type: 'baam' });
  }
}
