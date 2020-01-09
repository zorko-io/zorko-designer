import {createAction} from '@reduxjs/toolkit';
import {ChannelsState, EncodingChannelState, PositionChannelPresenter} from '../presenters';
import * as vegaLiteSpecsFixture from '../../__testFixtures__/vegaLiteSpecsFixtures';
import channelsReducer from './channelsReducer';
import {chooseSpecFlowReadSuccess} from '../../chooseSpecFlow/slices';
import * as channelsStateFixtures from './__mocks___/channelsStateFixtures';
import {encodingChannelFieldEdit} from '../../analyticBoard/slices';
import {NormalizedPresenter} from '../../../packages/corePresenters';
import {createChannelId} from '../../../packages/idGenderators/createChannelId';

describe('Channels Reducer', () => {
  let actual, expected, action, initState: ChannelsState, id: string, spec;

  beforeEach(() => {
    initState = NormalizedPresenter.create<EncodingChannelState>().toState();
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
    expected = NormalizedPresenter.create<EncodingChannelState>(
      channelsStateFixtures.getSimpleChannelsState(id)
    )
      .editById(createChannelId(id, channelName), channel => {
        return PositionChannelPresenter.create(channel).setField(nextField);
      })
      .toState();

    expect(actual).toEqual(expected);
  });
});
