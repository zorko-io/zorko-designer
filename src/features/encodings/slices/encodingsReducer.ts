import {createReducerWithPresenter} from '../../../packages/presenterReducerUtils';
import {chooseSpecFlowReadSuccess, ChooseSpecFlowReadSuccess} from '../../chooseSpecFlow/slices';
import {EncodingPresenter, EncodingsState, EncodingState} from '../presenters';
import produce from 'immer';
import {NormalizedPresenter} from '../../../packages/corePresenters';
import {createChannelId} from '../../../packages/idGenderators/createChannelId';

export default produce(
  createReducerWithPresenter<EncodingsState, NormalizedPresenter<EncodingState>>(
    NormalizedPresenter.create,
    {
      [chooseSpecFlowReadSuccess.type]: (presenter, action: ChooseSpecFlowReadSuccess) => {
        const {spec, id} = action.payload;
        const encoding = EncodingPresenter.create();

        if (!spec.encoding) {
          return presenter;
        }

        for (const name of Object.keys(spec.encoding)) {
          const channelId = createChannelId(id, name);
          encoding.setChannel(name, channelId);
        }

        return presenter.set(id, encoding);
      }
    }
  )
);
