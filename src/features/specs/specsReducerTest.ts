import {specsReducer, SpecsState} from './index';
import {createAction} from '@reduxjs/toolkit';
import {SpecPresenter, SpecsPresenter} from './presenter';
import {chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';
import {VegaLiteTopLevelUnitSpec} from '../../common/types';

describe('Specs Reducer', () => {
  let actual: SpecsState, expected: SpecsState, initState: SpecsState;

  beforeEach(() => {
    initState = SpecsPresenter.create().toState();
  });

  it('inits default state', () => {
    actual = specsReducer(null, createAction('anyAction'));
    expected = SpecsPresenter.create().toState();

    expect(actual).toEqual(expected);
  });

  it('chooses spec', () => {
    const id = 'someId';
    const spec = {
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
    const action = chooseSpecFlowReadSuccess('someId', spec as VegaLiteTopLevelUnitSpec);

    actual = specsReducer(initState, action);
    expected = SpecsPresenter.create(initState)
      .set(
        id,
        SpecPresenter.create()
          .setEncoding(id)
          .setData(spec.data)
          .setDescription(spec.description)
          .setMark(spec.mark)
          .setEncoding(id)
          .toState()
      )
      .toState();

    expect(actual).toEqual(expected);
  });
});
