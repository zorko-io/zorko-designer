import React from 'react';
import {useSelector} from 'react-redux';
import {selectEncodingChannelsAll} from '../selectors';

export const EncodingContainer = () => {
  const channels = useSelector(selectEncodingChannelsAll);

  return (
    <div>
      {channels.map(channel => (
        <div key={channel.name} className="flex h-10">
          <div className={'block m-2'}>{channel.name}</div>
          <div className={'block m-2'}>{channel.field}</div>
          <div className={'block m-2'}>{channel.type + '|'}</div>
        </div>
      ))}
    </div>
  );
};
