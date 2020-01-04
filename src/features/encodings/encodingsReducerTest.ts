import {encodingsReducer} from './encodingsReducer';
import {createAction} from '@reduxjs/toolkit';
import {EncodingPresenter, EncodingsPresenter, EncodingsState} from '../../presenters/encodings';
import * as vegaLiteSpecsFixture from '../__mocks__/vegaLiteSpecsFixtures';
import {VegaLiteTopLevelUnitSpec} from '../../packages/coreTypes/types';
import {chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';
import {createChannelId} from '../../packages/presenterReducerUtils';

describe('Encodings Reducer', () => {
  let actual,
    expected,
    action,
    initState: EncodingsState,
    id: string,
    spec: VegaLiteTopLevelUnitSpec;

  beforeEach(() => {
    initState = EncodingsPresenter.create().toState();
    id = 'bar';
    spec = vegaLiteSpecsFixture.getSimpleSpec();
  });

  it('creates initial state', () => {
    actual = encodingsReducer(null, createAction('anyAction'));
    expected = EncodingsPresenter.create().toState();
    expect(actual).toEqual(expected);
  });

  it('choose spec', () => {
    action = chooseSpecFlowReadSuccess(id, spec);

    actual = encodingsReducer(initState, action);
    expected = EncodingsPresenter.create(initState)
      .set(
        id,
        EncodingPresenter.create()
          .setX(createChannelId(id, 'x'))
          .setY(createChannelId(id, 'y'))
      )
      .toState();

    expect(actual).toEqual(expected);
  });
});
