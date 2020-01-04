import {RootState} from '../store/rootReducer';
import {selectSpecs} from './specsSelectors';
import {createSelector} from '@reduxjs/toolkit';
import {SpecsPresenter} from '../presenters/specs';
import {selectChannels} from './channelsSelectors';
import {ChannelsPresenter} from '../presenters/encodingChannels';
import {extractChannelNameFromId} from '../packages/presenterReducerUtils';
import {AnalyticBoardPresenter} from '../presenters/analyticBoard';

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
