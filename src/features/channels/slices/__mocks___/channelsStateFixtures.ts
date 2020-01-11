import {EncodingChannelState, PositionChannelPresenter} from '../../presenters';
import {NormalizedPresenter} from '../../../../packages/corePresenters';
import {createChannelId} from '../../../../packages/idGenderators/createChannelId';

export const getSimpleChannelsState = specId => {
  return NormalizedPresenter.create<EncodingChannelState>()
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
