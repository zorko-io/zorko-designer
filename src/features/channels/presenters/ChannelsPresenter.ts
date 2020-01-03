import {BaseNormalizedState} from '../../../packages/corePresenters/normalize/BaseNormalizedState';
import {PositionChannelState} from './PositionChannelState';
import {NormalizedState} from '../../../packages/corePresenters/normalize/NormalizedState';

export interface ChannelsState extends NormalizedState<PositionChannelState> {}

export class ChannelsPresenter extends BaseNormalizedState<PositionChannelState> {
  static create(state?: ChannelsState) {
    return new ChannelsPresenter(state);
  }
}
