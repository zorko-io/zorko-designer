import React from 'react';
import {MainMenuItems, MainMenuType, VerticalMenu} from '../../../components/VerticalMenu';
import {VerticalMenuItem} from '../../../components/VerticalMenuItem';
import {Link} from 'react-router-dom';
import {Icon, IconNames} from '../../../components';

interface Props {
  activeMenu: MainMenuType;
}

const defaultProps: Partial<Props> = {
  activeMenu: MainMenuItems.NONE
};

export const SidebarMenu = (props: Props) => {
  return (
    <VerticalMenu activeMenu={props.activeMenu}>
      <VerticalMenuItem type={MainMenuItems.VISUALIZATION}>
        <Link to={'/visualization'}>
          <Icon name={IconNames.CHAR_BAR} />
        </Link>
      </VerticalMenuItem>
      <VerticalMenuItem type={MainMenuItems.DATA}>
        <Link to={'/data'}>
          <Icon name={IconNames.SERVERS} />
        </Link>
      </VerticalMenuItem>
    </VerticalMenu>
  );
};

SidebarMenu.defaultProps = defaultProps;
