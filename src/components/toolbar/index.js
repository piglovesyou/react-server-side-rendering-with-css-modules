import React from 'react';
import s from './index.sass';

export default function Toolbar(props) {
  return (
    <div className={s.root}>
      <h1 className={s.title}>{props.title}</h1>
    </div>
  );
};
