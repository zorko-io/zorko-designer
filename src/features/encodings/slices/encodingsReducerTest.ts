import encodingsReducer from './encodingsReducer';
import {createAction} from '@reduxjs/toolkit';
import {EncodingPresenter, EncodingsState} from '../presenters';
import * as vegaLiteSpecsFixture from '../../__testFixtures__/vegaLiteSpecsFixtures';
import {VegaLiteTopLevelUnitSpec} from '../../../packages/coreTypes/types';
import {chooseSpecFlowReadSuccess} from '../../chooseSpecFlow/slices';
import {NormalizedPresenter} from '../../../packages/corePresenters';
import {createChannelId} from '../../../packages/idGenderators/createChannelId';

describe('Encodings Reducer', () => {
  let actual,
    expected,
    action,
    initState: EncodingsState,
    id: string,
    spec: VegaLiteTopLevelUnitSpec;

  beforeEach(() => {
    initState = NormalizedPresenter.create().toState();
    id = 'bar';
    spec = vegaLiteSpecsFixture.getSimpleSpec();
  });

  it('creates initial state', () => {
    actual = encodingsReducer(null, createAction('anyAction'));
    expected = NormalizedPresenter.create().toState();
    expect(actual).toEqual(expected);
  });

  it('choose spec with encoding', () => {
    action = chooseSpecFlowReadSuccess(id, spec);

    actual = encodingsReducer(initState, action);
    expected = NormalizedPresenter.create(initState)
      .set(
        id,
        EncodingPresenter.create()
          .setX(createChannelId(id, 'x'))
          .setY(createChannelId(id, 'y'))
      )
      .toState();

    expect(actual).toEqual(expected);
  });

  it('choose spec without encoding', () => {
    const specWithoutEncoding = {...spec};
    delete specWithoutEncoding.encoding;

    action = chooseSpecFlowReadSuccess(id, specWithoutEncoding);

    actual = encodingsReducer(initState, action);
    expected = NormalizedPresenter.create(initState).toState();

    expect(actual).toEqual(expected);
  });
});
