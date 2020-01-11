export interface NormalizedState<T> {
  byIds: {[key: string]: T};
  allIds: string[];
}
