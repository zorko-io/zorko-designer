import {NormalizedState} from '../../core/normalize/NormalizedState';
import produce from 'immer';
import {specDescriptionEdit, SpecDescriptionEdit, SpecMarkEdit, specMarkEdit} from './actions';
import {SpecsPresenter} from './presenter';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../chooseSpecFlow/actions';
import {createReducer} from '../../common/utils/createReducer';
import {EncodingChannelFieldEdit, encodingChannelFieldEdit} from '../encodingChannels';

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
  [encodingChannelFieldEdit.type]: (state: SpecsState, action: EncodingChannelFieldEdit) => {
    const {specId, channel, field} = action.payload;
    // todo: move to channels reducer/presenter
    return SpecsPresenter.create(state)
      .editEncodingChannelField(specId, channel, field)
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
      .add(specState, id)
      .toState();
  }
});

export default produce(reducers);
