import {Action} from '@reduxjs/toolkit';

export interface ReducerFunc<S> {
  (state: S, action: Action, options?: object): S;
}
