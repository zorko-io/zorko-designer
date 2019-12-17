import {BaseNormalizedState} from '../../core/normalize/BaseNormalizedState';
import {SpecsState} from './reducers';
import {VegaLiteTopLevelUnitSpec} from '../../common/types';
import {Mark} from 'vega-lite/build/src/mark';

export class SpecsPresenter extends BaseNormalizedState<VegaLiteTopLevelUnitSpec> {
  static create(state?: SpecsState) {
    return new SpecsPresenter(state);
  }

  editDescription(id: string, description: string) {
    const spec = this.byId(id);

    spec.description = description;

    return this;
  }

  editEncodingChannelField(id: string, channelName: string, field: string) {
    const spec = this.byId(id);
    const channel = spec.encoding[channelName];

    channel.field = field;

    return this;
  }

  editMark(id: string, mark: Mark) {
    const spec = this.byId(id);

    spec.mark = mark;

    return this;
  }
}
