import {VegaLiteTopLevelUnitSpec} from '../../common/types';

export const getSimpleSpec = (): VegaLiteTopLevelUnitSpec => {
  return {
    description: 'hohooho',
    data: {
      values: [
        {a: 1, b: 'c'},
        {a: 2, b: 'n'}
      ]
    },
    mark: 'bar',
    encoding: {
      x: {field: 'a', type: 'quantitative'},
      y: {field: 'b', type: 'ordinal'}
    }
  };
};
