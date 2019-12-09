import {Presenters} from './presenters';
import {RootState} from '../../store/rootReducer';

export const selectSpecById = (state: RootState, id: string) => {
  return Presenters.create(state.specs).byId(id);
};
