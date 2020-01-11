import {createAction} from '@reduxjs/toolkit';
import {chooseSpecFlowReadSuccess} from '../../chooseSpecFlow/slices';
import {VegaLiteTopLevelUnitSpec} from '../../../packages/coreTypes/types';
import * as specsReducerFixtures from './__mocks__/specsStateFixtures';
import {SpecsState, SpecState} from '../presenters';
import * as vegaLiteSpecsFixture from '../../__testFixtures__/vegaLiteSpecsFixtures';
import specsReducer from './specsReducer';
import {specDescriptionEdit, specMarkEdit} from './specsActions';
import {NormalizedPresenter} from '../../../packages/corePresenters';

describe('Specs Reducer', () => {
  let actual, expected, initState: SpecsState, id: string, spec: VegaLiteTopLevelUnitSpec;

  beforeEach(() => {
    initState = NormalizedPresenter.create<SpecState>().toState();
    id = 'someId';
    spec = vegaLiteSpecsFixture.getSimpleSpec();
  });

  it('inits default state', () => {
    actual = specsReducer(null, createAction('anyAction'));
    expected = NormalizedPresenter.create().toState();

    expect(actual).toEqual(expected);
  });

  it('chooses spec', () => {
    const action = chooseSpecFlowReadSuccess(id, spec as VegaLiteTopLevelUnitSpec);

    actual = specsReducer(initState, action);
    expected = specsReducerFixtures.getStateWithOneSpec(id, spec, initState);

    expect(actual).toEqual(expected);
  });

  it('edit description', () => {
    const nextDescription = 'zzzzzz';
    const action = specDescriptionEdit({id, description: nextDescription});
    let state = specsReducerFixtures.getStateWithOneSpec(id, spec, initState);

    state = specsReducer(state, action);
    actual = NormalizedPresenter.create(state).get(id).description;
    expected = nextDescription;

    expect(expected).toEqual(expected);
  });

  it('edit mark', () => {
    const nextMark = 'line';
    const action = specMarkEdit(id, nextMark);
    let state = specsReducerFixtures.getStateWithOneSpec(id, spec, initState);

    state = specsReducer(state, action);
    actual = NormalizedPresenter.create(state).get(id).mark;
    expected = nextMark;

    expect(expected).toEqual(expected);
  });
});
