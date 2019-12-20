import {BaseNormalizedState} from '../../core/normalize/BaseNormalizedState';
import {SpecsState, SpecState} from './reducers';
import {Mark} from 'vega-lite/build/src/mark';

export class SpecsPresenter extends BaseNormalizedState<SpecState> {
  static create(state?: SpecsState) {
    return new SpecsPresenter(state);
  }

  editDescription(id: string, description: string) {
    const spec = this.get(id);

    spec.description = description;

    return this;
  }

  editEncodingChannelField(id: string, channelName: string, field: string) {
    const spec = this.get(id);
    const channel = spec.encoding[channelName];

    channel.field = field;

    return this;
  }

  editMark(id: string, mark: Mark) {
    const spec = this.get(id);

    spec.mark = mark;

    return this;
  }
}
