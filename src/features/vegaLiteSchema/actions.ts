import {createAction} from '@reduxjs/toolkit';

export const vegaLiteSchemaReadSuccess = createAction(
  'vegaLiteSchema/readSuccess',
  (schema: object) => ({
    payload: { schema }
  })
);

export type VegaLiteSchemaReadSuccess = ReturnType<typeof vegaLiteSchemaReadSuccess>;
