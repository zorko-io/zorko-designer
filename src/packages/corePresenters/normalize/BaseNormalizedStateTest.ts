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
    expect(presenter.set(itemId, item).get(itemId)).toEqual(item);
  });

  it('gets all ids for one item', () => {
    expect(presenter.set(itemId, item).allIds()).toEqual([itemId]);
  });

  it('set multiple items with default id prop', () => {
    expect(presenter.setMany(items).toState()).toMatchSnapshot();
  });

  it('set multiple items with custom prop path', () => {
    expect(presenter.setMany(items, i => i.message).toState()).toMatchSnapshot();
  });

  it('gets all ids', () => {
    expect(presenter.setMany(items).allIds()).toEqual(itemIds);
  });

  it('gets all items', () => {
    expect(presenter.setMany(items).allItems()).toEqual(items);
  });

  it('edits item by id', () => {
    const nextMessage = 'modified';

    const nextItem = presenter
      .set(itemId, item)
      .editById(itemId, prevItem => {
        prevItem.message = nextMessage;
        return prevItem;
      })
      .get(itemId);

    expect(nextItem.message).toEqual(nextMessage);
  });
});
