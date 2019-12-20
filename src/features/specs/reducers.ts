import {NormalizedState} from '../../core/normalize/NormalizedState';
import produce from 'immer';
import {specDescriptionEdit, SpecDescriptionEdit, SpecMarkEdit, specMarkEdit} from './actions';
import {SpecsPresenter} from './presenter';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';
import {createReducer} from '../../common/utils/createReducer';

export interface SpecState {
  description: string;
  mark: string;
  data: object;
  encoding: string;
}

export interface SpecsState extends NormalizedState<SpecState> {}

export const initialSpecsState: SpecsState = SpecsPresenter.create().toState();

const reducers = createReducer<SpecsState>(initialSpecsState, {
  [specDescriptionEdit.type]: (state: SpecsState, action: SpecDescriptionEdit) => {
    const {description, id} = action.payload;

    return SpecsPresenter.create(state)
      .editDescription(id, description)
      .toState();
  },
  [specMarkEdit.type]: (state: SpecsState, action: SpecMarkEdit) => {
    const {mark, id} = action.payload;

    return SpecsPresenter.create(state)
      .editMark(id, mark)
      .toState();
  },
  [chooseSpecFlowReadSuccess.type]: (state: SpecsState, action: ChooseSpecFlowReadSuccess) => {
    const {spec, id} = action.payload;

    const specState = {
      mark: spec.mark as string,
      data: spec.data,
      description: spec.description,
      encoding: id
    };
    return SpecsPresenter.create(state)
      .set(id, specState)
      .toState();
  }
});

export default produce(reducers);
