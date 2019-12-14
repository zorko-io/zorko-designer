import {createReducer} from '../../common/utils/createReducer';
import produce from 'immer';
import {VegaLiteSchemaReadSuccess, vegaLiteSchemaReadSuccess} from './actions';
import {VegaLiteSchemaPresenter} from './presenters';

export interface VegaLiteSchema {
  definitions: any;
}

export interface VegaLiteSchemaState {
  schema: VegaLiteSchema;
}

export const initialVegaLiteSchemaState = VegaLiteSchemaPresenter.create().toState();

const reducers = createReducer<VegaLiteSchemaState>(initialVegaLiteSchemaState, {
  [vegaLiteSchemaReadSuccess.type]: (
    state: VegaLiteSchemaState,
    action: VegaLiteSchemaReadSuccess
  ) => {
    const {schema} = action.payload;

    return VegaLiteSchemaPresenter.create(state)
      .setSchema(schema)
      .toState();
  }
});

export default produce(reducers);
