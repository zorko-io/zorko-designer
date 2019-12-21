import {PositionChannelState} from './PositionChannelState';
import {BaseStatePresenter} from '../../../core/BaseStatePresenter';

export class PositionChannelPresenter extends BaseStatePresenter<PositionChannelState> {
  static create(state?: PositionChannelState) {
    return new PositionChannelPresenter(state);
  }

  getDefaultState() {
    return {
      name: '',
      field: null,
      type: null
    };
  }

  setField(field) {
    this.state.field = field;
    return this;
  }

  setType(type: string): this {
    this.state.type = type;
    return this;
  }

  toState() {
    return this.state;
  }

  setName(name: string): this {
    this.state.name = name;
    return this;
  }

  getName() {
    return this.state.name;
  }

  getType() {
    return this.state.type;
  }

  getField() {
    return this.state.field;
  }
}
