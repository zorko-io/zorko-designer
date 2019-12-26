import {
  selectAnalyticBoard,
  selectAnalyticBoardEncodingChannels,
  selectAnalyticBoardMainSpec,
  selectAnalyticBoardMainSpecId
} from './selectors';
import {ChannelsPresenter, PositionChannelPresenter} from '../channels/presenters';
import {createChannelId} from '../../common/utils';
import {rootReducer} from '../../store/rootReducer';
import {createAction} from '@reduxjs/toolkit';
import * as vegaLiteSpecsFixture from '../__mocks__/vegaLiteSpecsFixtures';
import {chooseSpecFlowReadSuccess} from '../chooseSpecFlow';

/**
 * @todo #32:30m/DEV Move to its own features, prep presenter
 *  it makes sense to move it to features/analyticBoard/__mocks__
 *
 */
const getAnalyticBoardDefaultState = (specId, chanelNames = []) => {
  return {analyticBoard: {}, mainSpecId: specId, encodingChannels: chanelNames};
};

describe('Select Analytic Board', () => {
  let rootState, specId;

  beforeEach(() => {
    specId = '1234';
    rootState = getAnalyticBoardDefaultState(specId);
    rootState = rootReducer(undefined, createAction('any'));
  });

  it('selects analytic board', () => {
    expect(selectAnalyticBoard(rootState)).toBe(rootState.analyticBoard);
  });

  it('selects mainSpecId', () => {
    expect(selectAnalyticBoardMainSpecId(rootState)).toEqual(rootState.analyticBoard.mainSpecId);
  });

  it('select analytic boards channels', () => {
    /**
     * @todo #32:30m/DEV Rewrite with rootReducer move to mocks for channel
     *  it makes sence to move it to features/channels/__mocks__
     *
     */

    const firstChannel = PositionChannelPresenter.create().setName('x');
    const secondChannel = PositionChannelPresenter.create().setName('y');
    const items = [firstChannel.toState(), secondChannel.toState()];
    rootState = {
      analyticBoard: getAnalyticBoardDefaultState(specId, ['x', 'y']),
      channels: ChannelsPresenter.create()
        .set(createChannelId(specId, firstChannel.getName()), firstChannel)
        .set(createChannelId(specId, secondChannel.getName()), secondChannel)
        .toState()
    };

    expect(selectAnalyticBoardEncodingChannels(rootState)).toEqual(items);
  });

  it('selects spec from analytic board', () => {
    const spec = vegaLiteSpecsFixture.getSimpleSpec();
    const action = chooseSpecFlowReadSuccess(specId, spec);

    rootState = rootReducer(rootState, action);

    expect(selectAnalyticBoardMainSpec(rootState)).toEqual(spec);
  });
});
