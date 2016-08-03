const React = require('react');
const s = require('./index.sass');

module.exports.default = function Content(props) {
  return (
    <div className={s.root} {...props}>
      <h1 className={s.title}>{props.title}</h1>
    </div>
  );
};
