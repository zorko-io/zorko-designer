import {
  chooseSpecFlowOpenSpecs,
  chooseSpecFlowReadRequest
} from '../features/chooseSpecFlow/actions';
import {specMarkEdit} from '../features/specs';
import {ZorkoDesignerAnalyticFacade} from './ZorkoDesignerAnalyticFacade';

export const firebaseAnalyticMiddleware = (
  zorkoDesignerAnalytic: ZorkoDesignerAnalyticFacade
) => () => next => action => {
  next(action);

  switch (action.type) {
    case chooseSpecFlowReadRequest.type: {
      zorkoDesignerAnalytic.selectContent({
        contentType: 'vega-lite',
        id: action.payload.id
      });

      break;
    }

    case chooseSpecFlowOpenSpecs.type: {
      zorkoDesignerAnalytic.viewSpecsCategory({
        category: 'examples'
      });

      break;
    }

    case specMarkEdit.type: {
      zorkoDesignerAnalytic.editContent({
        type: 'vega-lite',
        changeType: 'mark',
        id: action.payload.id
      });

      break;
    }
    default:
      return;
  }

  return;
};
