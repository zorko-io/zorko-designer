import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {VisualizationSidebarContainer} from '../../features/visualizationSidebar/VisualizationSidebarContainer';
import {DataSourceSidebarContainer} from '../dataSource/DataSourceSidebarContainer';

export const SidebarContent = () => {
  return (
    <div>
      <Switch>
        <Route path={'/visualization'} exact component={VisualizationSidebarContainer} />
        <Route path={'/data'} exact component={DataSourceSidebarContainer} />
      </Switch>
    </div>
  );
};
