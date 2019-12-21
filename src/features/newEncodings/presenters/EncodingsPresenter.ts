import {BaseNormalizedState} from '../../../core/normalize/BaseNormalizedState';
import {NormalizedState} from '../../../core/normalize/NormalizedState';
import {EncodingState} from './EncodingState';

export interface EncodingsState extends NormalizedState<EncodingState> {}

export class EncodingsPresenter extends BaseNormalizedState<EncodingState> {
  static create(state?: EncodingsState) {
    return new EncodingsPresenter(state);
  }
}
