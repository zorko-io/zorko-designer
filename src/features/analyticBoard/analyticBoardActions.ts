import {createAction} from '@reduxjs/toolkit';

export const encodingChannelFieldEdit = createAction(
  'encodingChannels/channelFieldEdit',
  ({specId, field, channelName} = {}) => ({
    payload: {specId, field, channelName}
  })
);

export type EncodingChannelFieldEdit = ReturnType<typeof encodingChannelFieldEdit>;
