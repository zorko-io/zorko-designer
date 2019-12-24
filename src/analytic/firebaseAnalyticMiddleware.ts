import {
  chooseSpecFlowOpenSpecs,
  chooseSpecFlowReadRequest
} from '../features/chooseSpecFlow/actions';
import {FirebaseAnalytic} from './firebaseAnalytic';
import {specMarkEdit} from '../features/specs';

export const firebaseAnalyticMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case chooseSpecFlowReadRequest.type: {
      /**
       * @todo #30:30m/DEV Extract to method 'selectContent'
       *  Make as method of firebase analytic class
       *  like 'firebaseAnalytic.selectContent({ id, type})'
       */
      FirebaseAnalytic.logEvent('select_content', {
        ['content_type']: 'vega-lite',
        ['content_id']: action.payload.id
      });

      break;
    }

    case chooseSpecFlowOpenSpecs.type: {
      /**
       * @todo #30:30m/DEV Extract to method 'viewSpecsCategory'
       *  Make as method of firebase analytic class
       *  like 'firebaseAnalytic.viewList({ category})'
       */
      FirebaseAnalytic.logEvent('view_item_list', {
        ['item_category']: 'examples'
      });

      break;
    }

    case specMarkEdit.type: {
      /**
       * @todo #30:30m/DEV Extract to method 'editContent'
       *  Make as method of firebase analytic class
       *  like 'firebaseAnalytic.editContent({type, id, changeType})'
       */
      FirebaseAnalytic.logEvent('edit_content', {
        ['content_type']: 'vega-lite',
        ['change_type']: 'mark',
        ['content_id']: action.payload.id
      });

      break;
    }
    default:
      return;
  }

  return;
};
