import {specDescriptionEdit, SpecDescriptionEdit, SpecMarkEdit, specMarkEdit} from './specsActions';
import {ChooseSpecFlowReadSuccess, chooseSpecFlowReadSuccess} from '../../chooseSpecFlow/slices';
import {createReducerWithPresenter} from '../../../packages/presenterReducerUtils/createReducerWithPresenter';
import {SpecPresenter, SpecsState, SpecState} from '../presenters';
import produce from 'immer';
import {NormalizedPresenter} from '../../../packages/corePresenters';

export default produce(
  createReducerWithPresenter<SpecsState, NormalizedPresenter<SpecState>>(
    NormalizedPresenter.create,
    {
      [specDescriptionEdit.type]: (presenter, action: SpecDescriptionEdit) => {
        const {description, id} = action.payload;

        return presenter.editById(id, specState => {
          return SpecPresenter.create(specState).setDescription(description);
        });
      },
      [specMarkEdit.type]: (presenter, action: SpecMarkEdit) => {
        const {mark, id} = action.payload;

        return presenter.editById(id, specState => {
          return SpecPresenter.create(specState).setMark(mark);
        });
      },
      [chooseSpecFlowReadSuccess.type]: (presenter, action: ChooseSpecFlowReadSuccess) => {
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
    }
  )
);
