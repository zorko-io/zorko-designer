import {DataSourceMetadataPresenter} from './DataSourceMetadataPresenter';
import {
  DataSourceFieldDefinition,
  LevelOfMeasurements,
  ValueTypes
} from '../../../packages/coreTypes/DataSourceFieldDefinition';

describe('DataSourceMetadataPresenter', () => {
  let presenter;

  beforeEach(() => {
    presenter = DataSourceMetadataPresenter.create();
  });

  it('creates default', () => {
    expect(presenter.toState()).toMatchSnapshot();
  });

  it('sets new fields ', () => {
    const fieldDefinition: DataSourceFieldDefinition = {
      id: 'dasd',
      levelOfMeasurement: LevelOfMeasurements.NOMINAL,
      name: 'dasdsdasdasd',
      valueType: ValueTypes.STRING
    };
    expect(presenter.setFields([fieldDefinition]).toState()).toMatchSnapshot();
  });
});
