import {StatePresenter} from './StatePresenter';

export abstract class BaseStatePresenter<S> implements StatePresenter<S> {
  protected state: S;

  constructor(state?: S) {
    if (!state) {
      this.state = this.getDefaultState();
    } else {
      this.state = state;
    }
  }

  abstract getDefaultState(): S;

  toState(): S {
    return this.state;
  }
}
