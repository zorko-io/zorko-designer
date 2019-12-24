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
    /**
     * @todo Extend reducer with presenter with proper typescript typing
     *
     * It should accept generic presenter type and state thought generics,
     * remove explicit type cast
     */
    return reducer(create(state), action, options).toState() as T;
  };
  return produce(reducerWithPresenter);
}
