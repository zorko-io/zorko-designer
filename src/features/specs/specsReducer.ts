import {specDescriptionEdit, SpecDescriptionEdit, SpecMarkEdit, specMarkEdit} from './actions';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../chooseSpecFlow';
import {createReducerWithPresenter} from '../../packages/presenterReducerUtils/createReducerWithPresenter';
import {SpecPresenter, SpecsPresenter, SpecsState} from '../../presenters/specs';
import produce from 'immer';

export const specsReducer = produce(
  createReducerWithPresenter<SpecsState, SpecsPresenter>(SpecsPresenter.create, {
    [specDescriptionEdit.type]: (presenter: SpecsPresenter, action: SpecDescriptionEdit) => {
      const {description, id} = action.payload;

      return presenter.editById(id, specState => {
        return SpecPresenter.create(specState).setDescription(description);
      });
    },
    [specMarkEdit.type]: (presenter: SpecsPresenter, action: SpecMarkEdit) => {
      const {mark, id} = action.payload;

      return presenter.editById(id, specState => {
        return SpecPresenter.create(specState).setMark(mark);
      });
    },
    [chooseSpecFlowReadSuccess.type]: (
      presenter: SpecsPresenter,
      action: ChooseSpecFlowReadSuccess
    ) => {
      const {spec, id} = action.payload;

      return presenter.set(
        id,
        SpecPresenter.create()
          .setData(spec.data)
          .setDescription(spec.description)
          .setMark(spec.mark as string)
          .setEncoding(id)
      );
    }
  })
);
