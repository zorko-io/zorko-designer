import {EncodingChannelState, PositionChannelPresenter} from '../../presenters';
import {createChannelId} from '../../../../packages/presenterReducerUtils';
import {NormalizedPresenter} from '../../../../packages/corePresenters/normalize/NormalizedPresenter';

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
