import produce from 'immer';
import {createReducer} from '../../packages/presenterReducerUtils/createReducer';
import {
  DataSourceMetadataReadSuccess,
  dataSourceMetadataReadSuccess
} from './dataSourceMetadataActions';
import {DataSourceFieldDefinition} from '../../packages/coreTypes/DataSourceFieldDefinition';

export type DataSourceMetadataState = {
  fields: DataSourceFieldDefinition[];
};

/**
 * @todo #114:40m/DEV DataSources Migrate to Presenter-Reducer approach
 *  prep presenters, use createReducer util
 *
 */

export const initialDataSourceMetadataState: DataSourceMetadataState = {fields: []};

const dataSourceMetadataReducer = createReducer<DataSourceMetadataState>(
  initialDataSourceMetadataState,
  {
    [dataSourceMetadataReadSuccess.type]: (
      state: DataSourceMetadataState,
      action: DataSourceMetadataReadSuccess
    ) => {
      const {dataSourceMetadata} = action.payload;

      state.fields = dataSourceMetadata.fields;

      return state;
    }
  }
);

export default produce(dataSourceMetadataReducer);
