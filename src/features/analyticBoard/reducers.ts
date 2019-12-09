import produce from 'immer';
import {ChooseSpecFlowOpenNewSpec, chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';
import {createReducer} from '../../common/utils/createReducer';

export interface AnalyticBoardState {
  mainSpecId: string;
}

export const initialAnalyticBoardState: AnalyticBoardState = {mainSpecId: ''};

const reducers = createReducer<AnalyticBoardState>(initialAnalyticBoardState, {
  [chooseSpecFlowReadSuccess.type]: (
    state: AnalyticBoardState,
    action: ChooseSpecFlowOpenNewSpec
  ) => {
    const {id} = action.payload;

    state.mainSpecId = id;

    return state;
  }
});

export default produce(reducers);
