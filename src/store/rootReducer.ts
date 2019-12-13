import produce from 'immer';
import {specsReducer, SpecsState, initialSpecsState} from '../features/specs';
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
  AnalyticBoardState,
  initialAnalyticBoardState
} from '../features/analyticBoard';
import {Action} from '@reduxjs/toolkit';
import {analyticBoardReducer} from '../features/analyticBoard';
import {
  dataSourceMetadataReducer,
  DataSourceMetadataState,
  initialDataSourceMetadataState
} from '../features/dataSourceMetadata';

export interface RootState {
  version: string;
  specs: SpecsState;
  analyticBoard: AnalyticBoardState;
  repositories: RepositoriesState;
  vegaLiteSchema: VegaLiteSchemaState,
  dataSourceMetadata: DataSourceMetadataState
}

const initialState: RootState = {
  version: '',
  specs: initialSpecsState,
  analyticBoard: initialAnalyticBoardState,
  repositories: initialRepositoriesState,
  vegaLiteSchema: initialVegaLiteSchemaState,
  dataSourceMetadata: initialDataSourceMetadataState
};

export const rootReducer = (state: RootState = initialState, action: Action) => {
  state.version = '1.0.0';

  state.specs = specsReducer(state.specs, action);
  state.analyticBoard = analyticBoardReducer(state.analyticBoard, action);
  state.repositories = repositoriesReducer(state.repositories, action);
  state.vegaLiteSchema = vegaLiteSchemaReducer(state.vegaLiteSchema, action);
  state.dataSourceMetadata = dataSourceMetadataReducer(state.dataSourceMetadata, action);

  return state;
};

export default produce(rootReducer);
