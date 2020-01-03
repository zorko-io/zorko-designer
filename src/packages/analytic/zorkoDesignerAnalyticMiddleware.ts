import {chooseSpecFlowOpenSpecs, chooseSpecFlowReadRequest} from '../../features/chooseSpecFlow';
import {specMarkEdit} from '../../features/specs';
import {ZorkoDesignerAnalyticFacade} from './ZorkoDesignerAnalyticFacade';

export const zorkoDesignerAnalyticMiddleware = (
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
        value: action.payload.mark,
        id: action.payload.id
      });

      break;
    }
    default:
      return;
  }

  return;
};
