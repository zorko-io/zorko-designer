import React from 'react';
import {MainLayout} from '../layout/MainLayout';
import {AnalyticBoard} from '../features/analyticBoard/components/AnalyticBoard';
import {ChooseSpecButton} from '../features/chooseSpecFlow/components/ChooseSpecButton';
import {HeaderLayout} from '../layout/HeaderLayout';
import {MainContentLayout} from '../layout/MainContentLayout';
import {MainMenuItems, MainMenuType} from '../components/VerticalMenu';
import {Sidebar} from '../features/sidebar/components/Sidebar';

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
      renderSideBar={() => <Sidebar activeMenu={props.activeMenu} />}
      renderContent={() => <MainContentLayout renderCanvasBoard={() => <AnalyticBoard />} />}
    />
  );
};

App.defaultProps = defaultProps;
