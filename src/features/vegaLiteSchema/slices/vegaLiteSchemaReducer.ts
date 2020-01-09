import produce from 'immer';
import {VegaLiteSchemaReadSuccess, vegaLiteSchemaReadSuccess} from './vegaLiteSchemaActions';
import {VegaLiteSchemaPresenter, VegaLiteSchemaState} from '../presenters';
import {createReducerWithPresenter} from '../../../packages/presenterReducerUtils/createReducerWithPresenter';

export default produce(
  createReducerWithPresenter<VegaLiteSchemaState, VegaLiteSchemaPresenter>(
    VegaLiteSchemaPresenter.create,
    {
      [vegaLiteSchemaReadSuccess.type]: (presenter, action: VegaLiteSchemaReadSuccess) => {
        const {schema} = action.payload;

        return presenter.setSchema(schema);
      }
    }
  )
);
