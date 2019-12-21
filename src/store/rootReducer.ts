import produce from 'immer';
import {SpecsPresenter, specsReducer, SpecsState} from '../features/specs';
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
import {encodingsReducer, EncodingsState, initialEncodingsState} from '../features/encodings';
import {ChannelsPresenter, ChannelsState} from '../features/channels/presenters';
import {channelsReducer} from '../features/channels';

export interface RootState {
  version: string;
  specs: SpecsState;
  analyticBoard: AnalyticBoardState;
  repositories: RepositoriesState;
  vegaLiteSchema: VegaLiteSchemaState;
  dataSourceMetadata: DataSourceMetadataState;
  channels: ChannelsState;
  encodings: EncodingsState;
}

const initialState: RootState = {
  version: '',
  specs: SpecsPresenter.create().toState(),
  analyticBoard: initialAnalyticBoardState,
  repositories: initialRepositoriesState,
  vegaLiteSchema: initialVegaLiteSchemaState,
  dataSourceMetadata: initialDataSourceMetadataState,
  channels: ChannelsPresenter.create().toState(),
  encodings: initialEncodingsState
};

export const rootReducer = (state: RootState = initialState, action: Action) => {
  state.version = '1.0.0';

  state.encodings = encodingsReducer(state.encodings, action);

  state.specs = specsReducer(state.specs, action);
  state.analyticBoard = analyticBoardReducer(state.analyticBoard, action);
  state.repositories = repositoriesReducer(state.repositories, action);
  state.vegaLiteSchema = vegaLiteSchemaReducer(state.vegaLiteSchema, action);
  state.dataSourceMetadata = dataSourceMetadataReducer(state.dataSourceMetadata, action);

  state.channels = channelsReducer(state.channels, action);

  return state;
};

export default produce(rootReducer);
