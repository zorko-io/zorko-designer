import * as Api from '../packages/designerApi';
import {
  repositoriesReadFailure,
  repositoriesReadRequest,
  repositoriesReadSuccess
} from '../features/repositories';

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
