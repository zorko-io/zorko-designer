import {BaseNormalizedState} from '../../core/normalize/BaseNormalizedState';
import {RepositoriesState, Repository} from './reducers';

export class RepositoriesStatePresenter extends BaseNormalizedState<Repository> {
  static create(state?: RepositoriesState) {
    return new RepositoriesStatePresenter(state);
  }
}
