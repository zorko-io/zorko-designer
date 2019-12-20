import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Select from 'react-select';
import {selectDataSourceMetadataAll} from '../../dataSourceMetadata/selectors';
import {encodingChannelFieldEdit} from '../actions';
import {
  selectAnalyticBoardEncodingChannels,
  selectAnalyticBoardMainSpecId
} from '../../analyticBoard';

export const EncodingContainer = () => {
  const channels = useSelector(selectAnalyticBoardEncodingChannels);
  const fields = useSelector(selectDataSourceMetadataAll);
  const specId = useSelector(selectAnalyticBoardMainSpecId);
  const dispatch = useDispatch();
  const handleChannelChange = useCallback(
    (field, channelName) => {
      dispatch(
        encodingChannelFieldEdit({
          specId,
          field,
          channelName
        })
      );
    },
    [dispatch, specId]
  );

  return (
    <div>
      {channels.map(channel => (
        <div key={channel.name} className="flex h-10 block m-2">
          <span>{channel.name}</span>
          <div style={{minWidth: '200px'}}>
            <Select
              onChange={({value}) => {
                handleChannelChange(value, channel.name);
              }}
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
