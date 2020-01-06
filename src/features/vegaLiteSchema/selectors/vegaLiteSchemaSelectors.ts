import {RootState} from '../../../store/rootReducer';
import {VegaLiteSchemaPresenter} from '../presenters/VegaLiteSchemaPresenter';

export const selectVegaLiteSchemaMarkOptions = (state: RootState) => {
  return VegaLiteSchemaPresenter.create(state.vegaLiteSchema).getMarkOptions();
};
