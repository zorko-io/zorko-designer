import produce from 'immer';
import {createReducer} from '../../common/utils/createReducer';
import {NormalizedState} from '../../core/normalize/NormalizedState';
import {EncodingPresenter, EncodingState, PositionChannelPresenter} from '../encoding/presenters';
import {EncodingsPresenter} from './presenters';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';
import {EncodingChannelFieldEdit, encodingChannelFieldEdit} from '../encoding';

export type EncodingsState = NormalizedState<EncodingState>;

export const initialEncodingsState: EncodingsState = EncodingsPresenter.create().toState();

const encodingsReducer = createReducer<EncodingsState>(initialEncodingsState, {
  [chooseSpecFlowReadSuccess.type]: (state: EncodingsState, action: ChooseSpecFlowReadSuccess) => {
    const {spec, id} = action.payload;
    const encodings = EncodingsPresenter.create(state);

    if (!spec.encoding) {
      return encodings.toState();
    }

    return encodings
      .reset()
      .setEncoding(spec.encoding as EncodingState, id)
      .toState();
  },
  [encodingChannelFieldEdit.type]: (state: EncodingsState, action: EncodingChannelFieldEdit) => {
    const {field, channelName, specId} = action.payload;

    return EncodingsPresenter.create(state)
      .editById(specId, encoding => {
        return EncodingPresenter.create(encoding)
          .editByName(channelName, channel => {
            return PositionChannelPresenter.create(channel)
              .setField(field)
              .toState();
          })
          .toState();
      })
      .toState();
  }
});

export default produce(encodingsReducer);
