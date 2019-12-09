export interface HistoryState<R> {
  past: Array<R>;
  present: R;
  future: Array<R>;
}
