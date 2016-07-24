import React from 'react';
import {Container} from 'flux/utils';
import Store from '../../stores/application';
import Button from '../button';
import Actions from '../../actions';

class Application extends React.Component {
  constructor(props) {
    super(props);
    Object.assign(Store._state, props);
  }

  static getStores() {
    return [Store];
  }

  static calculateState(prevState) {
    return Store.getState();
  }

  render() {
    const {title, messages} = this.state;
    return (
      <div className="application">
        <h1 className="title">{title}</h1>
        <ul className="messages">
          {messages.map((m, i) =>
                <li key={i}>{m}</li>)}
        </ul>
        <div>
          <Button onClick={() => Actions.baam()}>Another message</Button>
        </div>
      </div>
    );
  }
};

export default Container.create(Application);
