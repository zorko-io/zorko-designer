import produce from 'immer';
import {EncodingChannelsPresenter, EncodingChannelsState} from './presenters';
import {createReducer} from '../../common/utils/createReducer';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';
import {EncodingChannelFieldEdit, encodingChannelFieldEdit} from './actions';

export const initialEncodingChannelsState: EncodingChannelsState = EncodingChannelsPresenter.create().toState();

const encodingChannelsReducer = createReducer<EncodingChannelsState>(initialEncodingChannelsState, {
  [encodingChannelFieldEdit.type]: (
    state: EncodingChannelsState,
    action: EncodingChannelFieldEdit
  ) => {
    const {field, channel} = action.payload;

    return EncodingChannelsPresenter.create(state)
      .editByName(channel, ch => ch.setField(field))
      .toState();
  },
  [chooseSpecFlowReadSuccess.type]: (
    state: EncodingChannelsState,
    action: ChooseSpecFlowReadSuccess,
    options
  ) => {
    const {spec} = action.payload;
    return EncodingChannelsPresenter.create(state)
      .reset()
      .setEncoding(spec.encoding)
      .ingestWithFieldsSuggestion(options.dataSourceMetadata.fields)
      .toState();
  }
});

export default produce(encodingChannelsReducer);
