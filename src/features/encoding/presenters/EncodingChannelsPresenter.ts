import {PositionChannelPresenter, PositionChannelState} from './PositionChannelPresenter';
import {Encoding} from 'vega-lite/build/src/encoding';
import {DataSourceFieldDefinition} from '../../../common/DataSourceFieldDefinition';

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

  setChannels(encoding: Encoding<any>) {
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

  ingestWithFieldsSuggestion(fields: DataSourceFieldDefinition[]) {
    const options = fields.map(field => {
      return {value: field.name, label: field.name};
    });

    for (let channel of this.all()) {
      channel = PositionChannelPresenter.create(channel)
        .setFieldOptions(options)
        .toState();
      this.setChannel(channel);
    }

    return this;
  }

  setChannel(channel) {
    this.state.channels[channel.name] = channel;
  }

  editByName(name, modificationCallback) {
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
