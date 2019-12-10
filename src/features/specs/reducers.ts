import {NormalizedState} from '../../core/normalize/NormalizedState';
import produce from 'immer';
import {specDescriptionEdit, SpecDescriptionEdit} from './actions';
import {SpecsPresenter} from './presenter';
import {VegaLiteTopLevelUnitSpec} from '../../common/types';
import {ChooseSpecFlowOpenNewSpec, chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';
import {createReducer} from '../../common/utils/createReducer';

export interface SpecsState extends NormalizedState<VegaLiteTopLevelUnitSpec> {}

export const initialSpecsState: SpecsState = SpecsPresenter.create().toState();

const reducers = createReducer<SpecsState>(initialSpecsState, {
  [specDescriptionEdit.type]: (state: SpecsState, action: SpecDescriptionEdit) => {
    const {description, id} = action.payload;

    return SpecsPresenter.create(state)
      .editDescription(id, description)
      .toState();
  },
  [chooseSpecFlowReadSuccess.type]: (state: SpecsState, action: ChooseSpecFlowOpenNewSpec) => {
    const {spec, id} = action.payload;

    return SpecsPresenter.create(state)
      .add(spec, id)
      .toState();
  }
});

export default produce(reducers);
