import {BaseNormalizedState} from './BaseNormalizedState';

interface TestInnerState {
  message: string;
  id?: string;
}

class TestNormalizedState extends BaseNormalizedState<TestInnerState> {
  static create<TestInnerState>(state?) {
    return new TestNormalizedState(state);
  }
}

describe('BaseNormalizeSate', () => {
  let presenter: TestNormalizedState,
    item: TestInnerState,
    itemId: string,
    itemIds: string[],
    items: TestInnerState[];

  beforeEach(() => {
    itemId = '12312312';
    items = [
      {message: '2312323', id: 'id-1'},
      {message: 'fmjfkjsjsfdjkfs', id: 'id-2'},
      {message: 'vnsj9393939', id: 'id-3'}
    ];
    item = {message: 'boom'};
    itemIds = ['id-1', 'id-2', 'id-3'];

    presenter = TestNormalizedState.create();
  });

  it('checks something', () => {
    expect(presenter.toState()).toMatchSnapshot();
  });

  it('sets new item to a store', () => {
    expect(presenter.set(itemId, item).toState()).toMatchSnapshot();
  });

  it('sets other item with same id', () => {
    presenter.set(itemId, item);

    expect(presenter.set(itemId, {message: 'other sample'}).toState()).toMatchSnapshot();
  });

  it('gets item from store', () => {
    presenter.set(itemId, item);

    expect(presenter.get(itemId)).toEqual(item);
  });

  it('gets all ids for one item', () => {
    presenter.set(itemId, item);

    expect(presenter.allIds()).toEqual([itemId]);
  });

  it('set multiple items with default id prop', () => {
    presenter.setMany(items);

    expect(presenter.toState()).toMatchSnapshot();
  });

  it('set multiple items with custom prop path', () => {
    presenter.setMany(items, i => i.message);

    expect(presenter.toState()).toMatchSnapshot();
  });

  it('gets all ids', () => {
    presenter.setMany(items);

    expect(presenter.allIds()).toEqual(itemIds);
  });

  it('gets all items', () => {
    presenter.setMany(items);

    expect(presenter.allItems()).toEqual(items);
  });
});
