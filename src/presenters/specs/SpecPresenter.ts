import {BaseStatePresenter} from '../../packages/corePresenters/BaseStatePresenter';
import {SpecState} from './SpecState';

export class SpecPresenter extends BaseStatePresenter<SpecState> {
  static create(state?: SpecState) {
    return new SpecPresenter(state);
  }

  getDefaultState(): SpecState {
    return {
      description: '',
      mark: '',
      data: {},
      encoding: ''
    };
  }

  setDescription(description: string): this {
    this.state.description = description;
    return this;
  }

  setMark(mark: string): this {
    this.state.mark = mark;
    return this;
  }

  setEncoding(encoding: string): this {
    this.state.encoding = encoding;
    return this;
  }

  setData(data: object): this {
    this.state.data = data;
    return this;
  }
}
