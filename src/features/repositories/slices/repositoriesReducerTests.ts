import {NormalizedPresenter} from '../../../packages/corePresenters';
import {RepositoryState} from '../presenters';
import {createAction} from '@reduxjs/toolkit';
import repositoriesReducer from './repositoriesReducer';
import {repositoriesReadSuccess} from './repositoriesActions';
import {getTwoRepositories} from './__testFixtures__/repositoriesFixtures';
import {createRepositoryId} from '../presenters/createRepositoryId';

describe('repositoriesReducer', () => {
  let initState, actual, expected, action, presenter;

  beforeEach(() => {
    presenter = NormalizedPresenter.create<RepositoryState>();
    initState = presenter.toState();
  });

  it('creates init state', () => {
    action = createAction('anyAction');
    actual = repositoriesReducer(undefined, action);
    expected = presenter.toState();

    expect(actual).toEqual(expected);
  });

  it('adds may repositories', () => {
    const repositories = getTwoRepositories();
    action = repositoriesReadSuccess(repositories);
    actual = repositoriesReducer(initState, action);
    expected = presenter.setMany(repositories, createRepositoryId).toState();

    expect(actual).toEqual(expected);
  });
});
