import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {repositoriesLoadInitial} from './features/repositories/asyncActions';
import {AppLogger} from './app/AppLogger';
import vegaLiteSchema from './defaultVegaLiteSchema.json';
import {vegaLiteSchemaReadSuccess} from './features/vegaLiteSchema';
import {chooseSpecFlow} from './features/chooseSpecFlow/asyncActions';
import {AppShell} from './app/AppShell';
import {HashRouter} from 'react-router-dom';
import {createStore} from './store/createStore';
import {reduxLoggerMiddleware, logrockMiddleware} from './packages/customReduxLoggerMiddlewares';
import firebase from 'firebase';
import {firebaseConfig} from '../firebase.config';
import {ZorkoDesignerAnalyticFacade, zorkoDesignerAnalyticMiddleware} from './packages/analytic';

declare global {
  interface Window {
    sessionID: string;
  }
}

// Define uniq session for logging proposes
window.sessionID = `sessionid-${Math.random()
  .toString(36)
  .substr(3, 9)}`;

const middleware = [reduxLoggerMiddleware, logrockMiddleware];

if (process.env.NODE_ENV === 'production') {
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = app.analytics();
  const analyticFacade = new ZorkoDesignerAnalyticFacade(analytics);

  middleware.push(zorkoDesignerAnalyticMiddleware(analyticFacade));
}

const store = createStore(middleware);

// Fire few action so user can see some pre-selected visualization
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
