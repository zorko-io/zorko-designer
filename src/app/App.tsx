import React from 'react';
import {MainLayout} from '../layout/MainLayout';
import {AnalyticBoard} from '../features/analyticBoard/components/AnalyticBoard';
import {ChooseSpecButton} from '../features/chooseSpecFlow/components/ChooseSpecButton';
import {SidebarLayout} from '../layout/SidebarLayout';
import {VisualizationSidebarContainer} from '../features/visualizationSidebar/VisualizationSidebarContainer';
import {HeaderLayout} from '../layout/HeaderLayout';
import {MainContentLayout} from '../layout/MainContentLayout';
import {MainMenuItems, MainMenuType, SidebarMenu} from './SidebarMenu';
import {SidebarMenuItem} from './SidebarMenuItem';
import {Icon, IconNames} from '../components';
import {Link} from 'react-router-dom';

interface Props {
  activeMenu?: MainMenuType;
}

const defaultProps: Partial<Props> = {
  activeMenu: MainMenuItems.VISUALIZATION
};

export const App = (props: Props) => {
  return (
    <MainLayout
      renderHeader={() => <HeaderLayout renderContent={() => <ChooseSpecButton />} />}
      renderSideBar={() => (
        <SidebarLayout
          renderMenubar={() => (
            <SidebarMenu activeMenu={props.activeMenu}>
              <SidebarMenuItem type={MainMenuItems.VISUALIZATION}>
                <Link to={'/visualization'}>
                  <Icon name={IconNames.CHAR_BAR} />
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem type={MainMenuItems.DATA}>
                <Link to={'/data'}>
                  <Icon name={IconNames.SERVERS} />
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          )}
          renderContent={() => (
            <div>
              <span>Left Drawer</span>
              <VisualizationSidebarContainer />
            </div>
          )}
        />
      )}
      renderContent={() => <MainContentLayout renderCanvasBoard={() => <AnalyticBoard />} />}
    />
  );
};

App.defaultProps = defaultProps;
