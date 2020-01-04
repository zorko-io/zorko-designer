import {RootState} from '../store/rootReducer';
import {VegaLiteSchemaPresenter} from '../presenters/vegaLiteSchema/VegaLiteSchemaPresenter';

export const selectVegaLiteSchemaMarkOptions = (state: RootState) => {
  return VegaLiteSchemaPresenter.create(state.vegaLiteSchema).getMarkOptions();
};
