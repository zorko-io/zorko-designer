import produce from 'immer';
import {createReducer} from '../../packages/presenterReducerUtils/createReducer';
import {RepositoriesReadSuccess, repositoriesReadSuccess} from './actions';
import {NormalizedState} from '../../packages/corePresenters/normalize/NormalizedState';
import {RepositoriesStatePresenter} from './presenters';

export interface Repository {
  name: string;
  resources: any[];
}

export interface RepositoriesState extends NormalizedState<Repository> {}

export const initialRepositoriesState: RepositoriesState = RepositoriesStatePresenter.create().toState();

const repositoriesReducer = createReducer<RepositoriesState>(initialRepositoriesState, {
  [repositoriesReadSuccess.type]: (state: RepositoriesState, action: RepositoriesReadSuccess) => {
    const {repositories} = action.payload;

    return RepositoriesStatePresenter.create(state)
      .setMany(repositories, repo => repo.name)
      .toState();
  }
});

export default produce(repositoriesReducer);
