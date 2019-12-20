import produce from 'immer';
import {EncodingPresenter, EncodingState, PositionChannelPresenter} from './presenters';
import {createReducer} from '../../common/utils/createReducer';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';
import {EncodingChannelFieldEdit, encodingChannelFieldEdit} from './actions';

export const initialEncodingChannelsState: EncodingState = EncodingPresenter.create().toState();

const encodingChannelsReducer = createReducer<EncodingState>(initialEncodingChannelsState, {
  [encodingChannelFieldEdit.type]: (state: EncodingState, action: EncodingChannelFieldEdit) => {
    const {field, channelName} = action.payload;

    return EncodingPresenter.create(state)
      .editByName(channelName, channel => {
        return PositionChannelPresenter.create(channel)
          .setField(field)
          .toState();
      })
      .toState();
  },
  [chooseSpecFlowReadSuccess.type]: (state: EncodingState, action: ChooseSpecFlowReadSuccess) => {
    const {spec} = action.payload;
    return EncodingPresenter.create(spec.encoding as EncodingState).toState();
  }
});

export default produce(encodingChannelsReducer);
