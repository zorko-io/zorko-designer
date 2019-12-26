import {Action} from '@reduxjs/toolkit';
import {ReducerMap} from './ReducerMap';
import {StatePresenter} from '../../core/StatePresenter';
import {ReducerFunc} from './ReducerFunc';

export interface StatePresenterCreateFunc<S, P extends StatePresenter<S>> {
  (state?: S): P;
}

export function createReducerWithPresenter<S, P extends StatePresenter<S>>(
  create: StatePresenterCreateFunc<S, P>,
  map: ReducerMap<P>
): ReducerFunc<S> {
  return function(state: S, action: Action, options?): S {
    if (!state) {
      return create().toState();
    }

    const reducer = map[action.type];

    if (!reducer) {
      return state;
    }

    let presenter = create(state);
    presenter = reducer(presenter, action, options);

    return presenter.toState();
  };
}
