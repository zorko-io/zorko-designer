import {Action, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import logger from 'logrock';
import rootReducer from './rootReducer';
import {zorkoDesignerAnalyticMiddleware} from '../features/analytic/zorkoDesignerAnalyticMiddleware';
import firebase from 'firebase';
import {firebaseConfig} from '../../firebase.config';
import {ZorkoDesignerAnalyticFacade} from '../analytic/ZorkoDesignerAnalyticFacade';

/**
 * @todo #41:15m/DEV Move middleware to index.ts
 *  extract logger middlewares to separate files as logrock
 *  and redux to understand the difference
 *
 */

const customLoggerMiddleware = () => next => action => {
  const beforeAction = Date.now();

  next(action);

  const afterAction = Date.now();
  const took = afterAction - beforeAction;

  logger.log(`Redux|Action: ${action.type} in ${took} ms`);

  return;
};

const middleware = [
  ...getDefaultMiddleware(),
  createLogger({
    collapsed: true,
    titleFormatter: (action: Action, time?: string, took?: number) => {
      return `Redux|Action: ${action.type} in ${took.toFixed(2)} ms`;
    }
  }),
  customLoggerMiddleware
];

if (process.env.NODE_ENV === 'production') {
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = app.analytics();
  const analyticFacade = new ZorkoDesignerAnalyticFacade(analytics);

  middleware.push(zorkoDesignerAnalyticMiddleware(analyticFacade));
}

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware
});

/**
 *  @todo #42:30m/DEV Provide proper typings for Hot module reload
 *   that solution was working, but then stopped shorturl.at/hjJMP
 */

// @ts-ignore
if (process.env.NODE_ENV === 'development' && module.hot) {
  // @ts-ignore
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
