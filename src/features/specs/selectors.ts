import {SpecsPresenter} from './presenter';
import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store/rootReducer';

export const selectSpecs = (state: RootState) => state.specs;


export const selectSpecById = (state: RootState, id: string) => {
  return SpecsPresenter.create(state.specs).byId(id);
};
