import {SpecsPresenter} from './presenter';
import {RootState} from '../../store/rootReducer';

export const selectSpecById = (state: RootState, id: string) => {
  return SpecsPresenter.create(state.specs).byId(id);
};
