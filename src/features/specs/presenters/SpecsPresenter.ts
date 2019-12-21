import {BaseNormalizedState} from '../../../core/normalize/BaseNormalizedState';
import {SpecState} from './SpecState';
import {SpecsState} from './SpecsState';

export class SpecsPresenter extends BaseNormalizedState<SpecState> {
  static create(state?: SpecsState) {
    return new SpecsPresenter(state);
  }
}
