import {chooseSpecFlowOpenSpecs, chooseSpecFlowReadRequest} from '../../chooseSpecFlow/slices';
import {specMarkEdit} from '../../specs/slices';
import {DesignerAnalyticMetricsDispatcher} from '../../../packages/designerAnalyticMetrics';

export const zorkoDesignerAnalyticMiddleware = (
  analyticDispatcher: DesignerAnalyticMetricsDispatcher
) => () => next => action => {
  next(action);

  switch (action.type) {
    case chooseSpecFlowReadRequest.type: {
      analyticDispatcher.selectContent({
        contentType: 'vega-lite',
        id: action.payload.id
      });

      break;
    }

    case chooseSpecFlowOpenSpecs.type: {
      analyticDispatcher.viewSpecsCategory({
        category: 'examples'
      });

      break;
    }

    case specMarkEdit.type: {
      analyticDispatcher.editContent({
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
