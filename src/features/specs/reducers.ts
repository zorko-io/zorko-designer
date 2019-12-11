import {NormalizedState} from '../../core/normalize/NormalizedState';
import produce from 'immer';
import {specDescriptionEdit, SpecDescriptionEdit, SpecMarkEdit, specMarkEdit} from './actions';
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
  [specMarkEdit.type]: (state: SpecsState, action: SpecMarkEdit) => {
    const {mark, id} = action.payload;

    return SpecsPresenter.create(state)
      .editMark(id, mark)
      .toState();
  },
  [chooseSpecFlowReadSuccess.type]: (state: SpecsState, action: ChooseSpecFlowOpenNewSpec) => {
    const {spec, id} = action.payload;

    // because of version warnings from vega lib
    delete spec.$schema;

    return SpecsPresenter.create(state)
      .add(spec, id)
      .toState();
  }
});

export default produce(reducers);
