import {BaseStatePresenter} from '../../../core/BaseStatePresenter';
import {EncodingState} from './EncodingState';

export enum EncodingChannelNames {
  X = 'x',
  Y = 'y',
  COLOR = 'color'
}

export type EncodingChannelType =
  | EncodingChannelNames.X
  | EncodingChannelNames.Y
  | EncodingChannelNames.COLOR
  | string;

export class EncodingPresenter extends BaseStatePresenter<EncodingState> {
  static create(state?: EncodingState) {
    return new EncodingPresenter(state);
  }

  getDefaultState(): EncodingState {
    return {};
  }

  setChannel(name: EncodingChannelType, value: string): this {
    this.state[name] = value;
    return this;
  }

  setX(x: string): this {
    this.state.x = x;
    return this;
  }

  setY(y: string): this {
    this.state.y = y;
    return this;
  }

  setColor(color: string): this {
    this.state.color = color;
    return this;
  }

  getX() {
    return this.state.x;
  }

  getY() {
    return this.state.y;
  }

  getColor() {
    return this.state.color;
  }
}
