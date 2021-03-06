import React from 'react';
import {MainLayout} from '../components/layout/MainLayout';
import {AnalyticBoardContainer} from '../features/analyticBoard/containers/AnalyticBoardContainer';
import {ChooseSpecButtonContainer} from '../features/chooseSpecFlow/containers/ChooseSpecButtonContainer';
import {HeaderLayout} from '../components/layout/HeaderLayout';
import {MainContentLayout} from '../components/layout/MainContentLayout';
import {MainMenuItems, MainMenuType} from '../components/VerticalMenu';
import {SidebarContainer} from '../features/sidebar/containers/SidebarContainer';

interface Props {
  activeMenu?: MainMenuType;
}

const defaultProps: Partial<Props> = {
  activeMenu: MainMenuItems.VISUALIZATION
};

export const App = (props: Props) => {
  return (
    <MainLayout
      renderHeader={() => <HeaderLayout renderContent={() => <ChooseSpecButtonContainer />} />}
      renderSideBar={() => <SidebarContainer activeMenu={props.activeMenu} />}
      renderContent={() => (
        <MainContentLayout renderCanvasBoard={() => <AnalyticBoardContainer />} />
      )}
    />
  );
};

App.defaultProps = defaultProps;
