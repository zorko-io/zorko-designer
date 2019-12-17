import produce from 'immer';
import {EncodingChannelsPresenter, EncodingChannelsState} from './presenters';
import {createReducer} from '../../common/utils/createReducer';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';

export const initialEncodingChannelsState: EncodingChannelsState = EncodingChannelsPresenter.create().toState();

const encodingChannelsReducer = createReducer<EncodingChannelsState>(initialEncodingChannelsState, {
  [chooseSpecFlowReadSuccess.type]: (
    state: EncodingChannelsState,
    action: ChooseSpecFlowReadSuccess,
    options
  ) => {
    const {spec} = action.payload;
    return EncodingChannelsPresenter.create(state)
      .reset()
      .setChannels(spec.encoding)
      .ingestWithFieldsSuggestion(options.dataSourceMetadata.fields)
      .toState();
  }
});

export default produce(encodingChannelsReducer);
