import {createAction} from '@reduxjs/toolkit';
import {VegaLiteSchema} from '../presenters';

export const vegaLiteSchemaReadSuccess = createAction(
  'vegaLiteSchema/readSuccess',
  (schema: VegaLiteSchema) => ({
    payload: {schema}
  })
);

export type VegaLiteSchemaReadSuccess = ReturnType<typeof vegaLiteSchemaReadSuccess>;
