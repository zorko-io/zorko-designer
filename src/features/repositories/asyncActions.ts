import * as Api from '../../api';
import {repositoriesReadFailure, repositoriesReadRequest, repositoriesReadSuccess} from './actions';

export const repositoriesLoadInitial = () => {
  return async dispatch => {
    dispatch(repositoriesReadRequest());

    try {
      const repositories = await Api.fetchExamplesRepositories();

      dispatch(repositoriesReadSuccess(repositories));
    } catch (error) {
      dispatch(repositoriesReadFailure(error));
    }
  };
};
