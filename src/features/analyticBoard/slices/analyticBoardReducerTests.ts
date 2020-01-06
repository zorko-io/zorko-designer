import {AnalyticBoardPresenter, AnalyticBoardState} from '../presenters';
import analyticBoardReducer from './analyticBoardReducer';
import {createAction} from '@reduxjs/toolkit';
import {chooseSpecFlowReadSuccess} from '../../chooseSpecFlow/slices';
import {getSimpleSpec} from '../../__testFixtures__/vegaLiteSpecsFixtures';
import {createChannelId} from '../../../packages/presenterReducerUtils';

describe('analyticBoardReducer', () => {
  let initState: AnalyticBoardState, spec, specId: string;

  beforeEach(() => {
    spec = getSimpleSpec();
    specId = '123';
    initState = AnalyticBoardPresenter.create().toState();
  });

  it('create initial state', () => {
    expect(analyticBoardReducer(undefined, createAction('any'))).toEqual(initState);
  });

  it('choose spec', () => {
    const action = chooseSpecFlowReadSuccess(specId, spec);

    const actual = analyticBoardReducer(initState, action);
    const expected = AnalyticBoardPresenter.create()
      .setMainSpec(specId)
      .setChannels(Object.keys(spec.encoding).map(name => createChannelId(specId, name)))
      .toState();

    expect(actual).toEqual(expected);
  });
});
