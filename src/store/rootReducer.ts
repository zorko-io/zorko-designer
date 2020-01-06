import produce from 'immer';
import * as specsSlice from '../features/specs';
import * as analyticBoardSlice from '../features/analyticBoard';
import * as channelsSlice from '../features/channels';
import * as encodingsSlice from '../features/encodings';

import repositoriesReducer, {
  initialRepositoriesState,
  RepositoriesState
} from '../features/repositories/repositoriesReducer';
import vegaLiteSchemaReducer, {
  initialVegaLiteSchemaState,
  VegaLiteSchemaState
} from '../features/vegaLiteSchema/vegaLiteSchemaReducer';
import dataSourceMetadataReducer, {
  DataSourceMetadataState,
  initialDataSourceMetadataState
} from '../features/dataSourceMetadata/dataSourceMetadataReducer';

import {AnalyticBoardPresenter, AnalyticBoardState} from '../presenters/analyticBoard';
import {Action} from '@reduxjs/toolkit';

import {ChannelsPresenter, ChannelsState} from '../presenters/encodingChannels';
import {EncodingsPresenter, EncodingsState} from '../presenters/encodings';
import {SpecsPresenter, SpecsState} from '../presenters/specs';

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
