import React from 'react';
import s from './index.sass';

export default function Content(props) {
  return (
    <div className={s.root} {...props}>
      <h1 className={s.title}>{props.title}</h1>
    </div>
  );
};
