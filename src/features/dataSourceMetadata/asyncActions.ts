import * as Api from '../../packages/designerApi';
import {DataSource} from 'vega-lite/build/src/data';
import logger from 'logrock';
import {
  dataSourceMetadataReadFailure,
  dataSourceMetadataReadRequest,
  dataSourceMetadataReadSuccess
} from './actions';

export const dataSourceMetadataRead = (dataSource: DataSource) => {
  return async dispatch => {
    dispatch(dataSourceMetadataReadRequest(dataSource));

    try {
      const dataSourceMetadata = await Api.fetchDataSourceMetadata(dataSource);
      dispatch(dataSourceMetadataReadSuccess(dataSourceMetadata));
    } catch (error) {
      logger.error('Redux|Async Action: ' + error.message, error);
      dispatch(dataSourceMetadataReadFailure(error));
    }
  };
};
