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
    itemIds = ['id-1', 'id-2', 'id-3'];
    item = {message: 'boomm'};

    presenter = TestNormalizedState.create();
  });

  it('checks something', () => {
    expect(presenter.toState()).toMatchSnapshot();
  });

  it('sets new item to a store', () => {
    expect(presenter.set(item, itemId).toState()).toMatchSnapshot();
  });

  it('sets other item with same id', () => {
    presenter.set(item, itemId);

    expect(presenter.set({message: 'other sample'}, itemId).toState()).toMatchSnapshot();
  });

  it('gets item from store', () => {
    presenter.set(item, itemId);

    expect(presenter.get(itemId)).toEqual(item);
  });

  it('gets all ids for one item', () => {
    presenter.set(item, itemId);

    expect(presenter.allIds()).toEqual([itemId]);
  });

  it('set multiple items with default id prop', () => {
    presenter.setMany(items);

    expect(presenter.toState()).toMatchSnapshot();
  });
});
