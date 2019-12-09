import {createAction} from '@reduxjs/toolkit';

export const repositoriesReadRequest = createAction('repositories/readRequest', (params?) => ({
  payload: {params}
}));

export type RepositoriesReadRequest = ReturnType<typeof repositoriesReadRequest>;

export const repositoriesReadSuccess = createAction('repositories/readSuccess', repositories => ({
  payload: {repositories}
}));

export type RepositoriesReadSuccess = ReturnType<typeof repositoriesReadSuccess>;

export const repositoriesReadFailure = createAction('repositories/readFailure', error => ({
  payload: {error}
}));

export type RepositoriesReadFailure = ReturnType<typeof repositoriesReadFailure>;
