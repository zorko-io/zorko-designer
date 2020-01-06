import {createAction} from '@reduxjs/toolkit';
import {Mark} from 'vega-lite/build/src/mark';

export const specDescriptionEdit = createAction(
  'specs/descriptionEdit',
  ({id, description} = {}) => ({
    payload: {id, description}
  })
);

export type SpecDescriptionEdit = ReturnType<typeof specDescriptionEdit>;

export const specMarkEdit = createAction('specs/markEdit', (id: string, mark: Mark) => ({
  payload: {id, mark}
}));

export type SpecMarkEdit = ReturnType<typeof specMarkEdit>;
