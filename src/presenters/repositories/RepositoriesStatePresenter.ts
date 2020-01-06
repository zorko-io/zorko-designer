import {BaseNormalizedState} from '../../packages/corePresenters/normalize/BaseNormalizedState';
import {RepositoriesState, Repository} from '../../features/repositories/repositoriesReducer';

export class RepositoriesStatePresenter extends BaseNormalizedState<Repository> {
  static create(state?: RepositoriesState) {
    return new RepositoriesStatePresenter(state);
  }
}
