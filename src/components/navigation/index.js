const React = require('react');
const s = require('./index.sass');
const {Link} = require('react-router-dom');

module.exports.default = function Navigation(props) {
  return (
    <div className={`${s.root} ${props.className || ''}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
};
