import {createLogger} from 'redux-logger';
import {Action} from '@reduxjs/toolkit';

export const reduxLoggerMiddleware = createLogger({
  collapsed: true,
  titleFormatter: (action: Action, time?: string, took?: number) => {
    return `Redux|Action: ${action.type} in ${took.toFixed(2)} ms`;
  }
});
