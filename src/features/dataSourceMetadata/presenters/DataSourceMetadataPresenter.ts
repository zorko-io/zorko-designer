import {DataSourceFieldDefinition} from '../../../packages/coreTypes/DataSourceFieldDefinition';
import {BaseStatePresenter} from '../../../packages/corePresenters/BaseStatePresenter';

export type DataSourceMetadataState = {
  fields: DataSourceFieldDefinition[];
};

export class DataSourceMetadataPresenter extends BaseStatePresenter<DataSourceMetadataState> {
  static create(state?: DataSourceMetadataState) {
    return new DataSourceMetadataPresenter(state);
  }

  getDefaultState(): DataSourceMetadataState {
    return {fields: []};
  }

  setFields(fields: DataSourceFieldDefinition[]): this {
    this.state.fields = fields;
    return this;
  }
}
