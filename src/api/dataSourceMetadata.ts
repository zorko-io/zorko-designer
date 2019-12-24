import {
  DataSource,
  InlineDataset,
  isInlineData,
  isUrlData,
  UrlData
} from 'vega-lite/build/src/data';
import logger from 'logrock';
import {
  DataSourceMetadata,
  LevelOfMeasurements,
  ValueTypes
} from '../common/DataSourceFieldDefinition';
import _ from 'lodash';
import dayjs from 'dayjs';
import dl from 'datalib';

/**
 * Data Source Metadata Discovery
 * @param dataSource
 */

async function fetchDataByUrl(dataSource: UrlData) {
  return new Promise((resolve, reject) => {
    dl.load(dataSource, function(err, data) {
      if (err) {
        reject(err);
      } else {
        try {
          const parsedData = dl.read(data);
          resolve(parsedData);
        } catch (error) {
          reject(err);
        }
      }
    });
  });
}

/**
 * @todo Move to application config,
 * I assume that it's a env vars or at least common config for app
 */
const MAX_OPTION_COUNT = 10;

async function discoverDataSourceMetadataByInlineDataset(inlineDataset: InlineDataset) {
  const values = inlineDataset;
  const firstObject = values[0];
  const fieldNames = Object.keys(firstObject);
  const metadata: DataSourceMetadata = fieldNames.reduce(
    (memo, name) => {
      const field = {
        name,
        valueType: ValueTypes.STRING,
        levelOfMeasurement: LevelOfMeasurements.ORDINAL,
        options: []
      };
      const value = firstObject[name];

      if (_.isString(value)) {
        if (dayjs(value).isValid()) {
          field.levelOfMeasurement = LevelOfMeasurements.TEMPORAL;
          field.valueType = ValueTypes.STRING;
        }
      } else if (_.isNumber(value)) {
        field.valueType = ValueTypes.NUMBER;
        field.levelOfMeasurement = LevelOfMeasurements.QUANTITATIVE;
      }

      const length = _.toLength(values);
      const optionCount = length < MAX_OPTION_COUNT ? length : MAX_OPTION_COUNT;

      field.options = _.slice(values as [], 0, optionCount);
      memo.fields.push(field);

      return memo;
    },
    {
      fields: []
    }
  );

  return metadata;
}

export async function fetchDataSourceMetadata(dataSource: DataSource) {
  let metadata: DataSourceMetadata = {
    fields: []
  };

  if (isInlineData(dataSource)) {
    /**
     * @todo Throw an error if inline data is bigger then 30Mb
     */
    const inlineDataset = dataSource.values;

    if (!_.isEmpty(inlineDataset)) {
      if (_.isArray(inlineDataset)) {
        metadata = await discoverDataSourceMetadataByInlineDataset(inlineDataset);
      } else {
        logger.warn('API|Fetch Data Source Metadata: Only Array-like Inline Datasets supported');
      }
    }
  } else if (isUrlData(dataSource)) {
    const inlineDataSet = await fetchDataByUrl(dataSource);

    if (!_.isEmpty(inlineDataSet)) {
      if (_.isArray(inlineDataSet)) {
        metadata = await discoverDataSourceMetadataByInlineDataset(inlineDataSet);
      } else {
        logger.warn('API|Fetch Data Source Metadata: Only Array-like Inline Datasets supported');
      }
    }
  } else {
    logger.warn(
      'API|Fetch Data Source Metadata: Only Inline Data Sources and URL Data Sources supported'
    );
  }

  return metadata;
}
