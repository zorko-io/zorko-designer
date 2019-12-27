import {BaseStatePresenter} from '../../../core/BaseStatePresenter';
import {AnalyticBoardState} from './AnalyticBoardState';

export class AnalyticBoardPresenter extends BaseStatePresenter<AnalyticBoardState> {
  static create(state?: AnalyticBoardState) {
    return new AnalyticBoardPresenter(state);
  }

  getDefaultState(): AnalyticBoardState {
    return {
      mainSpecId: '',
      encodingChannels: []
    };
  }

  setMainSpec(id: string) {
    this.state.mainSpecId = id;
    return this;
  }

  getMainSpec() {
    return this.state.mainSpecId;
  }

  setChannels(channels: string[]) {
    this.state.encodingChannels = channels;
    return this;
  }

  getChannels() {
    return this.state.encodingChannels;
  }
}
