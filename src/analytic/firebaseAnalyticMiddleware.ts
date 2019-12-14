import {chooseSpecFlowOpenSpecs, chooseSpecFlowReadRequest} from '../features/chooseSpecFlow/actions';
import {FirebaseAnalytic} from './firebaseAnalytic';
import {specMarkEdit} from '../features/specs';

export const firebaseAnalyticMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case chooseSpecFlowReadRequest.type: {
      FirebaseAnalytic.logEvent('select_content', {
        content_type: 'vega-lite',
        content_id: action.payload.id
      });

      break;
    }

    case chooseSpecFlowOpenSpecs.type: {
      FirebaseAnalytic.logEvent('view_item_list', {
        item_category: 'examples'
      });

      break;
    }

    case specMarkEdit.type: {
      // TODO: need to register new event type and
      FirebaseAnalytic.logEvent('edit_content', {
        content_type: 'vega-lite',
        change_type: 'mark',
        content_id: action.payload.id
      });

      break;
    }
    default:
      return;
  }

  return;
};
