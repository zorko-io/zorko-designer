import {VegaLiteSchemaPresenter} from '../presenters';
import {createAction} from '@reduxjs/toolkit';
import vegaLiteSchemaReducer from './vegaLiteSchemaReducer';
import {vegaLiteSchemaReadSuccess} from './vegaLiteSchemaActions';
import vegaLiteSchema from './../../../defaultVegaLiteSchema.json';

describe('vegaLiteSchemaReducer', () => {
  let initState, actual, action, expected, presenter;

  beforeEach(() => {
    presenter = VegaLiteSchemaPresenter.create();
    initState = presenter.toState();
  });

  it('creates default state', () => {
    action = createAction('anyAction');
    actual = vegaLiteSchemaReducer(undefined, action);
    expected = initState;

    expect(actual).toEqual(expected);
  });

  it('sets schema', () => {
    action = vegaLiteSchemaReadSuccess(vegaLiteSchema);
    actual = vegaLiteSchemaReducer(initState, action);
    expected = presenter.setSchema(vegaLiteSchema).toState();

    expect(actual).toEqual(expected);
  });
});
