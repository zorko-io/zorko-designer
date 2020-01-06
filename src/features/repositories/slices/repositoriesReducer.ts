import produce from 'immer';
import {createReducer} from '../../../packages/presenterReducerUtils/createReducer';
import {RepositoriesReadSuccess, repositoriesReadSuccess} from './repositoriesActions';
import {NormalizedState} from '../../../packages/corePresenters/normalize/NormalizedState';
import {RepositoriesStatePresenter} from '../presenters/RepositoriesStatePresenter';

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
