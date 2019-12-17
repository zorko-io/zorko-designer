import produce from 'immer';
import {EncodingChannelsPresenter, EncodingChannelsState} from './presenters';
import {createReducer} from '../../common/utils/createReducer';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';

export const initialEncodingChannelsState: EncodingChannelsState = EncodingChannelsPresenter.create().toState();

const encodingChannelsReducer = createReducer<EncodingChannelsState>(initialEncodingChannelsState, {
  [chooseSpecFlowReadSuccess.type]: (
    state: EncodingChannelsState,
    action: ChooseSpecFlowReadSuccess
  ) => {
    const {spec} = action.payload;
    return EncodingChannelsPresenter.create(state)
      .extractChannels(spec)
      .toState();
  }
});

export default produce(encodingChannelsReducer);
