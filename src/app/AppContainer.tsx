import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {App} from './App';
import {MainMenuItems} from '../components/VerticalMenu';

export const AppContainer = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Redirect to={'/visualization'} />} />
      <Route
        path="/visualization"
        exact
        render={() => <App activeMenu={MainMenuItems.VISUALIZATION} />}
      />
      <Route path="/data" exact render={() => <App activeMenu={MainMenuItems.DATA} />} />
    </Switch>
  );
};
