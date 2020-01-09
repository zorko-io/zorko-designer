import {VegaLiteSchemaPresenter} from './VegaLiteSchemaPresenter';
import vegaLiteSchema from './../../../defaultVegaLiteSchema.json';

describe('VegaLiteSchemaPresenter', () => {
  let presenter;

  beforeEach(() => {
    presenter = VegaLiteSchemaPresenter.create();
  });

  it('creates default', () => {
    expect(VegaLiteSchemaPresenter.create().toState()).toMatchSnapshot();
  });

  it('sets schema', () => {
    expect(presenter.setSchema(vegaLiteSchema).toState()).toMatchSnapshot();
  });

  it('gets schema', () => {
    expect(presenter.setSchema(vegaLiteSchema).getSchema()).toEqual(vegaLiteSchema);
  });

  it('gets definition by name', () => {
    expect(presenter.setSchema(vegaLiteSchema).byDef('Mark')).toEqual(
      vegaLiteSchema.definitions['Mark']
    );
  });

  it('gets all marks as options', () => {
    expect(presenter.setSchema(vegaLiteSchema).getMarkOptions()).toMatchSnapshot();
  });
});
