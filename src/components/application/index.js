import React from 'react';
import {Container} from 'flux/utils';
import Store from '../../stores/application';
import Actions from '../../actions';
import Toolbar from '../toolbar';
import Navigation from '../navigation';
import s from './index.sass';

class Application extends React.Component {
  static getStores() {
    return [Store];
  }

  static calculateState(prevState) {
    return Store.getState();
  }

  render() {
    const {title, messages} = this.state;
    
    // debugger;
    return (
      <div className={s.root}>
        <Toolbar {...this.state} />
        <div className={s.layoutMasterDetail}>
          <Navigation className={s.layoutMasterDetailMaster} />
          <div className={s.layoutMasterDetailDetail}>
            {React.Children.map(this.props.children, (c) => React.cloneElement(c, this.state))}
          </div>
        </div>
      </div>
    );
  }
};

export default Container.create(Application);
