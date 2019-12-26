import {selectAnalyticBoard, selectAnalyticBoardMainSpecId} from './selectors';

describe('Select Analytic Board', () => {
  let rootState, specId;

  beforeEach(() => {
    specId = '1234';
    rootState = {analyticBoard: {}, mainSpecId: specId};
  });

  it('selects analytic board', () => {
    expect(selectAnalyticBoard(rootState)).toBe(rootState.analyticBoard);
  });

  it('selects mainSpecId', () => {
    expect(selectAnalyticBoardMainSpecId(rootState)).toEqual(rootState.analyticBoard.mainSpecId);
  });
});
