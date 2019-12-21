import {Action, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import logger from 'logrock';

import rootReducer from './rootReducer';
import {firebaseAnalyticMiddleware} from '../analytic/firebaseAnalyticMiddleware';

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
  middleware.push(firebaseAnalyticMiddleware);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export default store;
