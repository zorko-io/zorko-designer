import {AnalyticBoardPresenter, AnalyticBoardState} from '../presenters';
import analyticBoardReducer from './analyticBoardReducer';
import {createAction} from '@reduxjs/toolkit';
import {chooseSpecFlowReadSuccess} from '../../chooseSpecFlow/slices';
import {getSimpleSpec} from '../../__testFixtures__/vegaLiteSpecsFixtures';
import {createChannelId} from '../../../packages/idGenderators/createChannelId';

describe('analyticBoardReducer', () => {
  let initState: AnalyticBoardState, spec, specId: string, action, actual, expected;

  beforeEach(() => {
    spec = getSimpleSpec();
    specId = '123';
    initState = AnalyticBoardPresenter.create().toState();
  });

  it('create initial state', () => {
    expect(analyticBoardReducer(undefined, createAction('any'))).toEqual(initState);
  });

  it('choose spec', () => {
    action = chooseSpecFlowReadSuccess(specId, spec);

    actual = analyticBoardReducer(initState, action);
    expected = AnalyticBoardPresenter.create()
      .setMainSpec(specId)
      .setChannels(Object.keys(spec.encoding).map(name => createChannelId(specId, name)))
      .toState();

    expect(actual).toEqual(expected);
  });

  it('choose spec with no encoding', () => {
    delete spec.encoding;
    action = chooseSpecFlowReadSuccess(specId, spec);

    actual = analyticBoardReducer(initState, action);
    expected = AnalyticBoardPresenter.create()
      .setMainSpec(specId)
      .toState();

    expect(actual).toEqual(expected);
  });
});
