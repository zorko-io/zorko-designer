import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {VisualizationSidebarContainer} from '../../visualizationEditor/containers/VisualizationSidebarContainer';
import {DataSourceSidebarContainer} from '../../dataSourceMetadata/containers/DataSourceSidebarContainer';

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
