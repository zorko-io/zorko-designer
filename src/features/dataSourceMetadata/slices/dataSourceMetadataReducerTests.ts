import dataSourceMetadataReducer from './dataSourceMetadataReducer';
import {createAction} from '@reduxjs/toolkit';
import {DataSourceMetadataPresenter} from '../presenters';
import {dataSourceMetadataReadSuccess} from './dataSourceMetadataActions';
import {getFields} from './__testFixtures__/dataSourceMetadataFixtures';

describe('dataSourceMetadataReducer', () => {
  let initState, actual, expected;

  beforeEach(() => {
    initState = DataSourceMetadataPresenter.create().toState();
  });

  it('init with defaults', () => {
    actual = dataSourceMetadataReducer(undefined, createAction('anyAction'));
    expected = DataSourceMetadataPresenter.create().toState();

    expect(actual).toEqual(expected);
  });

  it('sets fields', () => {
    const fields = getFields();
    const action = dataSourceMetadataReadSuccess({fields});
    actual = dataSourceMetadataReducer(initState, action);
    expected = DataSourceMetadataPresenter.create(initState)
      .setFields(fields)
      .toState();

    expect(actual).toEqual(expected);
  });
});
