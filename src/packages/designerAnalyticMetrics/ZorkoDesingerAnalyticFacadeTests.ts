import {
  DesignerAnalyticMetricsDispatcher,
  ZorkoDesigerEventNames
} from './DesignerAnalyticMetricsDispatcher';

describe('ZorkoAnalytic', () => {
  let fireBaseAnalytic, zorkoAnalytic: DesignerAnalyticMetricsDispatcher;

  beforeEach(() => {
    fireBaseAnalytic = {
      logEvent: jest.fn()
    };

    zorkoAnalytic = new DesignerAnalyticMetricsDispatcher(fireBaseAnalytic);
  });

  it('logs view spec category', () => {
    const category = 'examples';

    zorkoAnalytic.viewSpecsCategory({category});

    expect(fireBaseAnalytic.logEvent).toHaveBeenCalledWith(ZorkoDesigerEventNames.VIEW_ITEM_LIST, {
      ['item_category']: category
    });
  });

  it('logs select content', () => {
    const contentType = 'vega-lite';
    const id = '123';

    zorkoAnalytic.selectContent({
      id,
      contentType
    });

    expect(fireBaseAnalytic.logEvent).toHaveBeenCalledWith(ZorkoDesigerEventNames.SELECT_CONTENT, {
      ['content_type']: contentType,
      ['content_id']: id
    });
  });
});
