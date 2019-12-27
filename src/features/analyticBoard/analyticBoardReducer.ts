import produce from 'immer';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../chooseSpecFlow';
import {AnalyticBoardState} from './presenters';
import {AnalyticBoardPresenter} from './presenters';
import {createReducerWithPresenter} from '../../common/utils/createReducerWithPresenter';

export const analyticBoardReducer = produce(
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
          presenter.setChannels(Object.keys(spec.encoding));
        }

        return presenter;
      }
    }
  )
);
