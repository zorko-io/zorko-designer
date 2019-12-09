import {configureStore, getDefaultMiddleware, Action} from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger'
import logger from 'logrock';

import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), createLogger({
    collapsed: true,
    titleFormatter: (action: Action, time?: string, took?: number) => {
      return `${time}|redux|Action: ${action.type} in ${took.toFixed(2)} ms`;
    },
    logger
  })]
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export default store;
