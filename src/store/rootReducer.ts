import produce from 'immer';
import {specsReducer} from '../features/specs';
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
  AnalyticBoardPresenter,
  analyticBoardReducer,
  AnalyticBoardState
} from '../features/analyticBoard';

import {Action} from '@reduxjs/toolkit';
import {
  dataSourceMetadataReducer,
  DataSourceMetadataState,
  initialDataSourceMetadataState
} from '../features/dataSourceMetadata';
import {ChannelsPresenter, ChannelsState} from '../presenters/encodingChannels';
import {channelsReducer} from '../features/channels';
import {encodingsReducer} from '../features/encodings';
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

  state.newEncoding = encodingsReducer(state.newEncoding, action);

  state.specs = specsReducer(state.specs, action);
  state.analyticBoard = analyticBoardReducer(state.analyticBoard, action);
  state.repositories = repositoriesReducer(state.repositories, action);
  state.vegaLiteSchema = vegaLiteSchemaReducer(state.vegaLiteSchema, action);
  state.dataSourceMetadata = dataSourceMetadataReducer(state.dataSourceMetadata, action);

  state.channels = channelsReducer(state.channels, action);

  return state;
};

export default produce(rootReducer);
