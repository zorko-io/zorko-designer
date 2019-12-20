import {BaseNormalizedState} from '../../core/normalize/BaseNormalizedState';
import {SpecsState, SpecState} from './reducers';
import {Mark} from 'vega-lite/build/src/mark';
import {BaseStatePresenter} from '../../core/BaseStatePresenter';

export class SpecsPresenter extends BaseNormalizedState<SpecState> {
  static create(state?: SpecsState) {
    return new SpecsPresenter(state);
  }

  editDescription(id: string, description: string) {
    const spec = this.get(id);

    spec.description = description;

    return this;
  }

  editMark(id: string, mark: Mark) {
    const spec = this.get(id);

    spec.mark = mark;

    return this;
  }
}

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
}
