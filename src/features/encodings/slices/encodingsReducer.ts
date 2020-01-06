import {createReducerWithPresenter} from '../../../packages/presenterReducerUtils/createReducerWithPresenter';
import {chooseSpecFlowReadSuccess, ChooseSpecFlowReadSuccess} from '../../chooseSpecFlow/slices';
import {EncodingPresenter, EncodingsPresenter, EncodingsState} from '../presenters';
import {createChannelId} from '../../../packages/presenterReducerUtils';
import produce from 'immer';

export default produce(
  createReducerWithPresenter<EncodingsState, EncodingsPresenter>(EncodingsPresenter.create, {
    [chooseSpecFlowReadSuccess.type]: (
      presenter: EncodingsPresenter,
      action: ChooseSpecFlowReadSuccess
    ) => {
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
  })
);
