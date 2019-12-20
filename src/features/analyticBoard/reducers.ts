import produce from 'immer';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';
import {createReducer} from '../../common/utils/createReducer';

export interface AnalyticBoardState {
  mainSpecId: string;
  encodingChannels: string[];
}

export const initialAnalyticBoardState: AnalyticBoardState = {mainSpecId: '', encodingChannels: []};

const reducers = createReducer<AnalyticBoardState>(initialAnalyticBoardState, {
  [chooseSpecFlowReadSuccess.type]: (
    state: AnalyticBoardState,
    action: ChooseSpecFlowReadSuccess
  ) => {
    const {id, spec} = action.payload;
    state.mainSpecId = id;

    if (spec.encoding) {
      state.encodingChannels = Object.keys(spec.encoding);
    }

    return state;
  }
});

export default produce(reducers);
