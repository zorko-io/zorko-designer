import {PositionChannelPresenter} from './PositionChannelPresenter';

describe('PositionChannelPresenter', () => {
  let presenter: PositionChannelPresenter;

  beforeEach(() => {
    presenter = PositionChannelPresenter.create();
  });

  it('creates default state', () => {
    expect(PositionChannelPresenter.create().toState()).toMatchSnapshot();
  });

  it('sets field', () => {
    expect(presenter.setField('a').toState()).toMatchSnapshot();
  });

  it('sets type', () => {
    expect(presenter.setType('quantitative').toState()).toMatchSnapshot();
  });

  it('sets name', () => {
    expect(presenter.setName('x').toState()).toMatchSnapshot();
  });

  it('gets name', () => {
    expect(presenter.setName('x').getName()).toEqual('x');
  });

  it('gets type', () => {
    expect(presenter.setType('ordinal').getType()).toEqual('ordinal');
  });

  it('gets field', () => {
    expect(presenter.setField('a').getField()).toEqual('a');
  });
});
