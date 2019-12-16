import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {App, MainMenuItems} from './App';

export const AppShell = () => {
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
