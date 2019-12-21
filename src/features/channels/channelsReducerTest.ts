import {createAction} from '@reduxjs/toolkit';
import {ChannelsPresenter, ChannelsState} from './presenters/ChannelsPresenter';
import * as vegaLiteSpecsFixture from '../__mocks__/vegaLiteSpecsFixtures';
import {channelsReducer} from './channelsReducer';
import {chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';
import {PositionChannelPresenter} from './presenters/PositionChannelPresenter';

describe('Channels Reducer', () => {
  let actual, expected, action, initState: ChannelsState, id: string, spec;

  beforeEach(() => {
    initState = ChannelsPresenter.create().toState();
    spec = vegaLiteSpecsFixture.getSimpleSpec();
    id = 'boom';
  });

  it('creates initial state', () => {
    actual = channelsReducer(null, createAction('anyAction'));
    expected = initState;
    expect(actual).toEqual(initState);
  });

  it('choose spec', () => {
    action = chooseSpecFlowReadSuccess(id, spec);
    actual = channelsReducer(initState, action);
    expected = ChannelsPresenter.create()
      .set(
        'boom/x',
        PositionChannelPresenter.create()
          .setField('a')
          .setType('quantitative')
          .setName('x')
      )
      .set(
        'boom/y',
        PositionChannelPresenter.create()
          .setField('b')
          .setType('ordinal')
          .setName('y')
      )
      .toState();

    expect(actual).toEqual(expected);
  });
});
