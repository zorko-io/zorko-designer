import {RootState} from '../../store/rootReducer';
import {selectSpecs} from '../specs/selectors';
import {createSelector} from '@reduxjs/toolkit';
import {SpecsPresenter} from '../specs/presenters';
import {selectChannels} from '../channels/selectors';
import {ChannelsPresenter} from '../channels/presenters';
import {extractChannelNameFromId} from '../../common/utils';
import {AnalyticBoardPresenter} from './presenters';

export const selectAnalyticBoard = (state: RootState) => state.analyticBoard;

export const selectAnalyticBoardMainSpecId = createSelector(
  selectAnalyticBoard,
  analyticBoard => analyticBoard.mainSpecId
);

export const selectAnalyticBoardMainSpec = createSelector(
  [selectAnalyticBoard, selectSpecs, selectChannels],
  (analyticBoard, specsState, channelsState) => {
    const presenter = AnalyticBoardPresenter.create(analyticBoard);

    const id = presenter.getMainSpec();
    const specState = SpecsPresenter.create(specsState).get(id);
    /**
     * @todo #30:30m/DEV Store list of channels in board state
     *  Extend appropriate reducer/presenter, unit tests off course
     */

    const channelIds = presenter.getChannels();
    const channelsPresenter = ChannelsPresenter.create(channelsState);

    const encoding = channelIds.reduce((memo, channelId) => {
      const channelName = extractChannelNameFromId(channelId);
      memo[channelName] = channelsPresenter.get(channelId);
      return memo;
    }, {});

    return {
      ...specState,
      encoding
    };
  }
);

export const selectAnalyticBoardEncodingChannels = createSelector(
  [selectAnalyticBoard, selectChannels],
  (analyticBoard, channelsState) => {
    const channelsPresenter = ChannelsPresenter.create(channelsState);
    const channelIds = AnalyticBoardPresenter.create(analyticBoard).getChannels();
    return channelIds.map(id => channelsPresenter.get(id));
  }
);
