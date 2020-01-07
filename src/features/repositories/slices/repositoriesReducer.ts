import produce from 'immer';
import {createReducer} from '../../../packages/presenterReducerUtils/createReducer';
import {RepositoriesReadSuccess, repositoriesReadSuccess} from './repositoriesActions';
import {NormalizedPresenter, NormalizedState} from '../../../packages/corePresenters';

export interface Repository {
  name: string;
  resources: any[];
}

/**
 * @todo #114:40m/DEV Repositories Migrate to Presenter-Reducer approach
 *  prep presenters, use createReducer util
 *
 */

export interface RepositoriesState extends NormalizedState<Repository> {}

export const initialRepositoriesState: RepositoriesState = NormalizedPresenter.create<
  Repository
>().toState();

const repositoriesReducer = createReducer<RepositoriesState>(initialRepositoriesState, {
  [repositoriesReadSuccess.type]: (state: RepositoriesState, action: RepositoriesReadSuccess) => {
    const {repositories} = action.payload;

    return NormalizedPresenter.create<Repository>(state)
      .setMany(repositories, repo => repo.name)
      .toState();
  }
});

export default produce(repositoriesReducer);
