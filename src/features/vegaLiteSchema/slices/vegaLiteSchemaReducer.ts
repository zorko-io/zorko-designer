import {createReducer} from '../../../packages/presenterReducerUtils/createReducer';
import produce from 'immer';
import {VegaLiteSchemaReadSuccess, vegaLiteSchemaReadSuccess} from './vegaLiteSchemaActions';
import {VegaLiteSchemaPresenter} from '../presenters/VegaLiteSchemaPresenter';

export interface VegaLiteSchema {
  definitions: any;
}

export interface VegaLiteSchemaState {
  schema: VegaLiteSchema;
}

/**
 * @todo #114:40m/DEV VegaLiteSchema Migrate to Presenter-Reducer approach
 *  prep presenters, use createReducer util
 *
 */

export const initialVegaLiteSchemaState = VegaLiteSchemaPresenter.create().toState();

const vegaLiteSchemaReducer = createReducer<VegaLiteSchemaState>(initialVegaLiteSchemaState, {
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

export default produce(vegaLiteSchemaReducer);
