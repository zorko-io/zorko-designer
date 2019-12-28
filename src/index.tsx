import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import {repositoriesLoadInitial} from './features/repositories/asyncActions';
import {AppLogger} from './app/AppLogger';
import vegaLiteSchema from './defaultVegaLiteSchema.json';
import {vegaLiteSchemaReadSuccess} from './features/vegaLiteSchema';
import {chooseSpecFlow} from './features/chooseSpecFlow/asyncActions';
import {AppShell} from './app/AppShell';
import {HashRouter} from 'react-router-dom';

// Load env variables, if not defined look for them in .env
/**
 * @todo #31:15m/DEV Integrate WebPack with dotenv
 *  configure webpack to inject env variable during build
 *  just calling config() doesn't enough
 */
// require('dotenv-safe').config();

declare global {
  interface Window {
    sessionID: string;
  }
}

window.sessionID = `sessionid-${Math.random()
  .toString(36)
  .substr(3, 9)}`;

store.dispatch(vegaLiteSchemaReadSuccess(vegaLiteSchema));
store.dispatch(repositoriesLoadInitial());
store.dispatch(chooseSpecFlow('bar'));

render(
  <AppLogger sessionId={window.sessionID}>
    <Provider store={store}>
      <HashRouter>
        <AppShell />
      </HashRouter>
    </Provider>
  </AppLogger>,
  document.getElementById('root')
);
