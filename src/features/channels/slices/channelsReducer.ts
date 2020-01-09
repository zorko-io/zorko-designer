import {createReducerWithPresenter} from '../../../packages/presenterReducerUtils';
import {ChannelsState, PositionChannelPresenter, PositionChannelState} from '../presenters';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../../chooseSpecFlow/slices';
import {EncodingChannelFieldEdit, encodingChannelFieldEdit} from '../../analyticBoard/slices';
import produce from 'immer';
import {NormalizedPresenter} from '../../../packages/corePresenters';
import {createChannelId} from '../../../packages/idGenderators/createChannelId';

export default produce(
  createReducerWithPresenter<ChannelsState, NormalizedPresenter<PositionChannelState>>(
    NormalizedPresenter.create,
    {
      [chooseSpecFlowReadSuccess.type]: (presenter, action: ChooseSpecFlowReadSuccess) => {
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
      [encodingChannelFieldEdit.type]: (presenter, action: EncodingChannelFieldEdit) => {
        const {specId, field, channelName} = action.payload;
        const channelId = createChannelId(specId, channelName);

        return presenter.editById(channelId, channel => {
          return PositionChannelPresenter.create(channel).setField(field);
        });
      }
    }
  )
);
