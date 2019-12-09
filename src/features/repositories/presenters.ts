import {BaseNormalizedState} from '../../core/normalize/BaseNormalizedState';
import {RepositoriesState, Repository} from './reducers';

export class RepositoriesStatePresenter extends BaseNormalizedState<Repository> {
  static create(state?: RepositoriesState) {
    return new RepositoriesStatePresenter(state);
  }

  // TODO: move to base class
  addMany(repositories: Repository[]) {
    for (const repo of repositories) {
      this.add(repo, repo.name);
    }
    return this;
  }
}
