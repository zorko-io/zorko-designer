import {
  selectAnalyticBoard,
  selectAnalyticBoardEncodingChannels,
  selectAnalyticBoardMainSpec,
  selectAnalyticBoardMainSpecId
} from './analyticBoardSelectors';
import {PositionChannelPresenter} from '../../../presenters/encodingChannels';
import {rootReducer} from '../../../store/rootReducer';
import {createAction} from '@reduxjs/toolkit';
import * as vegaLiteSpecsFixture from '../../__mocks__/vegaLiteSpecsFixtures';
import {chooseSpecFlowReadSuccess} from '../../chooseSpecFlow';
import {LevelOfMeasurements} from '../../../packages/coreTypes/DataSourceFieldDefinition';

/**
 * @todo #32:30m/DEV Move to its own features, prep presenter
 *  it makes sense to move it to features/analyticBoard/__mocks__
 *
 */
const getAnalyticBoardDefaultState = (specId, chanelNames = []) => {
  return {analyticBoard: {}, mainSpecId: specId, encodingChannels: chanelNames};
};

describe('Select Analytic Board', () => {
  let rootState, specId, spec, action;

  beforeEach(() => {
    specId = '1234';
    spec = vegaLiteSpecsFixture.getSimpleSpec();
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
    action = chooseSpecFlowReadSuccess(specId, spec);
    rootState = rootReducer(rootState, action);

    expect(selectAnalyticBoardEncodingChannels(rootState)).toEqual([
      PositionChannelPresenter.create()
        .setName('x')
        .setField('a')
        .setType(LevelOfMeasurements.QUANTITATIVE)
        .toState(),
      PositionChannelPresenter.create()
        .setName('y')
        .setField('b')
        .setType(LevelOfMeasurements.ORDINAL)
        .toState()
    ]);
  });

  it('selects spec from analytic board', () => {
    action = chooseSpecFlowReadSuccess(specId, spec);

    rootState = rootReducer(rootState, action);

    expect(selectAnalyticBoardMainSpec(rootState)).toEqual(spec);
  });
});
