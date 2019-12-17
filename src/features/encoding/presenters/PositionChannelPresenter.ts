import {Option} from '../../../common/Option';

export type PositionChannelState = {
  name: string;
  field?: any;
  type?: any;
  fieldOptions: Option<string>[];
};

export class PositionChannelPresenter {
  private readonly state: PositionChannelState;

  static create(state?: PositionChannelState) {
    return new PositionChannelPresenter(state);
  }

  constructor(state?: PositionChannelState) {
    if (!state) {
      state = {name: 'x', field: null, type: null, fieldOptions: []};
    }

    this.state = state;
  }

  setFieldOptions(options: Option<string>[]) {
    this.state.fieldOptions = options;
    return this;
  }

  toState() {
    return this.state;
  }
}
