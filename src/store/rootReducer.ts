import produce from 'immer';
import * as specsSlice from '../features/specs/slices';
import * as analyticBoardSlice from '../features/analyticBoard/slices';
import * as channelsSlice from '../features/channels/slices';
import * as encodingsSlice from '../features/encodings/slices';
import * as dataSourceMetadataSlice from '../features/dataSourceMetadata/slices';
import * as repositoriesSlice from '../features/repositories/slices';
import * as vegaLiteSchemaSlice from '../features/vegaLiteSchema/slices';

import {AnalyticBoardPresenter, AnalyticBoardState} from '../features/analyticBoard/presenters';
import {Action} from '@reduxjs/toolkit';

import {ChannelsState, EncodingChannelState} from '../features/channels/presenters';
import {EncodingsState, EncodingState} from '../features/encodings/presenters';
import {SpecsState, SpecState} from '../features/specs/presenters';
import {NormalizedPresenter} from '../packages/corePresenters';
import {
  DataSourceMetadataPresenter,
  DataSourceMetadataState
} from '../features/dataSourceMetadata/presenters';
import {RepositoriesState, RepositoryState} from '../features/repositories/presenters';
import {VegaLiteSchemaPresenter, VegaLiteSchemaState} from '../features/vegaLiteSchema/presenters';

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
  specs: NormalizedPresenter.create<SpecState>().toState(),
  analyticBoard: AnalyticBoardPresenter.create().toState(),
  repositories: NormalizedPresenter.create<RepositoryState>().toState(),
  vegaLiteSchema: VegaLiteSchemaPresenter.create().toState(),
  dataSourceMetadata: DataSourceMetadataPresenter.create().toState(),
  channels: NormalizedPresenter.create<EncodingChannelState>().toState(),
  newEncoding: NormalizedPresenter.create<EncodingState>().toState()
};

export const rootReducer = (state: RootState = initialRootState, action: Action) => {
  state.version = '1.0.0';

  state.newEncoding = encodingsSlice.reducer(state.newEncoding, action);

  state.specs = specsSlice.reducer(state.specs, action);
  state.analyticBoard = analyticBoardSlice.reducer(state.analyticBoard, action);
  state.repositories = repositoriesSlice.reducer(state.repositories, action);
  state.vegaLiteSchema = vegaLiteSchemaSlice.reducer(state.vegaLiteSchema, action);
  state.dataSourceMetadata = dataSourceMetadataSlice.reducer(state.dataSourceMetadata, action);

  state.channels = channelsSlice.reducer(state.channels, action);

  return state;
};

export default produce(rootReducer);
