import React, {useCallback, useContext} from 'react';
import ReactDOM from 'react-dom';
import {App} from './app/App';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import {VegaLiteTopLevelUnitSpec} from './common/types';
import barSpec from '../public/spec/vega-lite/bar.vl.json';
import {chooseSpecFlowReadSuccess} from './features/chooseSpecFlow/actions';
import {repositoriesLoadInitial} from './features/repositories/asyncActions';
import {AppLogger} from './app/AppLogger';
import vegaLiteSchema from './defaultVegaLiteSchema.json'
import {vegaLiteSchemaReadSuccess} from './features/vegaLiteSchema/actions';

declare global {
  interface Window {
    sessionID: string;
  }
}

window.sessionID = `sessionid-${Math.random()
  .toString(36)
  .substr(3, 9)}`;

const spec = barSpec as VegaLiteTopLevelUnitSpec;

store.dispatch(vegaLiteSchemaReadSuccess(vegaLiteSchema));
store.dispatch(repositoriesLoadInitial());
store.dispatch(chooseSpecFlowReadSuccess('232323', spec));

ReactDOM.render(
  <AppLogger sessionId={window.sessionID}>
    <Provider store={store}>
      <App />
    </Provider>
  </AppLogger>,
  document.getElementById('root')
);
