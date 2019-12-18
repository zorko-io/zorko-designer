import {RootState} from '../../store/rootReducer';
import {createSelector} from '@reduxjs/toolkit';
import {EncodingChannelsPresenter} from './presenters';

export const selectEncodingChannels = (state: RootState) => state.encodingChannels;

export const selectEncodingChannelsAll = createSelector(selectEncodingChannels, encodingChannels =>
  EncodingChannelsPresenter.create(encodingChannels).all()
);
