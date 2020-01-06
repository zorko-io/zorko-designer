import {RootState} from '../../../store/rootReducer';
import {RepositoriesStatePresenter} from '../presenters/RepositoriesStatePresenter';
import {createSelector} from '@reduxjs/toolkit';

export const selectRepositories = (state: RootState) => state.repositories;

export const selectRepositoriesAll = createSelector(selectRepositories, repositories =>
  RepositoriesStatePresenter.create(repositories).allItems()
);
