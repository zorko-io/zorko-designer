import {ChannelsPresenter, PositionChannelPresenter} from '../presenters';
import {createChannelId} from '../../../common/utils';

export const getSimpleChannelsState = specId => {
  return ChannelsPresenter.create()
    .set(
      createChannelId(specId, 'x'),
      PositionChannelPresenter.create()
        .setField('a')
        .setType('quantitative')
        .setName('x')
    )
    .set(
      createChannelId(specId, 'y'),
      PositionChannelPresenter.create()
        .setField('b')
        .setType('ordinal')
        .setName('y')
    )
    .toState();
};
