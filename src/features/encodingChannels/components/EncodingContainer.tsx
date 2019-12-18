import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Select from 'react-select';
import {selectEncodingChannelsAll} from '../selectors';
import {selectDataSourceMetadataAll} from '../../dataSourceMetadata/selectors';
import {encodingChannelFieldEdit} from '../actions';
import {selectAnalyticBoardMainSpecId} from '../../analyticBoard';

export const EncodingContainer = () => {
  const channels = useSelector(selectEncodingChannelsAll);
  const fields = useSelector(selectDataSourceMetadataAll);
  const specId = useSelector(selectAnalyticBoardMainSpecId);
  const dispatch = useDispatch();
  const handleChannelChange = useCallback(
    (field, channel) => {
      dispatch(
        encodingChannelFieldEdit({
          specId,
          field,
          channel
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
