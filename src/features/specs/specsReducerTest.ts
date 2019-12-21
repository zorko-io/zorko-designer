import {specDescriptionEdit, specMarkEdit, specsReducer, SpecsState} from './index';
import {createAction} from '@reduxjs/toolkit';
import {chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';
import {VegaLiteTopLevelUnitSpec} from '../../common/types';
import * as specsReducerFixtures from './__mocks__/specsFixtures';
import {SpecsPresenter} from './presenters';

describe('Specs Reducer', () => {
  let actual, expected, initState: SpecsState, id: string, spec: VegaLiteTopLevelUnitSpec;

  beforeEach(() => {
    initState = SpecsPresenter.create().toState();
    id = 'someId';
    spec = {
      description: 'hohooho',
      data: {
        values: [
          {a: 1, b: 'c'},
          {a: 2, b: 'n'}
        ]
      },
      mark: 'bar',
      encoding: {
        x: {field: 'a', type: 'quantitative'},
        y: {field: 'b', type: 'ordinal'}
      }
    };
  });

  it('inits default state', () => {
    actual = specsReducer(null, createAction('anyAction'));
    expected = SpecsPresenter.create().toState();

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
    actual = SpecsPresenter.create(state).get(id).description;
    expected = nextDescription;

    expect(expected).toEqual(expected);
  });

  it('edit mark', () => {
    const nextMark = 'line';
    const action = specMarkEdit(id, nextMark);
    let state = specsReducerFixtures.getStateWithOneSpec(id, spec, initState);

    state = specsReducer(state, action);
    actual = SpecsPresenter.create(state).get(id).mark;
    expected = nextMark;

    expect(expected).toEqual(expected);
  });
});
