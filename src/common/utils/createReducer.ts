import {Action} from '@reduxjs/toolkit';
import {ReducerFunc} from './ReducerFunc';
import {ReducerMap} from './ReducerMap';

export function createReducer<S>(initState: S, map: ReducerMap<S>): ReducerFunc<S> {
  return function(state: S, action: Action, options?: object): S {
    const reducer = map[action.type];

    if (!state) {
      return initState;
    }

    if (!reducer) {
      return state;
    }

    return reducer(state, action, options);
  };
}
