import {NormalizedState} from './NormalizedState';

export class BaseNormalizedState<I> {
  private readonly state: NormalizedState<I>;

  constructor(state?: NormalizedState<I>) {
    if (!state) {
      state = {allIds: [], byIds: {}};
    }

    this.state = state;
  }

  get byIds() {
    return this.state.byIds;
  }

  set byIds(byIds) {
    this.state.byIds = byIds;
  }

  get allIds() {
    return this.state.allIds;
  }

  set allIds(allIds) {
    this.state.allIds = allIds;
  }

  // TODO: rename to 'set'
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

  all() {
    return this.allIds.map(id => this.byId(id));
  }

  ids() {
    return this.allIds;
  }

  editById(id: string, modificationCallback) {
    const prevItem = this.byId(id);
    const nextItem = modificationCallback(prevItem);
    this.byIds[id] = nextItem;

    return this;
  }

  toState(): NormalizedState<I> {
    return this.state;
  }
}
