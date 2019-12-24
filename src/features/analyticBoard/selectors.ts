import {RootState} from '../../store/rootReducer';
import {selectSpecs} from '../specs/selectors';
import {createSelector} from '@reduxjs/toolkit';
import {SpecsPresenter} from '../specs/presenters';
import {EncodingPresenter, EncodingsPresenter} from '../newEncodings';
import {selectChannels} from '../channels/selectors';
import {ChannelsPresenter} from '../channels/presenters';
import {createChannelId, extractChannelNameFromId} from '../../common/utils';
import {selectEncodings} from '../newEncodings/selectors';

export const selectAnalyticBoard = (state: RootState) => state.analyticBoard;

export const selectAnalyticBoardMainSpecId = createSelector(
  selectAnalyticBoard,
  analyticBoard => analyticBoard.mainSpecId
);

/**
 * @todo #30:30m/DEV Cover with unit tests AnalyticBoard selector
 *
 * Prepare a mock data of app state, I assume it would be a top level fixture
 * which may combine all other state's fixtures, put it in `src/__mocks__`
 *
 * And test may include case with empty app state and then with one spec
 * chosen (use simple one)
 *
 */
export const selectAnalyticBoardMainSpec = createSelector(
  [selectAnalyticBoardMainSpecId, selectSpecs, selectEncodings, selectChannels],
  (id, specsState, encodingsState, channelsState) => {
    const specState = SpecsPresenter.create(specsState).get(id);
    const encodingState = EncodingsPresenter.create(encodingsState).get(id);
    /**
     * @todo #30:30m/DEV Store list of channels in board state
     *
     */
    const channelIds = EncodingPresenter.create(encodingState).getChannels();
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
  [selectAnalyticBoardMainSpecId, selectAnalyticBoard, selectChannels],
  (id: string, analyticBoard, channelsState) => {
    const channelsPresenter = ChannelsPresenter.create(channelsState);

    return analyticBoard.encodingChannels.map(name => {
      const channelId = createChannelId(id, name);
      return channelsPresenter.get(channelId);
    });
  }
);
