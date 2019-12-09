import {RootState} from '../../store/rootReducer';
import {RepositoriesStatePresenter} from './presenters';

export const selectRepositoriesAll = (state: RootState) => {
  return RepositoriesStatePresenter.create(state.repositories).items();
};
