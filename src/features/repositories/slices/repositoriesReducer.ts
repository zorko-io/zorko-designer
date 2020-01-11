import produce from 'immer';
import {RepositoriesReadSuccess, repositoriesReadSuccess} from './repositoriesActions';
import {NormalizedPresenter} from '../../../packages/corePresenters';
import {createReducerWithPresenter} from '../../../packages/presenterReducerUtils/createReducerWithPresenter';
import {RepositoriesState, RepositoryState} from '../presenters';
import {createRepositoryId} from '../presenters/createRepositoryId';

export default produce(
  createReducerWithPresenter<RepositoriesState, NormalizedPresenter<RepositoryState>>(
    NormalizedPresenter.create,
    {
      [repositoriesReadSuccess.type]: (presenter, action: RepositoriesReadSuccess) => {
        const {repositories} = action.payload;
        return presenter.setMany(repositories, createRepositoryId);
      }
    }
  )
);
