export type PositionChannelState = {
  name: string;
  field?: any;
  type?: any;
};

export class PositionChannelPresenter {
  private readonly state: PositionChannelState;

  static create(state?: PositionChannelState) {
    return new PositionChannelPresenter(state);
  }

  constructor(state?: PositionChannelState) {
    if (!state) {
      state = {name: 'x', field: null, type: null};
    }

    this.state = state;
  }

  toState() {
    return this.state;
  }
}
