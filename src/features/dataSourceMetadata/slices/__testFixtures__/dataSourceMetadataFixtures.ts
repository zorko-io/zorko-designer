import {
  LevelOfMeasurements,
  ValueTypes
} from '../../../../packages/coreTypes/DataSourceFieldDefinition';

export function getFields() {
  return [
    {
      id: 'dasd',
      levelOfMeasurement: LevelOfMeasurements.NOMINAL,
      name: 'dasdsdasdasd',
      valueType: ValueTypes.STRING
    },
    {
      id: '349324938498',
      levelOfMeasurement: LevelOfMeasurements.ORDINAL,
      name: 'jjfjfjf',
      valueType: ValueTypes.STRING
    }
  ];
}
