import {NormalizedState} from './NormalizedState';

export class BaseNormalizedState<I> {
  private byIds: {[key: string]: I};
  private allIds: string[];
  private state: NormalizedState<I>;

  constructor(state?: NormalizedState<I>) {
    if (!state) {
      state = {allIds: [], byIds: {}};
    }

    this.byIds = state.byIds;
    this.allIds = state.allIds;
    this.state = state;
  }

  add(item: I, id: string): this {
    this.byIds[id] = item;
    this.allIds.push(id);
    return this;
  }

  reset(): this {
    this.byIds = {};
    this.allIds = [];
    return this;
  }

  byId(id: string) {
    return this.byIds[id];
  }

  items() {
    return this.allIds.map(id => this.byId(id));
  }

  ids() {
    return this.allIds;
  }

  toState(): NormalizedState<I> {
    return this.state;
  }
}
