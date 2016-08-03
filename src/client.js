import {render} from 'react-dom';
import Store from './stores/application';
import router from './router';

import './sass/global.sass';

// Injection point of initial data in client-side.
Object.assign(Store._state, window.__initialData);

render(router, document.getElementById('application-container'));
