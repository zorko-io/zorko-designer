import {RootState} from '../../store/rootReducer';

export const selectEncodings = (state: RootState) => state.newEncoding;
