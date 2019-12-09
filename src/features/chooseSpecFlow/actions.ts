import {createAction} from '@reduxjs/toolkit';
import {VegaLiteTopLevelUnitSpec} from '../../common/types';

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

export type ChooseSpecFlowOpenNewSpec = ReturnType<typeof chooseSpecFlowReadSuccess>;

export const chooseSpecFlowReadFailure = createAction('chooseSpecFlow/specReadFailure', error => ({
  payload: {error}
}));

export type ChooseSpecFlowReadFailure = ReturnType<typeof chooseSpecFlowReadFailure>;
