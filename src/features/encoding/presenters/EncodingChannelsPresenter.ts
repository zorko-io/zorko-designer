import {VegaLiteTopLevelUnitSpec} from '../../../common/types';
import {PositionChannelPresenter, PositionChannelState} from './PositionChannelPresenter';

export interface EncodingChannelsState {
  channels: {
    x: PositionChannelState | null;
  };
  order: any;
}

export class EncodingChannelsPresenter {
  private state: EncodingChannelsState;

  static create(state?: EncodingChannelsState) {
    return new EncodingChannelsPresenter(state);
  }

  constructor(state?: EncodingChannelsState) {
    if (!state) {
      this.reset();
    } else {
      this.state = state;
    }
  }

  extractChannels(spec: VegaLiteTopLevelUnitSpec) {
    // TODO: move encoding channels upper
    const encoding = spec.encoding;
    if (!encoding) {
      return this;
    }

    const x = encoding.x as any;

    if (x) {
      this.addChannel({
        name: 'x',
        field: x.field,
        type: x.type
      });
    }

    const y = encoding.y as any;

    if (y) {
      this.addChannel({
        name: 'y',
        field: y.field,
        type: y.type
      });
    }

    return this;
  }

  addChannel(channel) {
    this.state.channels[channel.name] = channel;
    this.state.order.push(channel.name);
  }

  editChannelByName(name, modificationCallback) {
    const channel = this.state.channels[name];

    const presenter = PositionChannelPresenter.create(channel);

    this.state.channels[name] = modificationCallback(presenter).toState();

    return this;
  }

  reset() {
    this.state = {
      channels: {
        x: null
      },
      order: []
    };

    return this;
  }

  allNames() {
    return this.state.order;
  }

  byName(name) {
    return this.state.channels[name];
  }

  all() {
    return this.allNames().map(name => this.byName(name));
  }

  toState(): EncodingChannelsState {
    return this.state;
  }
}
