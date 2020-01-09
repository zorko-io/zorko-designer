import {RootState} from '../../../store/rootReducer';
import {createSelector} from '@reduxjs/toolkit';
import {NormalizedPresenter} from '../../../packages/corePresenters';
import {RepositoryState} from '../presenters';

export const selectRepositories = (state: RootState) => state.repositories;

export const selectRepositoriesAll = createSelector(selectRepositories, repositories =>
  NormalizedPresenter.create<RepositoryState>(repositories).allItems()
);
