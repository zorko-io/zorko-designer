import {DataSourceMetadataPresenter} from './DataSourceMetadataPresenter';

describe('DataSourceMetadataPresenter', () => {
  let presenter;

  beforeEach(() => {
    presenter = DataSourceMetadataPresenter.create();
  });

  it('creates default', () => {
    expect(presenter.toState()).toMatchSnapshot();
  });
});
