import React from 'react';
import s from './index.sass';

export default function Home(props) {
  return (
    <div className={s.root}>
      <h2>Home...</h2>
      <h3>Messages</h3>
      <ul>
        {props.messages.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  );
};
