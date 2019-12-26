import {ReducerFunc} from './ReducerFunc';

export interface ReducerMap<S> {
  [key: string]: ReducerFunc<S>;
}
