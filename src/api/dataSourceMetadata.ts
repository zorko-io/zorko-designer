import {DataSource, isInlineData} from 'vega-lite/build/src/data';
import logger from 'logrock';
import {DataSourceMetadata, LevelOfMeasurements, ValueTypes} from '../common/DataSourceFieldDefinition';
import _ from 'lodash';
import dayjs from 'dayjs';

/**
 * Data Source Metadata Discovery
 * @param dataSource
 */

const MAX_OPTION_COUNT = 10;

export async function fetchDataSourceMetadata(dataSource: DataSource) {
  let metadata: DataSourceMetadata = {
    fields: []
  };

  if (isInlineData(dataSource)) {
    // Starts with naive implementation
    const values = dataSource.values;

    if (!_.isEmpty(values)){
      if (_.isArray(values)){
        const firstObject = values[0];
        const fieldNames =Object.keys(firstObject);
        metadata = fieldNames.reduce((memo,name) => {
          const field = {
            name,
            valueType: ValueTypes.STRING,
            levelOfMeasurement: LevelOfMeasurements.ORDINAL,
            options: []
          };
          const value = firstObject[name];

          if (_.isString(value)) {
            // TODO: check with datejs that it's a date

            if (dayjs(value).isValid()) {
              field.levelOfMeasurement = LevelOfMeasurements.TEMPORAL;
              field.valueType = ValueTypes.STRING;
            }

          } else if (_.isNumber(value)) {
            field.valueType = ValueTypes.NUMBER;
            field.levelOfMeasurement = LevelOfMeasurements.QUANTITATIVE
          }

          const length = _.toLength(values);
          const optionCount = length < MAX_OPTION_COUNT ? length : MAX_OPTION_COUNT;

          field.options = _.slice(values as [], 0, optionCount);
          memo.fields.push(field);

          return memo;

        }, metadata);
      } else {
        logger.warn('API|Fetch Data Source Metadata: Only Array-like inline Data Sources supported')
      }
    }

  } else {
    logger.warn('API|Fetch Data Source Metadata: Only inline Data Sources supported')
  }

  return metadata;
}
