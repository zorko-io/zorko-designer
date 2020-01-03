import * as Api from '../../packages/designerApi';
import logger from 'logrock';
import {
  chooseSpecFlowReadFailure,
  chooseSpecFlowReadRequest,
  chooseSpecFlowReadSuccess
} from './actions';
import {dataSourceMetadataReadSuccess} from '../dataSourceMetadata';

export function chooseSpecFlow(id) {
  return async dispatch => {
    dispatch(chooseSpecFlowReadRequest(id));

    try {
      const spec = await Api.fetchSpecById(id);
      dispatch(chooseSpecFlowReadSuccess(id, spec));

      const dataSourceMetadata = await Api.fetchDataSourceMetadata(spec.data);
      dispatch(dataSourceMetadataReadSuccess(dataSourceMetadata));
    } catch (error) {
      logger.error('Redux|Async Action: ' + error.message, error);

      dispatch(
        chooseSpecFlowReadFailure({
          name: error.name,
          message: error.message,
          stack: error.stack
        })
      );
    }
  };
}
