import produce from 'immer';
import {initialSpecsState, specsReducer, SpecsState} from '../features/specs';
import repositoriesReducer, {
  initialRepositoriesState,
  RepositoriesState
} from '../features/repositories/reducers';
import {
  initialVegaLiteSchemaState,
  vegaLiteSchemaReducer,
  VegaLiteSchemaState
} from '../features/vegaLiteSchema';
import {
  analyticBoardReducer,
  AnalyticBoardState,
  initialAnalyticBoardState
} from '../features/analyticBoard';
import {Action} from '@reduxjs/toolkit';
import {
  dataSourceMetadataReducer,
  DataSourceMetadataState,
  initialDataSourceMetadataState
} from '../features/dataSourceMetadata';
import {initialEncodingChannelsState} from '../features/encoding/reducers';
import {encodingChannelsReducer} from '../features/encoding';
import {EncodingChannelsState} from '../features/encoding/presenters/EncodingChannelsPresenter';

export interface RootState {
  version: string;
  specs: SpecsState;
  analyticBoard: AnalyticBoardState;
  repositories: RepositoriesState;
  vegaLiteSchema: VegaLiteSchemaState;
  dataSourceMetadata: DataSourceMetadataState;
  encodingChannels: EncodingChannelsState;
}

const initialState: RootState = {
  version: '',
  specs: initialSpecsState,
  analyticBoard: initialAnalyticBoardState,
  repositories: initialRepositoriesState,
  vegaLiteSchema: initialVegaLiteSchemaState,
  dataSourceMetadata: initialDataSourceMetadataState,
  encodingChannels: initialEncodingChannelsState
};

export const rootReducer = (state: RootState = initialState, action: Action) => {
  state.version = '1.0.0';

  state.specs = specsReducer(state.specs, action);
  state.analyticBoard = analyticBoardReducer(state.analyticBoard, action);
  state.repositories = repositoriesReducer(state.repositories, action);
  state.vegaLiteSchema = vegaLiteSchemaReducer(state.vegaLiteSchema, action);
  const dataSourceMetadata = dataSourceMetadataReducer(state.dataSourceMetadata, action);
  state.dataSourceMetadata = dataSourceMetadata;

  state.encodingChannels = encodingChannelsReducer(state.encodingChannels, action, {
    dataSourceMetadata
  });

  return state;
};

export default produce(rootReducer);
