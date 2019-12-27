export const createChannelId = (specId, channelName): string => `${specId}/${channelName}`;

export const extractChannelNameFromId = id => id.split('/')[1];
