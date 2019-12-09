import {RootState} from '../../store/rootReducer';
import {selectSpecById} from '../specs/selectors';
import _ from 'lodash';

export const selectAnalyticBoard = (state: RootState) => state.analyticBoard;

export const selectAnalyticBoardMainSpec = (state: RootState) => {
  const boardState = selectAnalyticBoard(state);
  const mainSpecId = boardState.mainSpecId;
  const spec = selectSpecById(state, mainSpecId);
  // have to copy, because Vega View do some changes with received object
  return _.cloneDeep(spec);
};
