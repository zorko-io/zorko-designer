import {newEncodingsReducer} from './newEncodingsReducer';
import {createAction} from '@reduxjs/toolkit';
import {EncodingPresenter, EncodingsPresenter, EncodingsState} from './presenters';
import * as vegaLiteSpecsFixture from '../__mocks__/vegaLiteSpecsFixtures';
import {VegaLiteTopLevelUnitSpec} from '../../common/types';
import {chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';

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
    actual = newEncodingsReducer(null, createAction('anyAction'));
    expected = EncodingsPresenter.create().toState();
    expect(actual).toEqual(expected);
  });

  it('choose spec', () => {
    action = chooseSpecFlowReadSuccess(id, spec);

    actual = newEncodingsReducer(initState, action);
    expected = EncodingsPresenter.create(initState)
      .set(
        'bar',
        EncodingPresenter.create()
          .setX('bar/x')
          .setY('bar/y')
      )
      .toState();

    expect(actual).toEqual(expected);
  });
});
