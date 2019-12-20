import {BaseNormalizedState} from './BaseNormalizedState';

interface TestInnerState {
  message: string;
}

class TestNormalizedState extends BaseNormalizedState<TestInnerState> {
  static create<TestInnerState>(state?) {
    return new TestNormalizedState(state);
  }
}

describe('BaseNormalizeSate', () => {
  let presenter: TestNormalizedState;

  beforeEach(() => {
    presenter = TestNormalizedState.create();
  });

  it('checks something', () => {
    expect(presenter.toState()).toMatchSnapshot();
  });
});
