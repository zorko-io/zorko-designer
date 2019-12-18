import produce from 'immer';
import {createReducer} from '../../common/utils/createReducer';
import {NormalizedState} from '../../core/normalize/NormalizedState';
import {EncodingChannelsPresenter, EncodingChannelsState} from '../encodingChannels/presenters';
import {EncodingsPresenter} from './presenters';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';

export type EncodingsState = NormalizedState<EncodingChannelsState>;

export const initialEncodingsState: EncodingsState = EncodingsPresenter.create().toState();

const encodingsReducer = createReducer<EncodingsState>(initialEncodingsState, {
  [chooseSpecFlowReadSuccess.type]: (state: EncodingsState, action: ChooseSpecFlowReadSuccess) => {
    const {spec, id} = action.payload;
    const encodings = EncodingsPresenter.create(state);

    if (!spec.encoding) {
      return encodings.toState();
    }

    const encoding = EncodingChannelsPresenter.create()
      .setEncoding(spec.encoding)
      .toState();

    const result = encodings
      .reset()
      .add(encoding, id)
      .toState();

    return result;
  }
});

export default produce(encodingsReducer);
