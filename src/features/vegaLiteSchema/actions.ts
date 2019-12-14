import {createAction} from '@reduxjs/toolkit';
import {VegaLiteSchema} from './reducers';

export const vegaLiteSchemaReadSuccess = createAction(
  'vegaLiteSchema/readSuccess',
  (schema: VegaLiteSchema) => ({
    payload: {schema}
  })
);

export type VegaLiteSchemaReadSuccess = ReturnType<typeof vegaLiteSchemaReadSuccess>;
