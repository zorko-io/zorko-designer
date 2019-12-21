export const createChannelId = (specId, channelName) => `${specId}/${channelName}`;

export const extractChannelNameFromId = id => id.split('/')[1];
