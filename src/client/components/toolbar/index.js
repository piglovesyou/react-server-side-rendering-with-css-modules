const React = require('react');
const s = require('./index.sass');

module.exports.default = function Toolbar(props) {
  return (
      <div className={s.root}>
        <h1 className={s.title}>
          {props.title}&nbsp;<i className="material-icons">landscape</i>
        </h1>
      </div>
  );
};
