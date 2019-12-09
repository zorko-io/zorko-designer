import {BaseNormalizedState} from '../../core/normalize/BaseNormalizedState';
import {SpecsState} from './reducers';
import {VegaLiteTopLevelUnitSpec} from '../../common/types';

export class Presenters extends BaseNormalizedState<VegaLiteTopLevelUnitSpec> {
  static create(state?: SpecsState) {
    return new Presenters(state);
  }

  editDescription(id: string, description: string) {
    const spec = this.byId(id);

    spec.description = description;

    return this;
  }
}
