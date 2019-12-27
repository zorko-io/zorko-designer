import produce from 'immer';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../chooseSpecFlow';
import {createReducer} from '../../common/utils/createReducer';
import {AnalyticBoardState} from './presenters/AnalyticBoardState';
import {AnalyticBoardPresenter} from './presenters';

export const initialAnalyticBoardState: AnalyticBoardState = {mainSpecId: '', encodingChannels: []};

const reducers = createReducer<AnalyticBoardState>(initialAnalyticBoardState, {
  [chooseSpecFlowReadSuccess.type]: (
    state: AnalyticBoardState,
    action: ChooseSpecFlowReadSuccess
  ) => {
    const {id, spec} = action.payload;
    const presenter = AnalyticBoardPresenter.create(state).setMainSpec(id);

    if (spec.encoding) {
      presenter.setChannels(Object.keys(spec.encoding));
    }

    return presenter.toState();
  }
});

export default produce(reducers);
