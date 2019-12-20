import {RootState} from '../../store/rootReducer';
import {selectSpecs} from '../specs/selectors';
import {createSelector} from '@reduxjs/toolkit';
import {SpecsPresenter} from '../specs/presenter';
import {selectEncodings} from '../encodings/selectors';
import {EncodingsPresenter} from '../encodings';

export const selectAnalyticBoard = (state: RootState) => state.analyticBoard;

export const selectAnalyticBoardMainSpecId = createSelector(
  selectAnalyticBoard,
  analyticBoard => analyticBoard.mainSpecId
);

export const selectAnalyticBoardMainSpec = createSelector(
  [selectAnalyticBoardMainSpecId, selectSpecs, selectEncodings],
  (id, specs, encodings) => {
    const specRoot = SpecsPresenter.create(specs).get(id);
    const encoding = EncodingsPresenter.create(encodings).get(id);
    return {
      ...specRoot,
      encoding
    };
  }
);

export const selectAnalyticBoardEncodingChannels = createSelector(
  [selectAnalyticBoard, selectEncodings],
  (analyticBoard, encodings) => {
    return analyticBoard.encodingChannels.map(name => {
      const encoding = EncodingsPresenter.create(encodings).get(analyticBoard.mainSpecId);
      return encoding[name];
    });
  }
);
