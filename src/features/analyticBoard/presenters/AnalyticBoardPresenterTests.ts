import {AnalyticBoardPresenter} from './AnalyticBoardPresenter';

describe('AnalyticBoardPresenter', () => {
  let presenter: AnalyticBoardPresenter;

  beforeEach(() => {
    presenter = AnalyticBoardPresenter.create();
  });

  it('creates with default state', () => {
    expect(AnalyticBoardPresenter.create().toState()).toMatchSnapshot();
  });

  it('sets main spec id', () => {
    expect(presenter.setMainSpec('123').toState()).toMatchSnapshot();
  });

  it('gets main spec id', () => {
    expect(presenter.setMainSpec('234').getMainSpec()).toEqual('234');
  });

  it('sets selected channels', () => {
    expect(presenter.setChannels(['bar/x', 'bar/y', 'bar/z']).toState()).toMatchSnapshot();
  });

  it('gets selected channels', () => {
    expect(presenter.setChannels(['bar/x', 'bar/y', 'bar/z']).getChannels()).toEqual([
      'bar/x',
      'bar/y',
      'bar/z'
    ]);
  });
});
