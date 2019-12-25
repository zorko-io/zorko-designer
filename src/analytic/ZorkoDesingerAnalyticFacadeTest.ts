import {ZorkoDesigerEventNames, ZorkoDesignerAnalyticFacade} from './ZorkoDesignerAnalyticFacade';

describe('ZorkoAnalytic', () => {
  let fireBaseAnalytic, zorkoAnalytic;

  beforeEach(() => {
    fireBaseAnalytic = {
      logEvent: jest.fn()
    };

    zorkoAnalytic = new ZorkoDesignerAnalyticFacade(fireBaseAnalytic);
  });

  it('logs view spec category', () => {
    const category = 'examples';
    zorkoAnalytic.viewSpecsCategory({category});

    expect(fireBaseAnalytic.logEvent).toHaveBeenCalledWith(ZorkoDesigerEventNames.VIEW_ITEM_LIST, {
      ['item_category']: category
    });
  });
});
