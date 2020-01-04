import {SpecPresenter, SpecsPresenter} from '../../../presenters/specs';

export const getStateWithOneSpec = (id, spec, initState?) =>
  SpecsPresenter.create(initState)
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
