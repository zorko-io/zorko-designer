import React from 'react';
import {DataSourceFieldDefinition} from '../../packages/coreTypes/DataSourceFieldDefinition';
import _ from 'lodash';
import {Button} from '../../components';

interface Props {
  fields?: DataSourceFieldDefinition[];
}

const defaultProps: Partial<Props> = {
  fields: []
};

export const DataSourceFieldList = (props: Props) => {
  const isEmpty = _.isEmpty(props.fields);

  return (
    <>
      {' '}
      {!isEmpty ? (
        props.fields.map(field => (
          <div key={field.name}>
            <Button>{field.name + ' ' + field.levelOfMeasurement}</Button>
          </div>
        ))
      ) : (
        <span>Fields not found</span>
      )}
    </>
  );
};

DataSourceFieldList.defaultProps = defaultProps;
