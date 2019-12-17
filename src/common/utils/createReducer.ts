import {Action} from '@reduxjs/toolkit';

export function createReducer<T>(initState, map) {
  return function(state: T, action: Action, options?): T {
    const reducer = map[action.type];

    if (!state) {
      return initState;
    }

    if (!reducer) {
      return state;
    }

    // TODO: make more intelligent typings
    return reducer(state, action, options) as T;
  };
}
