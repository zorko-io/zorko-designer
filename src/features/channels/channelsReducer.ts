import {createReducerWithPresenter} from '../../common/utils/createReducerWithPresenter';
import {PositionChannelPresenter, ChannelsPresenter, ChannelsState} from './presenters';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';
import {createChannelId} from '../../common/utils';
import {EncodingChannelFieldEdit, encodingChannelFieldEdit} from '../encoding';

export const channelsReducer = createReducerWithPresenter<ChannelsState>(ChannelsPresenter.create, {
  [chooseSpecFlowReadSuccess.type]: (
    presenter: ChannelsPresenter,
    action: ChooseSpecFlowReadSuccess
  ) => {
    const {id, spec} = action.payload;
    const encoding = spec.encoding;

    if (!encoding) {
      return presenter;
    }

    for (const name of Object.keys(encoding)) {
      const channelId = createChannelId(id, name);
      const channel = encoding[name];
      const channelPresenter = PositionChannelPresenter.create(channel).setName(name);

      presenter.set(channelId, channelPresenter);
    }

    return presenter;
  },
  [encodingChannelFieldEdit.type]: (
    presenter: ChannelsPresenter,
    action: EncodingChannelFieldEdit
  ) => {
    const {specId, field, channelName} = action.payload;
    const channelId = createChannelId(specId, channelName);

    return presenter.editById(channelId, channel => {
      return PositionChannelPresenter.create(channel).setField(field);
    });
  }
});
