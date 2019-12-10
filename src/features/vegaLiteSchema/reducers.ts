import {createReducer} from '../../common/utils/createReducer';
import produce from 'immer';
import {VegaLiteSchemaReadSuccess, vegaLiteSchemaReadSuccess} from './actions';

export interface VegaLiteSchemaState  {
  schema: object
}

export const initialVegaLiteSchemaState = {schema: {}};

const reducers = createReducer<VegaLiteSchemaState>(initialVegaLiteSchemaState, {
  [vegaLiteSchemaReadSuccess.type] : (
    state: VegaLiteSchemaState,
    action: VegaLiteSchemaReadSuccess
  ) => {
    const { schema } = action.payload;

    state.schema = schema;

    return state;
  }
});


export default produce(reducers)
