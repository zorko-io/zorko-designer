import {EncodingChannelNames, EncodingPresenter} from './EncodingPresenter';

describe('Encoding Presenter', () => {
  let presenter: EncodingPresenter;

  beforeEach(() => {
    presenter = EncodingPresenter.create();
  });

  it('creates default', () => {
    expect(EncodingPresenter.create().toState()).toMatchSnapshot();
  });

  it('sets x', () => {
    expect(presenter.setX('bar/x').toState()).toMatchSnapshot();
  });

  it('sets y', () => {
    expect(presenter.setY('bar/y').toState()).toMatchSnapshot();
  });

  it('sets color', () => {
    expect(presenter.setColor('bar/color').toState()).toMatchSnapshot();
  });

  it('gets y', () => {
    expect(presenter.setY('bar/y').getY()).toEqual('bar/y');
  });

  it('gets x', () => {
    expect(presenter.setX('bar/x').getX()).toEqual('bar/x');
  });

  it('gets color', () => {
    expect(presenter.setColor('bar/color').getColor()).toEqual('bar/color');
  });

  it('sets channel by name', () => {
    expect(presenter.setChannel(EncodingChannelNames.X, 'bar/x').getX()).toEqual('bar/x');
    expect(presenter.setChannel(EncodingChannelNames.Y, 'bar/y').getY()).toEqual('bar/y');
    expect(presenter.setChannel(EncodingChannelNames.COLOR, 'bar/color').getColor()).toEqual(
      'bar/color'
    );
  });
});
