import {Action} from '@reduxjs/toolkit';
import produce from 'immer';

export function createReducerWithPresenter<T>(create, map) {
  const reducerWithPresenter = function(state: T, action: Action, options?): T {
    const reducer = map[action.type];

    if (!state) {
      return create().toState();
    }

    if (!reducer) {
      return state;
    }

    // TODO: make more intelligent typings
    return reducer(create(state), action, options).toState() as T;
  };
  return produce(reducerWithPresenter);
}
