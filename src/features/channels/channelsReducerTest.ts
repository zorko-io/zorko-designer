import {createAction} from '@reduxjs/toolkit';
import {
  ChannelsPresenter,
  ChannelsState,
  PositionChannelPresenter
} from '../../presenters/encodingChannels';
import * as vegaLiteSpecsFixture from '../__mocks__/vegaLiteSpecsFixtures';
import channelsReducer from './channelsReducer';
import {chooseSpecFlowReadSuccess} from '../chooseSpecFlow';
import * as channelsStateFixtures from './__mocks___/channelsStateFixtures';
import {createChannelId} from '../../packages/presenterReducerUtils';
import {encodingChannelFieldEdit} from '../analyticBoard';

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
    expected = channelsStateFixtures.getSimpleChannelsState(id);

    expect(actual).toEqual(expected);
  });

  it('edits channel field', () => {
    const nextField = 'b';
    const channelName = 'x';
    initState = channelsStateFixtures.getSimpleChannelsState(id);
    action = encodingChannelFieldEdit({specId: id, field: nextField, channelName});

    actual = channelsReducer(initState, action);
    expected = ChannelsPresenter.create(channelsStateFixtures.getSimpleChannelsState(id))
      .editById(createChannelId(id, channelName), channel => {
        return PositionChannelPresenter.create(channel).setField(nextField);
      })
      .toState();

    expect(actual).toEqual(expected);
  });
});
