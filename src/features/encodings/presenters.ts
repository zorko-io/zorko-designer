import {BaseNormalizedState} from '../../core/normalize/BaseNormalizedState';
import {EncodingState} from '../encoding/presenters';
import {EncodingsState} from './reducers';
import _ from 'lodash';

export class EncodingsPresenter extends BaseNormalizedState<EncodingState> {
  static create(state?: EncodingsState) {
    return new EncodingsPresenter(state);
  }

  // TODO: rewrite with channels as separate store
  setEncoding(encoding, id) {
    const nextEncoding = _.reduce(
      Object.keys(encoding),
      (memo, name) => {
        // extend channels with names
        const channel = encoding[name];
        memo[name] = {
          name,
          ...channel
        };

        return memo;
      },
      {}
    );

    this.add(nextEncoding as EncodingState, id);

    return this;
  }
}
