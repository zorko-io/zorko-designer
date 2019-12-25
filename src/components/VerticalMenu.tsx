import React, {ReactElement, ReactNodeArray} from 'react';

export enum MainMenuItems {
  VISUALIZATION = 'visualization',
  NONE = 'none',
  DATA = 'data'
}

export type MainMenuType = MainMenuItems.DATA | MainMenuItems.VISUALIZATION | MainMenuItems.NONE;

interface Props {
  activeMenu: MainMenuType;
  children: ReactElement | ReactNodeArray;
}

const defaultProps: Partial<Props> = {
  activeMenu: MainMenuItems.NONE
};

export const VerticalMenu = (props: Props) => {
  return (
    <div className="flex flex-col">
      {React.Children.map(props.children, child => {
        /**
         *  @todo #42:30m/DEV Provide proper typings for VerticalMenu component
         *   Remove Ts-Ignore for VerticalMenu component
         */
        // @ts-ignore
        const isActive = child.props.type === props.activeMenu;
        // @ts-ignore
        return React.cloneElement(child, {
          isActive: isActive
        });
      })}
    </div>
  );
};

VerticalMenu.defaultProps = defaultProps;
