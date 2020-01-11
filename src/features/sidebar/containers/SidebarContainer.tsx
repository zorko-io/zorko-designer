import React from 'react';
import {MainMenuItems, MainMenuType} from '../../../components/VerticalMenu';
import {SidebarLayout} from '../../../components/layout/SidebarLayout';
import {SidebarMenu} from './SidebarMenu';
import {SidebarContent} from './SidebarContent';

interface Props {
  activeMenu: MainMenuType;
}

const defaultProps: Partial<Props> = {
  activeMenu: MainMenuItems.NONE
};

export const SidebarContainer = (props: Props) => {
  return (
    <SidebarLayout
      renderMenubar={() => <SidebarMenu activeMenu={props.activeMenu} />}
      renderContent={() => <SidebarContent />}
    />
  );
};

SidebarContainer.defaultProps = defaultProps;
