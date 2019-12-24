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

    /**
     * @todo Extend reducer with proper typescript typing
     *
     * It should accept generic presenter type and state thought generics,
     * remove explicit type cast
     */
    return reducer(state, action, options) as T;
  };
}
