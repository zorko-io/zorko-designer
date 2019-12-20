import {PositionChannelState} from './PositionChannelPresenter';

export enum EncodingChannelNames {
  X = 'x',
  Y = 'y'
}

export interface EncodingState {
  x: PositionChannelState | null;
}

export class EncodingPresenter {
  private state: EncodingState;

  static create(state?: EncodingState) {
    return new EncodingPresenter(state);
  }

  constructor(state?: EncodingState) {
    if (!state) {
      this.reset();
    } else {
      this.state = state;
    }
  }

  editByName(name, modificationCallback) {
    // TODO: rethink modification of presenter
    const channel = this.state[name];
    this.state[name] = modificationCallback(channel);

    return this;
  }

  reset() {
    this.state = {
      x: null
    };
    return this;
  }

  all() {
    // move order to analytic board
    return [];
  }

  toState(): EncodingState {
    return this.state;
  }
}
