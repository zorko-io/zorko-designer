import {chooseSpecFlowOpenSpecs, chooseSpecFlowReadRequest} from '../features/chooseSpecFlow/actions';
import {FirebaseAnalytic} from './firebaseAnalytic';

export const firebaseAnalyticMiddleware = () => next => action => {

  next(action);

  switch(action.type) {
    case chooseSpecFlowReadRequest.type: {
      FirebaseAnalytic.logEvent('select_content', {
        'content_type': 'vega-lite',
        'content_id': action.payload.id
      });

      break;
    }

    case chooseSpecFlowOpenSpecs.type: {
      FirebaseAnalytic.logEvent('view_item_list', {
        'item_category': 'examples'
      });

      break;
    }
    default: return;
  }

  return;
};
