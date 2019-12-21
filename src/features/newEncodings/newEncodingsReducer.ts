import {createReducerWithPresenter} from '../../common/utils/createReducerWithPresenter';
import {chooseSpecFlowReadSuccess, ChooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';
import {EncodingPresenter, EncodingsPresenter} from './presenters';
import {createChannelId} from '../../common/utils';

export const newEncodingsReducer = createReducerWithPresenter(EncodingsPresenter.create, {
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
});
