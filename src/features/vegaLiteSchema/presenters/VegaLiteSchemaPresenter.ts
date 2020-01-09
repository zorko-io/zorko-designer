import {VegaLiteSchemaState} from './VegaLiteSchemaState';
import {VegaLiteSchema} from './VegaLiteSchema';

export class VegaLiteSchemaPresenter {
  private state: VegaLiteSchemaState;

  static create(state?: VegaLiteSchemaState) {
    return new VegaLiteSchemaPresenter(state);
  }

  constructor(state?: VegaLiteSchemaState) {
    if (!state) {
      this.state = {schema: {definitions: {}}};
    } else {
      this.state = state;
    }
  }

  getSchema() {
    return this.state.schema;
  }

  setSchema(schema: VegaLiteSchema): this {
    this.state.schema = schema;

    return this;
  }

  byDef(definition: string) {
    return this.getSchema().definitions[definition];
  }

  getMarkOptions() {
    return this.byDef('Mark').enum.map(mark => ({
      label: mark,
      value: mark
    }));
  }

  toState() {
    return this.state;
  }
}
