import {Option} from './Option';

export enum LevelOfMeasurements {
  QUANTITATIVE = 'quantitative',
  TEMPORAL = 'temporal',
  ORDINAL = 'ordinal',
  NOMINAL = 'nominal',
  GEOJSON = 'geojson'
}

export type LevelOfMeasurement = LevelOfMeasurements.QUANTITATIVE
  | LevelOfMeasurements.TEMPORAL
  | LevelOfMeasurements.NOMINAL
  | LevelOfMeasurements.ORDINAL
  | LevelOfMeasurements.GEOJSON

export enum ValueTypes  {
  NUMBER = 'number',
  STRING = 'string',
  DATE = 'date'
}

export type ValueType = ValueTypes.NUMBER
  | ValueTypes.STRING
  | ValueTypes.DATE

export interface DataSourceFieldDefinition {
  id?: string
  valueType: ValueType
  levelOfMeasurement: LevelOfMeasurement
  name: string
  values?: Option<any>
}

export interface DataSourceMetadata {
  fields: DataSourceFieldDefinition[];
}



