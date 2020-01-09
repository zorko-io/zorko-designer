import {RepositoryState} from '../../presenters';

export function getTwoRepositories(): RepositoryState[] {
  return [
    {id: '123', name: 'test', resources: []},
    {id: '343', name: 'boom', resources: []}
  ];
}
