import {createAction} from '@reduxjs/toolkit';
import {DataSourceMetadata} from '../../common/DataSourceFieldDefinition';
import {DataSource} from 'vega-lite/build/src/data';

export const dataSourceMetadataReadRequest = createAction(
  'dataSourceMetadata/read',
  (dataSource: DataSource) => {
    return {
      payload: { dataSource }
    }
});

export type DataSourceMetadataReadRequest = ReturnType<typeof dataSourceMetadataReadRequest>;

export const dataSourceMetadataReadSuccess = createAction(
  'dataSourceMetadata/readSuccess',
  (dataSourceMetadata: DataSourceMetadata) => {
    return {
      payload: { dataSourceMetadata }
    }
  }
);

export type DataSourceMetadataReadSuccess = ReturnType<typeof dataSourceMetadataReadSuccess>;

export const dataSourceMetadataReadFailure = createAction(
  'dataSourceMetadata/readFailure',
  (error) => {
    return {
      payload: { error }
    }
  }
);

export type DataSourceMetadataReadFailure = ReturnType<typeof dataSourceMetadataReadFailure>;

