import {BaseNormalizedState} from '../../../core/normalize/BaseNormalizedState';
import {PositionChannelState} from './PositionChannelState';
import {NormalizedState} from '../../../core/normalize/NormalizedState';

export interface ChannelsState extends NormalizedState<PositionChannelState> {}

export class ChannelsPresenter extends BaseNormalizedState<PositionChannelState> {
  static create(state?: ChannelsState) {
    return new ChannelsPresenter(state);
  }
}
