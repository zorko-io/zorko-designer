import produce from 'immer';
import {createReducer} from '../../common/utils/createReducer';
import {DataSourceMetadataReadSuccess, dataSourceMetadataReadSuccess} from './actions';
import {DataSourceFieldDefinition} from '../../common/DataSourceFieldDefinition';

export type DataSourceMetadataState = {
  fields: DataSourceFieldDefinition[]
};

export const initialDataSourceMetadataState: DataSourceMetadataState = { fields: []};

const dataSourceMetadataReducer = createReducer<DataSourceMetadataState>(initialDataSourceMetadataState, {
  [dataSourceMetadataReadSuccess.type]: (
    state: DataSourceMetadataState,
    action: DataSourceMetadataReadSuccess
  ) => {
    const { dataSourceMetadata } = action.payload;

    state.fields = dataSourceMetadata.fields;

    return state;
  }
});

export default produce(dataSourceMetadataReducer);
