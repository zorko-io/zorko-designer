import {SpecPresenter} from './presenter';

describe('SpecPresenterTest', () => {
  let presenter: SpecPresenter;

  beforeEach(() => {
    presenter = SpecPresenter.create();
  });

  it('creates default state', () => {
    expect(SpecPresenter.create().toState()).toMatchSnapshot();
  });

  it('sets description', () => {
    expect(presenter.setDescription('newDescription').toState()).toMatchSnapshot();
  });

  it('sets mark', () => {
    expect(presenter.setMark('newMark').toState()).toMatchSnapshot();
  });

  it('sets encoding', () => {
    expect(presenter.setEncoding('newEncoding').toState()).toMatchSnapshot();
  });

  it('sets data', () => {
    expect(presenter.setData({values: []}).toState()).toMatchSnapshot();
  });
});
