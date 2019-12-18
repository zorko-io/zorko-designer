import {createAction} from '@reduxjs/toolkit';

export const encodingChannelFieldEdit = createAction(
  'encodingChannels/channelFieldEdit',
  ({specId, field, channel} = {}) => ({
    payload: {specId, field, channel}
  })
);

export type EncodingChannelFieldEdit = ReturnType<typeof encodingChannelFieldEdit>;
