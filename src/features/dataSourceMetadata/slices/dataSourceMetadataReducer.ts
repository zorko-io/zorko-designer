import produce from 'immer';
import {
  DataSourceMetadataReadSuccess,
  dataSourceMetadataReadSuccess
} from './dataSourceMetadataActions';
import {DataSourceMetadataPresenter, DataSourceMetadataState} from '../presenters';
import {createReducerWithPresenter} from '../../../packages/presenterReducerUtils/createReducerWithPresenter';

export default produce(
  createReducerWithPresenter<DataSourceMetadataState, DataSourceMetadataPresenter>(
    DataSourceMetadataPresenter.create,
    {
      [dataSourceMetadataReadSuccess.type]: (presenter, action: DataSourceMetadataReadSuccess) => {
        const {dataSourceMetadata} = action.payload;

        return presenter.setFields(dataSourceMetadata.fields);
      }
    }
  )
);
