import React from 'react';
import {useSelector} from 'react-redux';
import Select from 'react-select';
import {selectEncodingChannelsAll} from '../selectors';
import {selectDataSourceMetadataAll} from '../../dataSourceMetadata/selectors';

export const EncodingContainer = () => {
  const channels = useSelector(selectEncodingChannelsAll);
  const fields = useSelector(selectDataSourceMetadataAll);

  return (
    <div>
      {channels.map(channel => (
        <div key={channel.name} className="flex h-10 block m-2">
          <span>{channel.name}</span>
          <div style={{minWidth: '200px'}}>
            <Select
              value={{
                value: channel.field,
                label: channel.field
              }}
              options={fields.map(field => {
                return {
                  value: field.name,
                  label: field.name
                };
              })}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
