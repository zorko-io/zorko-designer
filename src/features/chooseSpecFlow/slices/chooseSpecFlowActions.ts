import {createAction} from '@reduxjs/toolkit';
import {VegaLiteTopLevelUnitSpec} from '../../../packages/coreTypes/types';

export const chooseSpecFlowOpenSpecs = createAction('chooseSpecFlow/openSpecs');

export const chooseSpecFlowReadRequest = createAction(
  'chooseSpecFlow/specReadRequest',
  (id: string) => ({
    payload: {id}
  })
);

export type ChooseSpecFlowRead = ReturnType<typeof chooseSpecFlowReadRequest>;

export const chooseSpecFlowReadSuccess = createAction(
  'chooseSpecFlow/openNewSpec',
  (id: string, spec: VegaLiteTopLevelUnitSpec) => ({
    payload: {spec, id}
  })
);

export type ChooseSpecFlowReadSuccess = ReturnType<typeof chooseSpecFlowReadSuccess>;

export const chooseSpecFlowReadFailure = createAction('chooseSpecFlow/specReadFailure', error => ({
  payload: {error}
}));

export type ChooseSpecFlowReadFailure = ReturnType<typeof chooseSpecFlowReadFailure>;
