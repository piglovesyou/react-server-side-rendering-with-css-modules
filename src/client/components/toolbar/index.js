const React = require('react');
const s = require('./index.sass');

module.exports.default = function Toolbar(props) {
  return (
    <div className={s.root}>
      <h1 className={s.title}>{props.title}</h1>
    </div>
  );
};
