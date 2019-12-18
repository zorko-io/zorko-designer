import {RootState} from '../../store/rootReducer';
import {selectSpecs} from '../specs/selectors';
import {createSelector} from '@reduxjs/toolkit';
import {SpecsPresenter} from '../specs/presenter';
import {selectEncodings} from '../encodings/selectors';
import {EncodingsPresenter} from '../encodings';
import {EncodingChannelsPresenter} from '../encodingChannels/presenters';

export const selectAnalyticBoard = (state: RootState) => state.analyticBoard;

export const selectAnalyticBoardMainSpecId = createSelector(
  selectAnalyticBoard,
  analyticBoard => analyticBoard.mainSpecId
);

export const selectAnalyticBoardMainSpec = createSelector(
  [selectAnalyticBoardMainSpecId, selectSpecs, selectEncodings],
  (id, specs, encodings) => {
    const specRoot = SpecsPresenter.create(specs).byId(id);
    const encodingChannels = EncodingsPresenter.create(encodings).byId(id);
    const encoding = EncodingChannelsPresenter.create(encodingChannels).getEncoding();
    return {
      ...specRoot,
      encoding
    };
  }
);
