import {createReducerWithPresenter} from '../../../packages/presenterReducerUtils/createReducerWithPresenter';
import {chooseSpecFlowReadSuccess, ChooseSpecFlowReadSuccess} from '../../chooseSpecFlow/slices';
import {EncodingPresenter, EncodingsState, EncodingState} from '../presenters';
import {createChannelId} from '../../../packages/presenterReducerUtils';
import produce from 'immer';
import {NormalizedPresenter} from '../../../packages/corePresenters';

export default produce(
  createReducerWithPresenter<EncodingsState, NormalizedPresenter<EncodingState>>(
    NormalizedPresenter.create,
    {
      [chooseSpecFlowReadSuccess.type]: (presenter, action: ChooseSpecFlowReadSuccess) => {
        const {spec, id} = action.payload;
        const encoding = EncodingPresenter.create();

        if (!spec.encoding) {
          return presenter.set(id, encoding);
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
