import {NormalizedState} from './NormalizedState';

export class BaseNormalizedState<I> {
  private readonly state: NormalizedState<I>;

  constructor(state?: NormalizedState<I>) {
    if (!state) {
      state = {allIds: [], byIds: {}};
    }

    this.state = state;
  }

  set(id: string, item: I): this {
    this.setItem(item, id);
    this.setId(id);
    return this;
  }

  setMany(items: I[], idPath?: Function): this {
    for (const item of items) {
      let id;

      if (!idPath) {
        // @ts-ignore
        id = item.id;
      } else {
        id = idPath(item);
      }

      this.set(id, item);
    }
    return this;
  }

  reset(): this {
    this.setByIds({});
    this.setAllIds([]);

    return this;
  }

  get(id: string) {
    return {
      ...this.getItem(id)
    };
  }

  allItems() {
    return this.getAllIds().map(id => this.get(id));
  }

  allIds() {
    return [...this.getAllIds()];
  }

  editById(id: string, modificationCallback: Function): this {
    const prevItem = this.get(id);
    this.setItem(modificationCallback(prevItem), id);

    return this;
  }

  toState(): NormalizedState<I> {
    return this.state;
  }

  protected getAllIds() {
    return this.state.allIds;
  }

  protected setAllIds(allIds: string[]) {
    this.state.allIds = allIds;
    return this;
  }

  protected setId(id: string) {
    const allIds = this.getAllIds();

    if (!allIds.find(i => i === id)) {
      allIds.push(id);
    }

    return this;
  }

  protected getItem(id: string) {
    const byIds = this.getByIds();
    return byIds[id];
  }

  protected getByIds() {
    return this.state.byIds;
  }

  protected setByIds(byIds) {
    this.state.byIds = byIds;
    return this;
  }

  protected setItem(item: I, id: string) {
    this.state.byIds[id] = item;
    return this;
  }
}
