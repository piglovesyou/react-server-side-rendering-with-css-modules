const React = require('react');
const s = require('./index.sass');
const {baam} =  require('../../actions');

module.exports.default = function Home(props) {
  return (
    <div className={s.root}>
      <h2>Home... <button onClick={baam}>Add message</button></h2>
      <h3>Messages</h3>
      <ul>
        {props.messages.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  );
};
