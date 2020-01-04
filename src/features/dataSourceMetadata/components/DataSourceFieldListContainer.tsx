import React from 'react';
import {DataSourceFieldList} from './DataSourceFieldList';
import {useSelector} from 'react-redux';
import {selectDataSourceMetadataAll} from '../../../selectors/dataSourceMetadataSelectors';

export const DataSourceFieldListContainer = () => {
  const fields = useSelector(selectDataSourceMetadataAll);

  return <DataSourceFieldList fields={fields} />;
};
