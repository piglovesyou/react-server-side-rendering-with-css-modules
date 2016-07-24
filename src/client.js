import React from 'react';
import {render} from 'react-dom';
import Application from './components/application';

// require('./sass/main.sass');

const el = document.getElementById('application-container');
const initialData = JSON.parse(el.dataset.json);
render(<Application {...JSON.parse(el.dataset.json)} />, el);
delete el.dataset.json;

