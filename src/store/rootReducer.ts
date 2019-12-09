import produce from 'immer';
import {specsReducer, SpecsState, initialSpecsState} from '../features/specs';
import repositoriesReducer, {
  initialRepositoriesState,
  RepositoriesState
} from '../features/repositories/reducers';
import {AnalyticBoardState, initialAnalyticBoardState} from '../features/analyticBoard';
import {Action} from '@reduxjs/toolkit';
import {analyticBoardReducer} from '../features/analyticBoard';

export interface RootState {
  version: string;
  specs: SpecsState;
  analyticBoard: AnalyticBoardState;
  repositories: RepositoriesState;
}

const initialState: RootState = {
  version: '',
  specs: initialSpecsState,
  analyticBoard: initialAnalyticBoardState,
  repositories: initialRepositoriesState
};

export const rootReducer = (state: RootState = initialState, action: Action) => {
  state.version = '1.0.0';
  state.specs = specsReducer(state.specs, action);
  state.analyticBoard = analyticBoardReducer(state.analyticBoard, action);
  state.repositories = repositoriesReducer(state.repositories, action);

  return state;
};

export default produce(rootReducer);
