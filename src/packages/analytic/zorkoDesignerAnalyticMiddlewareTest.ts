import {zorkoDesignerAnalyticMiddleware} from './zorkoDesignerAnalyticMiddleware';
import {chooseSpecFlowOpenSpecs, chooseSpecFlowReadRequest} from '../../features/chooseSpecFlow';
import {specMarkEdit} from '../../features/specs';

describe('zorkoDesignerAnalyticMiddleware', () => {
  let analyticFacade, middleware, action, id;

  beforeEach(() => {
    analyticFacade = {
      selectContent: jest.fn(),
      viewSpecsCategory: jest.fn(),
      editContent: jest.fn()
    };

    id = '1234';
    const next = jest.fn();

    middleware = zorkoDesignerAnalyticMiddleware(analyticFacade)()(next);
  });

  it('selects content on open spec', () => {
    action = chooseSpecFlowReadRequest(id);

    middleware(action);

    expect(analyticFacade.selectContent).toHaveBeenCalledWith({
      contentType: 'vega-lite',
      id
    });
  });

  it('views specs category', () => {
    action = chooseSpecFlowOpenSpecs();

    middleware(action);

    expect(analyticFacade.viewSpecsCategory).toHaveBeenCalledWith({
      category: 'examples'
    });
  });

  it('edits content on mark change', () => {
    const mark = 'bar';
    action = specMarkEdit(id, mark);

    middleware(action);

    expect(analyticFacade.editContent).toHaveBeenCalledWith({
      type: 'vega-lite',
      changeType: 'mark',
      value: mark,
      id
    });
  });
});
