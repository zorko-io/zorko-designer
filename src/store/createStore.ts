import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const createStore = middleware => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), ...middleware]
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

  return store;
};
