import {SpecPresenter, SpecState} from '../../presenters';
import {NormalizedPresenter} from '../../../../packages/corePresenters';

export const getStateWithOneSpec = (id, spec, initState?) =>
  NormalizedPresenter.create<SpecState>(initState)
    .set(
      id,
      SpecPresenter.create()
        .setEncoding(id)
        .setData(spec.data)
        .setDescription(spec.description)
        .setMark(spec.mark as string)
        .setEncoding(id)
        .toState()
    )
    .toState();
