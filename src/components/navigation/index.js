import React from 'react';
import s from './index.sass';
import {Link, IndexLink} from 'react-router';

export default function Navigation(props) {
  return (
    <div className={`${s.root} ${props.className || ''}`}>
      <ul>
        <li><IndexLink to="/">Home</IndexLink></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
};
