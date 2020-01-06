import produce from 'immer';
import * as specsSlice from '../features/specs/slices';
import * as analyticBoardSlice from '../features/analyticBoard/slices';
import * as channelsSlice from '../features/channels/slices';
import * as encodingsSlice from '../features/encodings/slices';

import repositoriesReducer, {
  initialRepositoriesState,
  RepositoriesState
} from '../features/repositories/slices/repositoriesReducer';
import vegaLiteSchemaReducer, {
  initialVegaLiteSchemaState,
  VegaLiteSchemaState
} from '../features/vegaLiteSchema/slices/vegaLiteSchemaReducer';
import dataSourceMetadataReducer, {
  DataSourceMetadataState,
  initialDataSourceMetadataState
} from '../features/dataSourceMetadata/slices/dataSourceMetadataReducer';

import {AnalyticBoardPresenter, AnalyticBoardState} from '../features/analyticBoard/presenters';
import {Action} from '@reduxjs/toolkit';

import {ChannelsPresenter, ChannelsState} from '../features/channels/presenters';
import {EncodingsPresenter, EncodingsState} from '../features/encodings/presenters';
import {SpecsPresenter, SpecsState} from '../features/specs/presenters';

export interface RootState {
  version: string;
  specs: SpecsState;
  analyticBoard: AnalyticBoardState;
  repositories: RepositoriesState;
  vegaLiteSchema: VegaLiteSchemaState;
  dataSourceMetadata: DataSourceMetadataState;
  channels: ChannelsState;
  newEncoding: EncodingsState;
}

export const initialRootState: RootState = {
  version: '',
  specs: SpecsPresenter.create().toState(),
  analyticBoard: AnalyticBoardPresenter.create().toState(),
  repositories: initialRepositoriesState,
  vegaLiteSchema: initialVegaLiteSchemaState,
  dataSourceMetadata: initialDataSourceMetadataState,
  channels: ChannelsPresenter.create().toState(),
  newEncoding: EncodingsPresenter.create().toState()
};

export const rootReducer = (state: RootState = initialRootState, action: Action) => {
  state.version = '1.0.0';

  state.newEncoding = encodingsSlice.reducer(state.newEncoding, action);

  state.specs = specsSlice.reducer(state.specs, action);
  state.analyticBoard = analyticBoardSlice.reducer(state.analyticBoard, action);
  state.repositories = repositoriesReducer(state.repositories, action);
  state.vegaLiteSchema = vegaLiteSchemaReducer(state.vegaLiteSchema, action);
  state.dataSourceMetadata = dataSourceMetadataReducer(state.dataSourceMetadata, action);

  state.channels = channelsSlice.reducer(state.channels, action);

  return state;
};

export default produce(rootReducer);
