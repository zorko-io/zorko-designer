/**
 * @todo #105:50m/DEV Wrap in class based Id generators
 *  usages: `ChannelId.create(specId, channelName).toString()`
 *  and `ChannelId.parse(channelId).getName()`
 */

export const createChannelId = (specId, channelName): string => `${specId}/${channelName}`;

export const extractChannelNameFromId = id => id.split('/')[1];
