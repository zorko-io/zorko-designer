import {NormalizedState} from './NormalizedState';
import {StatePresenter} from '../StatePresenter';

/**
 * @todo #109:55m/DEV It forse to create normalization for each store slice
 *  it's not efficient, we need reusable normalization store container
 *
 */

export class BaseNormalizedState<I> implements StatePresenter<NormalizedState<I>> {
  private readonly state: NormalizedState<I>;

  constructor(state?: NormalizedState<I>) {
    if (!state) {
      state = {allIds: [], byIds: {}};
    }

    this.state = state;
  }

  set(id: string, item): this {
    this.setItem(item, id);
    this.setId(id);
    return this;
  }

  setMany(items: I[], idPath?: Function): this {
    for (const item of items) {
      let id;

      if (!idPath) {
        /**
         *  @todo #42:15m/DEV Provide strict typing for path gen function
         *   Remove Ts-Ignore for VerticalMenu component
         */
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
    return this.getItem(id);
  }

  allItems() {
    return this.getAllIds().map(id => this.get(id));
  }

  allIds() {
    return this.getAllIds();
  }

  editById(id: string, modificationCallback: Function): this {
    const prevItem = this.get(id);
    let callbackResult = modificationCallback(prevItem);

    if (callbackResult.toState) {
      callbackResult = callbackResult.toState();
    }

    this.setItem(callbackResult, id);

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
    let nextItem = item;
    /**
     *  @todo #42:30m/DEV Define Item so that it might be a presenter
     *   assuming that we can extend this one or
     *   prep yet one class so it would accept only presenters as items
     */
    // @ts-ignore
    if (item.toState) {
      // @ts-ignore
      nextItem = item.toState();
    }

    this.state.byIds[id] = nextItem;
    return this;
  }
}
