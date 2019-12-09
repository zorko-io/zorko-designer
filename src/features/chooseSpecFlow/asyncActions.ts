import * as Api from '../../api';
import logger from 'logrock';
import {
  chooseSpecFlowReadSuccess,
  chooseSpecFlowReadRequest,
  chooseSpecFlowReadFailure
} from './actions';

const test: any = [];

export function chooseSpecFlow(id) {
  return async dispatch => {
    dispatch(chooseSpecFlowReadRequest(id));

    try {
      test();
      const spec = await Api.fetchSpecById(id);
      dispatch(chooseSpecFlowReadSuccess(id, spec));
    } catch (err) {
      logger.error(err);

      dispatch(
        chooseSpecFlowReadFailure({
          name: err.name,
          message: err.message,
          stack: err.stack
        })
      );
    }
  };
}
