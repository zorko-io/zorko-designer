import {BaseNormalizedState} from '../../core/normalize/BaseNormalizedState';
import {EncodingChannelsState} from '../encodingChannels/presenters';
import {EncodingsState} from './reducers';

export class EncodingsPresenter extends BaseNormalizedState<EncodingChannelsState> {
  static create(state?: EncodingsState) {
    return new EncodingsPresenter(state);
  }
}
