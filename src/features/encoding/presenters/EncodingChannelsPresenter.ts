import {VegaLiteTopLevelUnitSpec} from '../../../common/types';
import {PositionChannelPresenter, PositionChannelState} from './PositionChannelPresenter';

export interface EncodingChannelsState {
  channels: {
    x: PositionChannelState | null;
  };
  order: any;
}

export class EncodingChannelsPresenter {
  private readonly state: EncodingChannelsState;

  static create(state?: EncodingChannelsState) {
    return new EncodingChannelsPresenter(state);
  }

  constructor(state?: EncodingChannelsState) {
    if (!state) {
      state = {
        channels: {
          x: null
        },
        order: []
      };
    }

    this.state = state;
  }

  extractChannels(spec: VegaLiteTopLevelUnitSpec) {
    const encoding = spec.encoding;
    if (!encoding) {
      return this;
    }

    const x = encoding.x as any;

    if (x) {
      const channel = PositionChannelPresenter.create({
        name: 'x',
        field: x.field,
        type: x.type
      }).toState();
      this.addChannel('x', channel);
    }

    return this;
  }

  addChannel(name, channel) {
    this.state.channels[name] = channel;
    this.state.order.push(name);
  }

  editChannelByName(name, modificationCallback) {
    const channel = this.state.channels[name];

    const presenter = PositionChannelPresenter.create(channel);

    this.state.channels[name] = modificationCallback(presenter).toState();

    return this;
  }

  toState(): EncodingChannelsState {
    return this.state;
  }
}
