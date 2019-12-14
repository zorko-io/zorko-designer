import { createSelector } from '@reduxjs/toolkit';
import {RootState} from '../../store/rootReducer';

export const selectDataSourceMetadata = (state: RootState) => state.dataSourceMetadata;

export const selectDataSourceMetadataAll = createSelector(
  selectDataSourceMetadata,
  dataSourceMetadata => dataSourceMetadata.fields
);
