import {PositionChannelState} from './PositionChannelState';
import {NormalizedState} from '../../../packages/corePresenters/normalize/NormalizedState';

export type EncodingChannelState = PositionChannelState;

export interface ChannelsState extends NormalizedState<EncodingChannelState> {}
