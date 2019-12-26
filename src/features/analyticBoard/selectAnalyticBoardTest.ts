import {
  selectAnalyticBoard,
  selectAnalyticBoardEncodingChannels,
  selectAnalyticBoardMainSpecId
} from './selectors';
import {ChannelsPresenter, PositionChannelPresenter} from '../channels/presenters';
import {createChannelId} from '../../common/utils';

const getAnalyticBoardDefaultState = (specId, chanelNames = []) => {
  return {analyticBoard: {}, mainSpecId: specId, encodingChannels: chanelNames};
};

describe('Select Analytic Board', () => {
  let rootState, specId;

  beforeEach(() => {
    specId = '1234';
    rootState = getAnalyticBoardDefaultState(specId);
  });

  it('selects analytic board', () => {
    expect(selectAnalyticBoard(rootState)).toBe(rootState.analyticBoard);
  });

  it('selects mainSpecId', () => {
    expect(selectAnalyticBoardMainSpecId(rootState)).toEqual(rootState.analyticBoard.mainSpecId);
  });

  it('select analytic boards channels', () => {
    const firstChannel = PositionChannelPresenter.create().setName('x');
    const secondChannel = PositionChannelPresenter.create().setName('y');
    const items = [firstChannel.toState(), secondChannel.toState()];

    rootState = {
      analyticBoard: getAnalyticBoardDefaultState(specId, ['x', 'y']),

      /**
       * @todo #32:15m/DEV Move to channel fixtures
       *  it makes sence to move it to features/channels/__mocks__
       *
       */
      channels: ChannelsPresenter.create()
        .set(createChannelId(specId, firstChannel.getName()), firstChannel)
        .set(createChannelId(specId, secondChannel.getName()), secondChannel)
        .toState()
    };

    expect(selectAnalyticBoardEncodingChannels(rootState)).toEqual(items);
  });
});
