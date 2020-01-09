import produce from 'immer';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../../chooseSpecFlow/slices';
import {AnalyticBoardPresenter, AnalyticBoardState} from '../presenters';
import {createReducerWithPresenter} from '../../../packages/presenterReducerUtils';
import {createChannelId} from '../../../packages/idGenderators/createChannelId';

export default produce(
  createReducerWithPresenter<AnalyticBoardState, AnalyticBoardPresenter>(
    AnalyticBoardPresenter.create,
    {
      [chooseSpecFlowReadSuccess.type]: (
        presenter: AnalyticBoardPresenter,
        action: ChooseSpecFlowReadSuccess
      ) => {
        const {id, spec} = action.payload;

        presenter.setMainSpec(id);

        if (spec.encoding) {
          const channelIds = Object.keys(spec.encoding).map(name => createChannelId(id, name));
          presenter.setChannels(channelIds);
        }

        return presenter;
      }
    }
  )
);
