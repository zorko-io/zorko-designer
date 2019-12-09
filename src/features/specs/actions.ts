import {createAction} from '@reduxjs/toolkit';

export const specDescriptionEdit = createAction(
  'specs/specDescriptionEdit',
  ({id, description} = {}) => ({
    payload: {id, description}
  })
);

export type SpecDescriptionEdit = ReturnType<typeof specDescriptionEdit>;
