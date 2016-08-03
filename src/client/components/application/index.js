const React = require('react');
const {Container} = require('flux/utils');
const {Route} = require('react-router-dom');
const Store = require('../../stores/application').default;
const Toolbar = require('../toolbar').default;
const Navigation = require('../navigation').default;
const About = require('../about').default;
const Home = require('../home').default;
const s = require('./index.sass');

class Application extends React.Component {
  static getStores() {
    return [Store];
  }

  static calculateState() {
    return Store.getState();
  }

  render() {
    return (
      <div className={s.root}>
        <Toolbar {...this.state} />
        <div className={s.layoutMasterDetail}>
          <Navigation className={s.layoutMasterDetailMaster} />
          <div className={s.layoutMasterDetailDetail}>
            <Route path='/' exact render={() => <Home {...this.state} />} />
            <Route path='/about' render={() => <About {...this.state} />} />
          </div>
        </div>
      </div>
    );
  }
}

module.exports.default = Container.create(Application);
