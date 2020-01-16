import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {repositoriesLoadInitial} from './features/repositories/effects/repositoriesEffects';
import {AppLogger} from './app/AppLogger';
import vegaLiteSchema from './defaultVegaLiteSchema.json';
import {vegaLiteSchemaReadSuccess} from './features/vegaLiteSchema/slices';
import {chooseSpecFlow} from './features/chooseSpecFlow/effects/chooseSpecFlowEffects';
import {AppContainer} from './app/AppContainer';
import {HashRouter} from 'react-router-dom';
import {createStore} from './store/createStore';
import {logrockMiddleware, reduxLoggerMiddleware} from './packages/customReduxLoggerMiddlewares';
import firebase from 'firebase';
import {firebaseConfig} from '../firebase.config';
import logger from 'logrock';

import {DesignerAnalyticMetricsDispatcher} from './packages/designerAnalyticMetrics';
import {zorkoDesignerAnalyticMiddleware} from './features/userBehaviourAnalytic/middlewares/zorkoDesignerAnalyticMiddleware';

declare global {
  interface Window {
    sessionID: string;
  }
}

// Define uniq session for logging proposes
window.sessionID = `sessionid-${Math.random()
  .toString(36)
  .substr(3, 9)}`;

/**
 * @todo #138:15m/DEV Move to custom middlewares
 *
 */

export const catchErrors = () => next => action => {
  try {
    next(action);
  } catch (e) {
    logger.error('GOT ERROR', e);
  }
};

const middleware = [reduxLoggerMiddleware, logrockMiddleware, catchErrors];

if (process.env.NODE_ENV === 'production') {
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = app.analytics();
  const analyticFacade = new DesignerAnalyticMetricsDispatcher(analytics);

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
        <AppContainer />
      </HashRouter>
    </Provider>
  </AppLogger>,
  document.getElementById('root')
);
